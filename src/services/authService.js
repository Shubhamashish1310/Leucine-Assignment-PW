import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userRepository from '../repositories/userRepository.js';

export const signUpService = async ({ username, password }) => {
    console.log('signUpService called with:', { username, password });
  const existingUser = await userRepository.findByUsername(username);
  if (existingUser) {
    throw { statusCode: 400, message: 'Username already exists' };
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await userRepository.create({
    username,
    password: hashedPassword,
    role: 'Admin' // default role
  });

  return { id: newUser.id, username: newUser.username, role: newUser.role };
};

export const loginService = async ({ username, password }) => {
  const user = await userRepository.findByUsername(username);
  if (!user) {
    throw { statusCode: 404, message: 'User not found' };
  }

  const match = bcrypt.compare(password, user.password);
  if (!match) {
    throw { statusCode: 401, message: 'Invalid credentials' };
  }

  const token = jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );

  return {
    token,
    user: {
      id: user.id,
      username: user.username,
      role: user.role
    }
  };
};
