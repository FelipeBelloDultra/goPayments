import Payment from '../infra/typeorm/entities/Payment';

import ICraetePaymentDTO from '../dtos/ICreatePaymentDTO';

export default interface IPaymentsRepository {
  findById(id: string, user_id: string): Promise<Payment | undefined>;
  findAll(id: string, status?: string): Promise<Payment[]>;
  update(id: string): Promise<void>;
  create(data: ICraetePaymentDTO): Promise<Payment>;
}
