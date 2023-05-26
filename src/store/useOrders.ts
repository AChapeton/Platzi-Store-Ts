import { create } from "zustand";
import { Order } from "../types";

// interface OrderState {
//   order: Order
//   addOrder: (order: Order) => void
// }

// export const useMyOrder = create<OrderState>(set => ({
//   order: {
//     products: [],
//     date: '',
//     totalProducts: 0,
//     totalPrice: 0
//   },
//   addOrder: (order: Order) => set(()=> (
//     {order: {
//       products: [...order.products],
//       date: '123',
//       totalProducts: 1,
//       totalPrice: 1
//     }}
//   ))
// }))

interface OrdersState {
  orders: Array<Order>
  addOrder: (order: Order) => void
}

export const useOrders = create<OrdersState>(set => ({
  orders: [],
  addOrder: (newOrder: Order) => set(state => (
    {
      orders: [
        ...state.orders,
        {
          id: newOrder.id,
          products: [...newOrder.products],
          date: newOrder.date,
          totalProducts: newOrder.totalProducts,
          totalPrice: newOrder.totalPrice
        }
      ]
    }
  ))
}))