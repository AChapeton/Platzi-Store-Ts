import { OrderCard } from "../OrderCard"
import { useShoppingCartStore } from "../../store/useShoppingCart"
import { useTotalPrice } from "../../hooks/useTotalPrice"

function CheckoutSideMenu() {
  const {cart} = useShoppingCartStore()
  const total = useTotalPrice()

  return (
    <>
      <div className="px-6">
        {
          cart.map(productCart => (
            <OrderCard key={productCart.product.id} productCart={productCart}/>
          ))
        }
      </div>
      <div className="px-6">
        <p className="flex justify-between items-center">
          <span className="font-medium">Total:</span>
          <span className="font-medium text-xl">${total}</span>
          </p>
      </div>
    </>
  )
}

export {CheckoutSideMenu}
