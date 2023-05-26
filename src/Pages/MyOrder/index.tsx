import { OrderCard } from "../../Components/OrderCard"
import { useOrders } from "../../store/useOrders"

function MyOrder() {
  const {orders} = useOrders()

  return (
    <>
      My Order
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