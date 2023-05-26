import { Link } from 'react-router-dom'
import { OrderCard } from "../OrderCard"
import { useShoppingCartStore } from "../../store/useShoppingCart"
import { useTotalPrice } from "../../hooks/useTotalPrice"
import { useTotalProducts } from '../../hooks/useTotalProducts'
import { useOrders } from "../../store/useOrders"
import { ProductCart, Order } from "../../types"

function CheckoutSideMenu() {
  const {cart, emptyCart} = useShoppingCartStore()
  const checkoutTotalPrice = useTotalPrice()
  const checkoutTotalProducts = useTotalProducts()
  const {addOrder} = useOrders()

  const handleCheckout = (cart: Array<ProductCart>) => {
    const newOrder: Order = {
      products: [...cart],
      date: new Date().toDateString(),
      totalProducts: checkoutTotalProducts,
      totalPrice: checkoutTotalPrice
    }
    addOrder(newOrder)
    emptyCart()
  }

  return (
    <>
      <div className="px-6">
        {
          cart.map(productCart => (
            <OrderCard key={productCart.product.id} order={productCart}/>
          ))
        }
      </div>
      <div className="px-6 bg-white w-full mb-2">
        <p className="flex justify-between items-center">
          <span className="font-medium">Total:</span>
          <span className="font-medium text-xl">${checkoutTotalPrice}</span>
        </p>
        <Link to='/my-orders/last'>
          <button className="w-full bg-black py-3 text-white rounded-lg" onClick={() => handleCheckout(cart)}>Checkout</button>
        </Link>
      </div>
    </>
  )
}

export {CheckoutSideMenu}
