import requestRepository from '../repositories/requestRepository.js';

export const createRequestService = async (data, currentUser) => {
  const { softwareId, accessType, reason } = data;

  return await requestRepository.create({
    user: currentUser.id,
    software: softwareId,
    accessType,
    reason,
    status: 'Pending',
  });
};

export const getPendingRequestsService = async () => {
  return await requestRepository.getAllPending();
};

export const updateRequestStatusService = async (id, status) => {
  if (!['Approved', 'Rejected'].includes(status)) {
    throw { statusCode: 400, message: 'Invalid status' };
  }
  return await requestRepository.updateStatus(id, status);
};
