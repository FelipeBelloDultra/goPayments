import { getRepository, Repository } from 'typeorm';

import IPaymentsRepository from '@modules/payments/repositories/IPaymentsRepository';

import ICreatePaymentDTO from '@modules/payments/dtos/ICreatePaymentDTO';

import Payment from '../entities/Payment';

class PaymentsRespository implements IPaymentsRepository {
  private ormRepository: Repository<Payment>;

  constructor() {
    this.ormRepository = getRepository(Payment);
  }

  public async findById(
    id: string,
    user_id: string,
  ): Promise<Payment | undefined> {
    const payment = await this.ormRepository.findOne({
      where: { id, user_id },
    });

    return payment;
  }

  public async findAll(id: string, status?: string): Promise<Payment[]> {
    const where = status ? { user_id: id, status } : { user_id: id };

    const payments = await this.ormRepository.find({ where });

    return payments;
  }

  public async update(id: string): Promise<void> {
    await this.ormRepository.update({ id }, { status: 'paid' });
  }

  public async create(paymentData: ICreatePaymentDTO): Promise<Payment> {
    const payment = this.ormRepository.create({
      title: paymentData.title,
      date: paymentData.date,
      description: paymentData.description,
      value: paymentData.value,
      user_id: paymentData.user_id,
      status: 'pending',
    });

    await this.ormRepository.save(payment);

    return payment;
  }
}

export default PaymentsRespository;
