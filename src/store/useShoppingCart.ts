import { create } from "zustand";
import { Product, ProductCart } from "../types";

interface ShoppingCartState {
  cart: Array<ProductCart>,
  addProductToCart: (product: Product) => void
  deleteProductFromCart: (id: number) => void
  emptyCart: () => void
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
  }),
  deleteProductFromCart: (id: number) => set(state => {
    const newCart: Array<ProductCart> = state.cart.filter(product => product.product.id != id)
    return {cart: [...newCart]}
  }),
  emptyCart: () => set(() => (
    {cart: []}
  ))
}))

