import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Payment from '../infra/typeorm/entities/Payment';

import IPaymentsRepository from '../repositories/IPaymentsRepository';

interface Request {
  id: string;
  user_id: string;
}

@injectable()
class AlterPaymentStatusService {
  constructor(
    @inject('PaymentsRepository')
    private paymentsRepository: IPaymentsRepository,
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

    return payment;
  }
}

export default AlterPaymentStatusService;
