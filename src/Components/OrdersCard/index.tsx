import { Order } from "../../types"

interface OrderCardProps {
  order: Order
}

function OrdersCard({order}: OrderCardProps) {

  return (
    <div className="flex justify-between items-center border border-black w-80 p-4 rounded-lg mb-4">
      <div className="flex justify-between w-full">
        <p className="flex flex-col ">
          <span className="font-light">{order.date}</span>
          <span className="font-light">{order.totalProducts} articles</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-medium text-xl">${order.totalPrice}</span>
          <span>{'>'}</span>
        </p>
      </div>
    </div>
  )
}

export {OrdersCard}