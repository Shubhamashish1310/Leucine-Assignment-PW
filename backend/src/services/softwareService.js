import softwareRepository from '../repositories/softwareRepository.js';

export const createSoftwareService = async (data) => {
  const { name, description, accessLevels } = data;

  return await softwareRepository.create({
    name,
    description,
    accessLevels
  });
};

export const getAllSoftwareService = async () => {
  return await softwareRepository.getAll();
};
