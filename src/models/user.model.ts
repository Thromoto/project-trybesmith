import { ResultSetHeader } from 'mysql2';
import { IUser } from '../interfaces';
import connection from './connection';

const createUser = async (user: IUser): Promise<IUser> => {
  const { username, vocation, level, password } = user;

  const query = `INSERT INTO Trybesmith.users (username, vocation, level, password)
  VALUES (?,?,?,?)`;
  const values = [username, vocation, level, password];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newUser: IUser = { ...user, id };
  return newUser;
};

const userModel = {
  createUser,
};

export default userModel;