import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import PaymentsController from '../controllers/PaymentsController';

const paymentRouter = Router();
const paymentsController = new PaymentsController();

paymentRouter.use(ensureAuthenticated);

paymentRouter.get('/', paymentsController.index);
paymentRouter.get('/:id_payment', paymentsController.show);
paymentRouter.post('/', paymentsController.create);
paymentRouter.patch('/:id_payment', paymentsController.update);

export default paymentRouter;
