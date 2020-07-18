import AppError from '@shared/errors/AppError';

import FakePaymentsRepository from '../repositories/fakes/FakePaymentsRepository';
import AlterPaymentStatusService from './AlterPaymentStatusService';
import CreatePaymentService from './CreatePaymentService';

describe('AlterPaymentStatus', () => {
  it('should be able to change payment status to paid', async () => {
    const fakePaymentsRepository = new FakePaymentsRepository();
    const createPayment = new CreatePaymentService(fakePaymentsRepository);
    const alterPaymentStatus = new AlterPaymentStatusService(
      fakePaymentsRepository,
    );

    const newPayment = await createPayment.execute({
      date: new Date(),
      description: 'Teste',
      title: 'Title',
      user_id: '123123',
      value: 10,
    });

    const payment = await alterPaymentStatus.execute({
      id: newPayment.id,
      user_id: newPayment.user_id,
    });

    expect(payment.status).toBe('paid');
    expect(payment.user_id).toBe('123123');
  });

  it('should not be able to change payment status to paid if doesnt exist', async () => {
    const fakePaymentsRepository = new FakePaymentsRepository();
    const createPayment = new CreatePaymentService(fakePaymentsRepository);
    const alterPaymentStatus = new AlterPaymentStatusService(
      fakePaymentsRepository,
    );

    const newPayment = await createPayment.execute({
      date: new Date(),
      description: 'Teste',
      title: 'Title',
      user_id: '123123',
      value: 10,
    });

    expect(
      alterPaymentStatus.execute({
        id: '123345567',
        user_id: newPayment.user_id,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to change payment status to paid if already paid', async () => {
    const fakePaymentsRepository = new FakePaymentsRepository();
    const createPayment = new CreatePaymentService(fakePaymentsRepository);
    const alterPaymentStatus = new AlterPaymentStatusService(
      fakePaymentsRepository,
    );

    const newPayment = await createPayment.execute({
      date: new Date(),
      description: 'Teste',
      title: 'Title',
      user_id: '123123',
      value: 10,
    });

    await alterPaymentStatus.execute({
      id: newPayment.id,
      user_id: newPayment.user_id,
    });

    expect(
      alterPaymentStatus.execute({
        id: newPayment.id,
        user_id: newPayment.user_id,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
