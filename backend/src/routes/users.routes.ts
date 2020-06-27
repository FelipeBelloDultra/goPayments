import { Router } from 'express';

import ListAllUserService from '../services/ListAllUserService';
import CreateUserService from '../services/CreateUserService';

const userRouter = Router();

userRouter.get('/', async (request, response) => {
  const listUsers = new ListAllUserService();

  const users = await listUsers.execute();

  const filtredUsers = users.map(user => ({
    ...user,
    password: undefined,
  }));

  return response.json(filtredUsers);
});

userRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;

  const createUsers = new CreateUserService();

  const user = await createUsers.execute({ name, email, password });

  delete user.password;

  return response.json(user);
});

export default userRouter;
