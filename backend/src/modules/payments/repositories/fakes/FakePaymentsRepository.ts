import { uuid } from 'uuidv4';

import IPaymentsRepository from '@modules/payments/repositories/IPaymentsRepository';

import ICreatePaymentDTO from '@modules/payments/dtos/ICreatePaymentDTO';

import Payment from '../../infra/typeorm/entities/Payment';

class PaymentsRespository implements IPaymentsRepository {
  private payments: Payment[] = [];

  public async findById(
    id: string,
    user_id: string,
  ): Promise<Payment | undefined> {
    const findPayment = this.payments.find(
      payment => payment.id === id && payment.user_id === user_id,
    );

    return findPayment;
  }

  public async findAll(id: string, status?: string): Promise<Payment[]> {
    if (status) {
      const payments = this.payments.filter(
        payment => payment.user_id === id && payment.status === status,
      );

      return payments;
    }

    const payments = this.payments.filter(payment => payment.user_id === id);

    return payments;
  }

  public async update(id: string): Promise<void> {
    const findPayment = this.payments.findIndex(payment => payment.id === id);

    this.payments[findPayment].status = 'paid';
  }

  public async create(paymentData: ICreatePaymentDTO): Promise<Payment> {
    const payment = new Payment();

    Object.assign(payment, {
      id: uuid(),
      title: paymentData.title,
      value: payment.value,
      date: paymentData.date,
      status: 'pending',
      user_id: paymentData.user_id,
      description: paymentData.description,
    });

    this.payments.push(payment);

    return payment;
  }
}

export default PaymentsRespository;
