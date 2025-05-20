import {
  createRequestService,
  getPendingRequestsService,
  updateRequestStatusService,
} from '../services/requestService.js';

export const createRequest = async (req, res) => {
  try {
    const result = await createRequestService(req.body, req.user);
    res.status(201).json({ success: true, message: 'Request submitted', data: result });
  } catch (err) {
    res.status(err.statusCode || 500).json({ success: false, message: err.message });
  }
};

export const getPendingRequests = async (req, res) => {
  try {
    const result = await getPendingRequestsService();
    res.status(200).json({ success: true, message: 'Pending requests fetched', data: result });
  } catch (err) {
    res.status(err.statusCode || 500).json({ success: false, message: err.message });
  }
};

export const updateRequestStatus = async (req, res) => {
  try {
    const result = await updateRequestStatusService(req.params.id, req.body.status);
    res.status(200).json({ success: true, message: 'Status updated', data: result });
  } catch (err) {
    res.status(err.statusCode || 500).json({ success: false, message: err.message });
  }
};
