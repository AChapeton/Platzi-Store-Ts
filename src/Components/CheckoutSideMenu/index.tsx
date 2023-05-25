import { OrderCard } from "../OrderCard"
import { useShoppingCartStore } from "../../store/useShoppingCart"
import { useTotalPrice } from "../../hooks/useTotalPrice"
import { useMyOrder } from "../../store/useOrders"
import { ProductCart, Order } from "../../types"

function CheckoutSideMenu() {
  const {cart, emptyCart} = useShoppingCartStore()
  const total = useTotalPrice()
  const {addOrder} = useMyOrder()

  const handleCheckout = (cart: Array<ProductCart>) => {
    const newOrder: Order = {
      products: [...cart],
      date: new Date().toDateString(),
      totalProducts: 2,
      totalPrice: total
    }
    addOrder(newOrder)
    emptyCart()
  }

  return (
    <>
      <div className="px-6">
        {
          cart.map(productCart => (
            <OrderCard key={productCart.product.id} productCart={productCart}/>
          ))
        }
      </div>
      <div className="px-6 bg-white w-full mb-2">
        <p className="flex justify-between items-center">
          <span className="font-medium">Total:</span>
          <span className="font-medium text-xl">${total}</span>
        </p>
        <button className="w-full bg-black py-3 text-white rounded-lg" onClick={() => handleCheckout(cart)}>Checkout</button>
      </div>
    </>
  )
}

export {CheckoutSideMenu}
