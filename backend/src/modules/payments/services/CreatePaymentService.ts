import { injectable, inject } from 'tsyringe';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import IPaymentsRepository from '../repositories/IPaymentsRepository';

import Payment from '../infra/typeorm/entities/Payment';

interface Request {
  user_id: string;
  title: string;
  date: Date;
  description: string;
  value: number;
}

@injectable()
class CreatePaymentService {
  constructor(
    @inject('PaymentsRepository')
    private paymentsRepository: IPaymentsRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({
    user_id,
    title,
    date,
    description,
    value,
  }: Request): Promise<Payment> {
    const payment = await this.paymentsRepository.create({
      title,
      date,
      description,
      value,
      user_id,
    });

    await this.cacheProvider.invalidatePrefix('payments-list');

    return payment;
  }
}

export default CreatePaymentService;
