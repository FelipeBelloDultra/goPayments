import AppError from '@shared/errors/AppError';

import FakePaymentsRepository from '../repositories/fakes/FakePaymentsRepository';
import ListOnePaymentService from './ListOnePaymentService';
import CreatePaymentService from './CreatePaymentService';

describe('ListOnePayment', () => {
  it('should be able to list one payment of a user', async () => {
    const fakePaymentsRepository = new FakePaymentsRepository();
    const listOnePayment = new ListOnePaymentService(fakePaymentsRepository);
    const createPayment = new CreatePaymentService(fakePaymentsRepository);

    const payment = await createPayment.execute({
      date: new Date(),
      description: 'Teste',
      title: 'Title',
      user_id: '123123',
      value: 10,
    });

    const onePayment = await listOnePayment.execute({
      id: payment.id,
      user_id: payment.user_id,
    });

    expect(onePayment).toHaveProperty('id');
    expect(onePayment.id).toBe(payment.id);
    expect(onePayment.user_id).toBe(payment.user_id);
  });

  it('should not be able to list one payment of a user if doesnt exist', async () => {
    const fakePaymentsRepository = new FakePaymentsRepository();
    const listOnePayment = new ListOnePaymentService(fakePaymentsRepository);

    expect(
      listOnePayment.execute({
        id: '123123',
        user_id: '321321',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
