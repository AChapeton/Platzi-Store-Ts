import { useState, useEffect } from "react"
import { OrderCard } from "../OrderCard"
import { useShoppingCartStore } from "../../store/useShoppingCart"

function CheckoutSideMenu() {
  const {cart} = useShoppingCartStore()
  const [total, setTotal] = useState<number>(0)


  useEffect(() => {
    const totalCheckout = () => {
      const initialAmount = 0
      const totals: Array<number> = []
      cart.map(product => totals.push(product.total))
      console.log('Totals: ', totals)
      const sumTotals = totals.reduce((acc, cur) => acc + cur, initialAmount)
      setTotal(sumTotals)
    }
    totalCheckout()
  }, [cart])

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
