import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Payment from '../infra/typeorm/entities/Payment';

import IPaymentsRepository from '../repositories/IPaymentsRepository';

interface Request {
  id: string;
  user_id: string;
}

@injectable()
class ListAppPaymentService {
  constructor(
    @inject('PaymentsRepository')
    private paymentsRepository: IPaymentsRepository,
  ) {}

  public async execute({ id, user_id }: Request): Promise<Payment> {
    const payment = await this.paymentsRepository.findById(id, user_id);

    if (!payment) {
      throw new AppError('Payment not found.');
    }

    return payment;
  }
}

export default ListAppPaymentService;
