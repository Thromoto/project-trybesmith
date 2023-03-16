import { Request, Response } from 'express';
import orderService from '../services/order.service';

const getOrders = async (_req: Request, res: Response) => {
  const orders = await orderService.getOrders();
  return res.status(200).json(orders);
};

const orderController = {
  getOrders,
};

export default orderController;