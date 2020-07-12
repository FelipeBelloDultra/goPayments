import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Payment from '../models/Payment';

interface Request {
  id: string;
  user_id: string;
}

class AlterPaymentStatusService {
  public async execute({ id, user_id }: Request): Promise<Payment> {
    const paymentRepository = getRepository(Payment);

    const payment = await paymentRepository.findOne({ where: { id, user_id } });

    if (!payment) {
      throw new AppError('Payment not found.');
    }

    await paymentRepository.update({ id: payment.id }, { status: 'paid' });

    return payment;
  }
}

export default AlterPaymentStatusService;
