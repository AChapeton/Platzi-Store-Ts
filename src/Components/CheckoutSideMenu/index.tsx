import { OrderCard } from "../OrderCard"
import { useShoppingCartStore } from "../../store/useShoppingCart"

function CheckoutSideMenu() {
  const {cart} = useShoppingCartStore()

  return (
    <>
      <div className="px-6">
        {
          cart.map(productCart => (
            <OrderCard key={productCart.product.id} productCart={productCart}/>
          ))
        }
      </div>
    </>
  )
}

export {CheckoutSideMenu}
