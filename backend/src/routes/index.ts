import { Router } from 'express';

import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import paymentsRouter from './payments.routes';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/payments', ensureAuthenticated, paymentsRouter);

export default routes;
