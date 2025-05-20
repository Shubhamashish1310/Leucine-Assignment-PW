import { AppDataSource } from '../config/db.js';
import { Request } from '../entities/Request.js';

const repo = AppDataSource.getRepository(Request);

const requestRepository = {
  create: async (data) => {
    const req = repo.create(data);
    return await repo.save(req);
  },

  getAllPending: async () => {
    return await repo.find({ where: { status: 'Pending' } });
  },

  updateStatus: async (id, status) => {
    await repo.update(id, { status });
    return await repo.findOneBy({ id });
  }
};

export default requestRepository;
