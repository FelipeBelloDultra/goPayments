import { Router } from 'express';

import ListAllPaymentService from '../services/ListAllPaymentService';
import ListPendingPaymentService from '../services/ListPendingPaymentService';
import ListPaidPaymentService from '../services/ListPaidPaymentService';
import ListOnePaymentService from '../services/ListOnePaymentService';
import CreatePaymentService from '../services/CreatePaymentService';
import AlterPaymentStatusService from '../services/AlterPaymentStatusService';

const paymentRouter = Router();

paymentRouter.get('/', async (request, response) => {
  const { id } = request.user;

  const listPayments = new ListAllPaymentService();

  const payments = await listPayments.execute({ id });

  return response.json(payments);
});

paymentRouter.get('/pending', async (request, response) => {
  const { id } = request.user;

  const listPayments = new ListPendingPaymentService();

  const payments = await listPayments.execute({ id });

  return response.json(payments);
});

paymentRouter.get('/paid', async (request, response) => {
  const { id } = request.user;

  const listPayments = new ListPaidPaymentService();

  const payments = await listPayments.execute({ id });

  return response.json(payments);
});

paymentRouter.get('/:id_payment', async (request, response) => {
  const { id } = request.user;
  const { id_payment } = request.params;

  const listOnePayments = new ListOnePaymentService();

  const payment = await listOnePayments.execute({
    id: id_payment,
    user_id: id,
  });

  return response.json(payment);
});

paymentRouter.post('/', async (request, response) => {
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

paymentRouter.post('/:id_payment', async (request, response) => {
  const { id } = request.user;
  const { id_payment } = request.params;

  const alterPaymentStatus = new AlterPaymentStatusService();

  const payment = await alterPaymentStatus.execute({
    id: id_payment,
    user_id: id,
  });

  return response.json({ ...payment, paid: true });
});

export default paymentRouter;
