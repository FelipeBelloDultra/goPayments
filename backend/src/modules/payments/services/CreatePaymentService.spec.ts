import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import FakePaymentsRepository from '../repositories/fakes/FakePaymentsRepository';
import CreatePaymentService from './CreatePaymentService';

let fakePaymentsRepository: FakePaymentsRepository;
let fakeCacheProvider: FakeCacheProvider;
let createPayment: CreatePaymentService;

describe('CreatePayment', () => {
  beforeEach(() => {
    fakePaymentsRepository = new FakePaymentsRepository();
    fakeCacheProvider = new FakeCacheProvider();

    createPayment = new CreatePaymentService(
      fakePaymentsRepository,
      fakeCacheProvider,
    );
  });

  it('should be able to create a new payment', async () => {
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
