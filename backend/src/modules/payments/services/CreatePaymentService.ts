import { injectable, inject } from 'tsyringe';

import Payment from '../infra/typeorm/entities/Payment';

import IPaymentsRepository from '../repositories/IPaymentsRepository';

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

    return payment;
  }
}

export default CreatePaymentService;
