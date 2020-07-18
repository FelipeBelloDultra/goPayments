import { inject, injectable } from 'tsyringe';

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
  ) {}

  public async execute(): Promise<Response[]> {
    const allUsers = await this.usersRepository.findAll();

    return allUsers;
  }
}

export default ListAllUserService;
