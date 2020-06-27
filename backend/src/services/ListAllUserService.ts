import { getRepository } from 'typeorm';

import User from '../models/User';

interface Response {
  id: string;
  name: string;
  email: string;
  created_at: Date;
  updated_at: Date;
}

class ListAllUserService {
  public async execute(): Promise<Response[]> {
    const userRepository = getRepository(User);

    const allUsers = await userRepository.find();

    const users = allUsers.map(user => ({
      ...user,
      password: undefined,
    }));

    return users;
  }
}

export default ListAllUserService;
