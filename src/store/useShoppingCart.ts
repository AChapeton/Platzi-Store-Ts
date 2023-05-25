import { create } from "zustand";
import { Product } from "../types";

// interface ShoppingCartState {
//   count: number
//   setCount: () => void
// }

// export const useShoppingCartStore = create<ShoppingCartState>(set => ({
//   count: 0,
//   setCount: () => set(state => (
//     {count: state.count + 1}
//   )),
// }))

interface ProductCart {
  product: Product
  quantity: number
  total: number
}

interface ShoppingCartState {
  cart: Array<ProductCart>,
  addProductToCart: (product: Product) => void
}

export const useShoppingCartStore = create<ShoppingCartState>(set => ({
  cart: [],
  addProductToCart: (productData: Product) => set(state => {
    const productIndex = state.cart.findIndex(product => product.product.id === productData.id)
    let newCart: Array<ProductCart> = []
    if(productIndex >= 0){
      newCart = [...state.cart]
      newCart[productIndex].quantity++
      newCart[productIndex].total = newCart[productIndex].product.price * newCart[productIndex].quantity
      return {cart: [...newCart]}
    }else{
      newCart = [...state.cart, {product: productData, quantity: 1, total: productData.price}]
      return {cart: [...newCart]}
    }
    // if(state.cart){
    //   return {cart: [...state.cart, product]}
    // }else{
    //   return {cart: [...state.cart, {product, quantity: 1}]}
    // }
  })
}))

