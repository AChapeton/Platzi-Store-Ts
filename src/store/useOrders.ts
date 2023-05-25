import { create } from "zustand";
import { Order } from "../types";


interface OrderState {
  order: Order
  addOrder: (order: Order) => void
}

export const useMyOrder = create<OrderState>(set => ({
  order: {
    products: [],
    date: '',
    totalProducts: 0,
    totalPrice: 0
  },
  addOrder: (order: Order) => set(()=> (
    {order: {
      products: [...order.products],
      date: '123',
      totalProducts: 1,
      totalPrice: 1
    }}
  ))
}))