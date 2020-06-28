import { getRepository } from 'typeorm';

import Payment from '../models/Payment';

interface Request {
  id: string;
  title: string;
  date: Date;
  description: string;
  value: number;
}

class CreatePaymentService {
  public async execute({
    id,
    title,
    date,
    description,
    value,
  }: Request): Promise<Payment> {
    const paymentRepository = getRepository(Payment);

    const payment = paymentRepository.create({
      title,
      date,
      description,
      value,
      user_id: id,
      paid: false,
    });

    await paymentRepository.save(payment);

    return payment;
  }
}

export default CreatePaymentService;
