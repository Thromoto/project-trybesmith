export interface IProduct {
  name: string;
  amount: string;
  orderId: number;
}

export interface Product extends IProduct {
  id: number;
}

export interface IUser {
  id?: number;
  username: string;
  vocation: string;
  level: number;
  password: string;
}