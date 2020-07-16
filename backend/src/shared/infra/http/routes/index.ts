import { Router } from 'express';

import paymentsRouter from '@modules/payments/infra/http/routes/payments.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/payments', paymentsRouter);

export default routes;
