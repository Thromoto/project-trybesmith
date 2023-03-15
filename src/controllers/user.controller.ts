import jwt, { SignOptions } from 'jsonwebtoken';
import { Request, Response } from 'express';
import { IUser } from '../interfaces';
import userService from '../services/user.service';

const JWT_SECRET = process.env.JWT_SECRET || 'xablau';

const JWT_CONFIG: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '1d',
};

const createToken = (payload: IUser) => jwt.sign(payload, JWT_SECRET, JWT_CONFIG);

const createUser = async (req: Request, res: Response) => {
  const user = req.body as IUser;
  const newUser = await userService.createUser(user);
  const token = createToken(newUser);
  return res.status(201).json({ token });
};

const userController = {
  createUser,
};

export default userController;