import { IOrder } from '../interfaces';
import orderModel from '../models/order.model';

const getOrders = async (): Promise<IOrder[]> => {
  const orders = await orderModel.getOrders();
  return orders;
};

const orderService = {
  getOrders,
};

export default orderService;