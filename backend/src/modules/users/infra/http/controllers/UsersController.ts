import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';
import ListAllUserService from '@modules/users/services/ListAllUserService';

export default class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listUsers = container.resolve(ListAllUserService);

    const allUsers = await listUsers.execute();

    const users = allUsers.map(user => ({
      ...user,
      password: undefined,
    }));

    return response.json(users);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUsers = container.resolve(CreateUserService);

    const user = await createUsers.execute({ name, email, password });

    delete user.password;

    return response.json(user);
  }
}
