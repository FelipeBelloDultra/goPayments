import { inject, injectable } from 'tsyringe';

import Payment from '../infra/typeorm/entities/Payment';

import IPaymentsRepository from '../repositories/IPaymentsRepository';

interface Request {
  user_id: string;
  status?: string;
}

@injectable()
class ListAppPaymentService {
  constructor(
    @inject('PaymentsRepository')
    private paymentsRepository: IPaymentsRepository,
  ) {}

  public async execute({ user_id, status }: Request): Promise<Payment[]> {
    const payments = await this.paymentsRepository.findAll(user_id, status);

    return payments;
  }
}

export default ListAppPaymentService;
