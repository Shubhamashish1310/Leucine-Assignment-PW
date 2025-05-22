import { AppDataSource } from '../config/db.js';
import { User } from '../entities/User.js';

const repo = AppDataSource.getRepository(User);

const userRepository = {
  create: async (userData) => {
    const user = repo.create(userData);
    return await repo.save(user);
  },

  findByUsername: async (username) => {
    return await repo.findOneBy({ username });
  }
};

export default userRepository;
