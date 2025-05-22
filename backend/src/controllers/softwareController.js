import {
  createSoftwareService,
  getAllSoftwareService
} from '../services/softwareService.js';

export const createSoftware = async (req, res) => {
  try {
    const software = await createSoftwareService(req.body);
    res.status(201).json({ success: true, message: 'Software created', data: software });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getAllSoftware = async (req, res) => {
  try {
    const softwares = await getAllSoftwareService();
    res.status(200).json({ success: true, message: 'Softwares fetched', data: softwares });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
