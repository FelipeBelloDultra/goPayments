import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import FakePaymentsRepository from '../repositories/fakes/FakePaymentsRepository';
import ListAllPaymentService from './ListAllPaymentService';
import CreatePaymentService from './CreatePaymentService';
import AlterPaymentStatusService from './AlterPaymentStatusService';

let fakePaymentsRepository: FakePaymentsRepository;
let fakeCacheProvider: FakeCacheProvider;
let listAllPayment: ListAllPaymentService;
let createPayment: CreatePaymentService;
let alterPaymentStatus: AlterPaymentStatusService;

describe('ListAllPayment', () => {
  beforeEach(() => {
    fakePaymentsRepository = new FakePaymentsRepository();
    fakeCacheProvider = new FakeCacheProvider();

    listAllPayment = new ListAllPaymentService(
      fakePaymentsRepository,
      fakeCacheProvider,
    );
    createPayment = new CreatePaymentService(
      fakePaymentsRepository,
      fakeCacheProvider,
    );
    alterPaymentStatus = new AlterPaymentStatusService(
      fakePaymentsRepository,
      fakeCacheProvider,
    );
  });

  it('should be able to list all payment of a user', async () => {
    const payment = await createPayment.execute({
      date: new Date(),
      description: 'Teste',
      title: 'Title',
      user_id: '123123',
      value: 10,
    });

    const allPayment = await listAllPayment.execute({ user_id: payment.id });

    expect(allPayment);
  });

  it('should be able to list all payment of a user and the status to be pending ', async () => {
    const payment = await createPayment.execute({
      date: new Date(),
      description: 'Teste',
      title: 'Title',
      user_id: '123123',
      value: 10,
    });

    const allPaymentWithStatusPaid = await listAllPayment.execute({
      user_id: payment.user_id,
      status: 'pending',
    });

    expect(allPaymentWithStatusPaid[0].status).toBe('pending');
  });

  it('should be able to list all payment of a user and the status to be paid ', async () => {
    const payment = await createPayment.execute({
      date: new Date(),
      description: 'Teste',
      title: 'Title',
      user_id: '123123',
      value: 10,
    });

    await alterPaymentStatus.execute({
      id: payment.id,
      user_id: payment.user_id,
    });

    const allPaymentWithStatusPaid = await listAllPayment.execute({
      user_id: payment.user_id,
      status: 'paid',
    });

    expect(allPaymentWithStatusPaid[0].status).toBe('paid');
  });
});
