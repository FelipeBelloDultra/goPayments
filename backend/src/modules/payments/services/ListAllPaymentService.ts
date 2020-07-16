import { inject, injectable } from 'tsyringe';

import Payment from '../infra/typeorm/entities/Payment';

import IPaymentsRepository from '../repositories/IPaymentsRepository';

interface Request {
  id: string;
  status?: string;
}

@injectable()
class ListAppPaymentService {
  constructor(
    @inject('PaymentsRepository')
    private paymentsRepository: IPaymentsRepository,
  ) {}

  public async execute({ id, status }: Request): Promise<Payment[]> {
    const payments = await this.paymentsRepository.findAll(id, status);

    return payments;
  }
}

export default ListAppPaymentService;
