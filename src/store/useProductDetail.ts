import { create } from "zustand";
import { Product } from "../types";

interface ProductDetailState {
  product: Product
  showProductDetail: (product: Product) => void
}

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