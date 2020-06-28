import { Router } from 'express';

import ListAllPaymentService from '../services/ListAllPaymentService';
import ListOnePaymentService from '../services/ListOnePaymentService';
import ListPendingPaymentService from '../services/ListPendingPaymentService';
import ListPaidPaymentService from '../services/ListPaidPaymentService';
import CreatePaymentService from '../services/CreatePaymentService';

const userRouter = Router();

userRouter.get('/', async (request, response) => {
  const { id } = request.user;

  const listPayments = new ListAllPaymentService();

  const payments = await listPayments.execute({ id });

  return response.json(payments);
});

userRouter.get('/:id', async (request, response) => {
  const { id } = request.params;

  const listOnePayments = new ListOnePaymentService();

  const payment = await listOnePayments.execute({ id });

  return response.json(payment);
});

userRouter.get('/pending', async (request, response) => {
  const { id } = request.user;

  const listPayments = new ListPendingPaymentService();

  const payments = await listPayments.execute({ id });

  return response.json(payments);
});

userRouter.get('/paid', async (request, response) => {
  const { id } = request.user;

  const listPayments = new ListPaidPaymentService();

  const payments = await listPayments.execute({ id });

  return response.json(payments);
});

userRouter.post('/', async (request, response) => {
  const { id } = request.user;
  const { title, date, description, value } = request.body;

  const createPayments = new CreatePaymentService();

  const payments = await createPayments.execute({
    id,
    title,
    date,
    description,
    value,
  });

  return response.json(payments);
});

export default userRouter;
