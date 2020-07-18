import FakePaymentsRepository from '../repositories/fakes/FakePaymentsRepository';
import CreatePaymentService from './CreatePaymentService';

describe('CreatePayment', () => {
  it('should be able to create a new payment', async () => {
    const fakePaymentsRepository = new FakePaymentsRepository();
    const createPayment = new CreatePaymentService(fakePaymentsRepository);

    const payment = await createPayment.execute({
      date: new Date(),
      description: 'Teste',
      title: 'Title',
      user_id: '123123',
      value: 10,
    });

    expect(payment).toHaveProperty('id');
    expect(payment.user_id).toBe('123123');
  });
});
