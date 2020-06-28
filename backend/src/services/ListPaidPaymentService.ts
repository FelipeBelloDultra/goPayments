import { getRepository } from 'typeorm';

import Payment from '../models/Payment';

interface Request {
  id: string;
}

class ListPaidPaymentService {
  public async execute({ id }: Request): Promise<Payment[]> {
    const paymentsRepository = getRepository(Payment);

    const payments = await paymentsRepository.find({
      where: { user_id: id, paid: true },
    });

    return payments;
  }
}

export default ListPaidPaymentService;
