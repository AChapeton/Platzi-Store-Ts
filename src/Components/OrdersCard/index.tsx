import { Order } from "../../types"

interface OrderCardProps {
  order: Order
}

function OrdersCard({order}: OrderCardProps) {

  return (
    <div className="flex justify-between items-center mb-3 border border-black">
      <p>01.02.23</p>
      <span>{order.totalProducts}</span>
      <span>${order.totalPrice}</span>
    </div>
  )
}

export {OrdersCard}