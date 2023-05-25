import { useState, useEffect } from "react"
import { useShoppingCartStore } from "../store/useShoppingCart"

const useTotalPrice = () => {
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

  return total
}

export {useTotalPrice}