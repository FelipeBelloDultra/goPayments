import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Payment from '../models/Payment';

interface Request {
  id: string;
}

class ListAppPaymentService {
  public async execute({ id }: Request): Promise<Payment> {
    const paymentsRepository = getRepository(Payment);

    const payment = await paymentsRepository.findOne({ where: { id } });

    if (!payment) {
      throw new AppError('Payment not found.');
    }

    return payment;
  }
}

export default ListAppPaymentService;
