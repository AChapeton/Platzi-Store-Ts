import { ProductCart } from "../../types"
import { useShoppingCartStore } from "../../store/useShoppingCart"

interface OrderCardProps {
  order: ProductCart
}

function OrderCard({order}: OrderCardProps) {

  const {cart, deleteProductFromCart} = useShoppingCartStore()

  const deleteIcon = <p onClick={() => handleDeleteProduct(order.product.id)}>x</p>

  const handleDeleteProduct = (id: number) => {
    deleteProductFromCart(id)
  }

  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img className="w-full h-full rounded-lg object-cover" src={order.product.images[0]} alt={order.product.title} />
        </figure>
        <div className="text-sm font-light">
          <p>{order.product.title}</p>
          <p>x {order.quantity}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">
          ${order.total}
        </p>
        {
          cart.length > 0
            ? deleteIcon
            : ''}
      </div>
    </div>
  )
}

export {OrderCard}