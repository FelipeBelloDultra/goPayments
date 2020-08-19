import { inject, injectable } from 'tsyringe';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import IUsersRepository from '../repositories/IUsersRepository';

interface Response {
  id: string;
  name: string;
  email: string;
  created_at: Date;
  updated_at: Date;
}

@injectable()
class ListAllUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute(): Promise<Response[]> {
    let allUsers = await this.cacheProvider.recover<Response[]>(`users-list:`);

    if (!allUsers) {
      allUsers = await this.usersRepository.findAll();

      await this.cacheProvider.save(`users-list:`, allUsers);
    }

    return allUsers;
  }
}

export default ListAllUserService;
