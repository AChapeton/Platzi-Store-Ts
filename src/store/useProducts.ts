import { create } from "zustand";
import { Product } from "../types";

interface ProductsState {
  products: Array<Product>
  addProducts: (data: Array<Product>) => void
}

interface FilteredProductsState {
  filteredProducts: Array<Product>
  addFilteredProducts: (data: Array<Product>, searchedTitle: string) => void
}

export const useProductsStore = create<ProductsState>(set => ({
  products: [],
  addProducts: (data: Array<Product>) => set(state => (
    {
      products: [...state.products, ...data]
    }
  ))
}))

export const useFilteredProductsStore = create<FilteredProductsState>(set => ({
  filteredProducts: [],
  addFilteredProducts: (data: Array<Product>) => set(() => (
    {
      filteredProducts: [...data]
    }
  ))
}))