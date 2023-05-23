import { create } from "zustand";

interface ShoppingCartState {
  count: number
  setCount: () => void
}

interface ProductDetailState {
  isProductDetailOpen: boolean
  openProductDetail: () => void
  closeProductDetail: () => void
}


export const useShoppingCartStore = create<ShoppingCartState>(set => ({
  count: 0,
  setCount: () => set(state => (
    {count: state.count + 1}
  )),
}))

export const useProductDetail = create<ProductDetailState>(set => ({
  isProductDetailOpen: false,
  openProductDetail: () => set(() => (
    {isProductDetailOpen: true}
  )),
  closeProductDetail: () => set(() => (
    {isProductDetailOpen: false}
  ))
}))