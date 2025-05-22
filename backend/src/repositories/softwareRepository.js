import { AppDataSource } from '../config/db.js';
import { Software } from '../entities/Software.js';

const repo = AppDataSource.getRepository(Software);

const softwareRepository = {
  create: async (data) => {
    const newSoftware = repo.create(data);
    return await repo.save(newSoftware);
  },

  getAll: async () => {
    return await repo.find();
  }
};

export default softwareRepository;
