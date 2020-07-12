import { getRepository } from 'typeorm';

import Payment from '../models/Payment';

interface Request {
  id: string;
  status?: string;
}

class ListAppPaymentService {
  public async execute({ id, status }: Request): Promise<Payment[]> {
    const paymentsRepository = getRepository(Payment);

    const where = status ? { user_id: id, status } : { user_id: id };

    const payments = await paymentsRepository.find({ where });

    return payments;
  }
}

export default ListAppPaymentService;
