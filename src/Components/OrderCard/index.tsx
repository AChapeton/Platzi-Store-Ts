import { ProductCart } from "../../types"
import { useShoppingCartStore } from "../../store/useShoppingCart"

interface OrderCardProps {
  productCart: ProductCart
}

function OrderCard({productCart}: OrderCardProps) {

  const {deleteProductFromCart} = useShoppingCartStore()

  const handleDeleteProduct = (id: number) => {
    deleteProductFromCart(id)
  }

  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img className="w-full h-full rounded-lg object-cover" src={productCart.product.images[0]} alt={productCart.product.title} />
        </figure>
        <div className="text-sm font-light">
          <p>{productCart.product.title}</p>
          <p>x {productCart.quantity}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">
          ${productCart.total}
        </p>
        <p onClick={() => handleDeleteProduct(productCart.product.id)}>x</p>
      </div>
    </div>
  )
}

export {OrderCard}