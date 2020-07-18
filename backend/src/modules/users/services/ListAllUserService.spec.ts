// import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import ListAllUserService from './ListAllUserService';
import CreateUserService from './CreateUserService';

describe('ListAllUsers', () => {
  it('should be able to list all user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const listAllUsers = new ListAllUserService(fakeUsersRepository);
    const createUser = new CreateUserService(fakeUsersRepository);

    await createUser.execute({
      name: 'John Doe',
      email: 'test1@test.com',
      password: '123456',
    });

    await createUser.execute({
      name: 'John Doe',
      email: 'test2@test.com',
      password: '123456',
    });

    await createUser.execute({
      name: 'John Doe',
      email: 'tes3t@test.com',
      password: '123456',
    });

    const users = await listAllUsers.execute();

    expect(users);
  });
});
