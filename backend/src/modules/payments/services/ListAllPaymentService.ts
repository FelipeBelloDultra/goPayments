import { inject, injectable } from 'tsyringe';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import IPaymentsRepository from '../repositories/IPaymentsRepository';

import Payment from '../infra/typeorm/entities/Payment';

interface Request {
  user_id: string;
  status?: string;
}

@injectable()
class ListAppPaymentService {
  constructor(
    @inject('PaymentsRepository')
    private paymentsRepository: IPaymentsRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  // Cache provider implementation
  public async execute({ user_id, status }: Request): Promise<Payment[]> {
    if (status) {
      const payments = await this.paymentsRepository.findAll(user_id, status);

      return payments;
    }

    let payments = await this.cacheProvider.recover<Payment[]>(
      `payments-list:${user_id}`,
    );

    if (!payments) {
      payments = await this.paymentsRepository.findAll(user_id, status);

      await this.cacheProvider.save(`payments-list:${user_id}`, payments);
    }

    return payments;
  }
}

export default ListAppPaymentService;
