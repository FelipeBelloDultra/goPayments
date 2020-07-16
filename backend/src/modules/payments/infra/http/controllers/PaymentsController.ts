import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListAllPaymentService from '@modules/payments/services/ListAllPaymentService';
import ListOnePaymentService from '@modules/payments/services/ListOnePaymentService';
import CreatePaymentService from '@modules/payments/services/CreatePaymentService';
import AlterPaymentStatusService from '@modules/payments/services/AlterPaymentStatusService';

class PaymentsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const { status } = request.query;

    const listPayments = container.resolve(ListAllPaymentService);

    const payments = await listPayments.execute({
      id,
      status: String(status || ''),
    });

    return response.json(payments);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const { id_payment } = request.params;

    const listOnePayments = container.resolve(ListOnePaymentService);

    const payment = await listOnePayments.execute({
      id: id_payment,
      user_id: id,
    });

    return response.json(payment);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const { title, date, description, value } = request.body;

    const createPayments = container.resolve(CreatePaymentService);

    const payments = await createPayments.execute({
      user_id: id,
      title,
      date,
      description,
      value,
    });

    return response.json(payments);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const { id_payment } = request.params;

    const alterPaymentStatus = container.resolve(AlterPaymentStatusService);

    const payment = await alterPaymentStatus.execute({
      id: id_payment,
      user_id: id,
    });

    return response.json({ ...payment, paid: true });
  }
}

export default PaymentsController;
