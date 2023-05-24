import { create } from "zustand";
import { Product } from "../types";

interface ToggleProductDetailState {
  isProductDetailOpen: boolean
  openProductDetail: () => void
  closeProductDetail: () => void
}

interface ProductDetailState {
  product: Product
  showProductDetail: (product: Product) => void
}

export const useToggleProductDetail = create<ToggleProductDetailState>(set => ({
  isProductDetailOpen: false,
  openProductDetail: () => set(() => (
    {isProductDetailOpen: true}
  )),
  closeProductDetail: () => set(() => (
    {isProductDetailOpen: false}
  ))
}))

export const useProductDetail = create<ProductDetailState>(set => ({
  product: {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: {
      id: 0,
      name: '',
      image: ''
    },
    images: []
  },
  showProductDetail: (productDetail: Product) => set(() => (
    {product: productDetail}
  ))
}))