import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import ListAllUserService from './ListAllUserService';
import CreateUserService from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeCacheProvider: FakeCacheProvider;
let fakeHashProvider: FakeHashProvider;
let listAllUsers: ListAllUserService;
let createUser: CreateUserService;

describe('ListAllUsers', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    fakeCacheProvider = new FakeCacheProvider();

    listAllUsers = new ListAllUserService(
      fakeUsersRepository,
      fakeCacheProvider,
    );
    createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
      fakeCacheProvider,
    );
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
