import { Link } from "react-router-dom"
import { OrdersCard } from "../../Components/OrdersCard"
import { useOrders } from "../../store/useOrders"


function MyOrders() {
  const {orders} = useOrders()

  return (
    <>
      <div className="flex items-center justify-center relative w-80">
        <h1>
          My Orders
        </h1>
      </div>
      {
        orders.map(order => (
          <Link key={order.id} to={`/my-orders/${order.id}`}>
            <OrdersCard order={order}/>
          </Link>
        ))
      }
    </>
  )
}

export {MyOrders}