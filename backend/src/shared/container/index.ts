import { container } from 'tsyringe';

import '@modules/users/providers';

import IPaymentsRepository from '@modules/payments/repositories/IPaymentsRepository';
import PaymentsRepository from '@modules/payments/infra/typeorm/repositories/PaymentsRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<IPaymentsRepository>(
  'PaymentsRepository',
  PaymentsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
