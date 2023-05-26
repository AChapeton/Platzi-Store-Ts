import { Link } from "react-router-dom"
import { OrderCard } from "../../Components/OrderCard"
import { useOrders } from "../../store/useOrders"

function MyOrder() {
  const {orders} = useOrders()

  return (
    <>
      <div className="flex items-center justify-center relative w-80 mb-6">
        <Link to='/my-orders' className="absolute left-0">
          <span className="h-6 w-6 text-black cursor-pointer">{'<'}</span>
        </Link>
        <h1>
          My Order
        </h1>
      </div>
      <div className="flex flex-col w-80">
        {
          orders?.slice(-1)[0].products.map(order => (
            <OrderCard key={order.product.id} order={order}/>
          ))
        }
      </div>
    </>
  )
}

export {MyOrder}