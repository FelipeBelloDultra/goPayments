import { injectable, inject } from 'tsyringe';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import AppError from '@shared/errors/AppError';
import IPaymentsRepository from '../repositories/IPaymentsRepository';

import Payment from '../infra/typeorm/entities/Payment';

interface Request {
  id: string;
  user_id: string;
}

@injectable()
class AlterPaymentStatusService {
  constructor(
    @inject('PaymentsRepository')
    private paymentsRepository: IPaymentsRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({ id, user_id }: Request): Promise<Payment> {
    const payment = await this.paymentsRepository.findById(id, user_id);

    if (!payment) {
      throw new AppError('Payment not found.');
    }

    if (payment.status === 'paid') {
      throw new AppError('Payment already paid.');
    }

    await this.paymentsRepository.update(payment.id);

    const recoveredPayments = await this.cacheProvider.recover<Payment[]>(
      `payments-list:${user_id}`,
    );

    if (recoveredPayments) {
      const newRecoveredPayments = recoveredPayments.map(newPayment => ({
        ...newPayment,
        status: newPayment.id === id ? 'paid' : newPayment.status,
      }));

      await this.cacheProvider.invalidatePrefix('payments-list');

      await this.cacheProvider.save(
        `payments-list:${user_id}`,
        newRecoveredPayments,
      );
    }

    return payment;
  }
}

export default AlterPaymentStatusService;
