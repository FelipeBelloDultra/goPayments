import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import ListAllUserService from './ListAllUserService';
import CreateUserService from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let listAllUsers: ListAllUserService;
let createUser: CreateUserService;

describe('ListAllUsers', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    listAllUsers = new ListAllUserService(fakeUsersRepository);
    createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider);
  });

  it('should be able to list all user', async () => {
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
