import { signUpService, loginService } from '../services/authService.js';

export const signUp = async (req,res) => {
    console.log('signUp called');
  console.log('signUp called with:', req.body);
  try {
    if (!req.body) {
      return res.status(400).json({ success: false, message: 'Username and password are required' });
    }
    const user = await signUpService(req.body);
    res.status(201).json({ success: true, message: 'User registered', data: user });
  } catch (err) {
    res.status(err.statusCode || 500).json({ success: false, message: err.message+'bhai', error: err });
  }
};

export const login = async (req, res) => {
  try {
    const result = await loginService(req.body);
    res.status(200).json({ success: true, message: 'Login successful', data: result });
  } catch (err) {
    res.status(err.statusCode || 500).json({ success: false, message: err.message });
  }
};
