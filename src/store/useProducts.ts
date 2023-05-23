import { create } from "zustand";
import { Product } from "../types";

interface ProductsState {
  products: Array<Product>
  addProducts: (data: Array<Product>) => void
}

export const useProductsStore = create<ProductsState>(set => ({
  products: [],
  addProducts: (data: Array<Product>) => set(state => (
    {
      products: [...state.products, ...data]
    }
  ))
}))