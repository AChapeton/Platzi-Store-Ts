import { create } from "zustand";
import { Product } from "../types";

interface ProductsState {
  products: Array<Product>
  addProducts: (data: Array<Product>) => void
}

interface FilteredProductsState {
  filteredProducts: Array<Product>
  addFilteredProducts: (data: Array<Product>, searchedTitle: string, searchedCategory: string) => void
}

export const useProductsStore = create<ProductsState>(set => ({
  products: [],
  addProducts: (data: Array<Product>) => set(state => (
    {
      products: [...state.products, ...data]
    }
  ))
}))

const filterProductsByTitle = (products: Array<Product>, title: string):  Array<Product> => {
  return products?.filter(product => product.title.toLowerCase().includes(title.toLowerCase()))
}

const filterProductsByCategory = (products: Array<Product>, category: string):  Array<Product> => {
  return products.filter(product => product.category.name.toLowerCase() === category)
}

export const useFilteredProductsStore = create<FilteredProductsState>(set => ({
  filteredProducts: [],
  addFilteredProducts: (data: Array<Product>, searchedTitle: string, searchedCategory: string) => set(() => {
    let newProducts: Array<Product> = []
    if(searchedTitle && !searchedCategory) {
      newProducts = filterProductsByTitle(data, searchedTitle)
    }
    if(!searchedTitle && searchedCategory) {
      newProducts = filterProductsByCategory(data, searchedCategory)
    }

    if(searchedTitle && searchedCategory) {
      newProducts = filterProductsByCategory(data, searchedCategory).filter(product => product.title.toLowerCase().includes(searchedTitle.toLowerCase()))
    }

    if(!searchedTitle && !searchedCategory) {
      newProducts = []
    }

    return {filteredProducts: [...newProducts]}
  })
}))
