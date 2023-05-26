import { useState, useEffect } from "react"
import { useShoppingCartStore } from "../store/useShoppingCart"

const useTotalProducts = () => {
  const {cart} = useShoppingCartStore()
  const [total, setTotal] = useState<number>(0)


  useEffect(() => {
    const totalCheckout = () => {
      const initialAmount = 0
      const totals: Array<number> = []
      cart.map(product => totals.push(product.quantity))
      const sumQuantity = totals.reduce((acc, cur) => acc + cur, initialAmount)
      setTotal(sumQuantity)
    }
    totalCheckout()
  }, [cart])

  return total
}

export {useTotalProducts}