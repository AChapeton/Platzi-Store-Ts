import {useEffect} from 'react'
import { Product } from '../types'
import { useFilteredProductsStore } from '../store/useProducts'

const filterProductsByTitle = (products: Array<Product>, title: string) => {
  return products?.filter(product => product.title.toLowerCase().includes(title.toLowerCase()))
}

const filterProductsByCategory = (products: Array<Product>, category: string) => {
  return products.filter(product => product.category.name.toLowerCase() === category)
}

const useFilterProducts = (products: Array<Product>, searchedTitle: string, searchedCategory: string) => {
  const {filteredProducts, addFilteredProducts} = useFilteredProductsStore()

  useEffect(()=>{
    if(searchedTitle && searchedCategory) {
      const filteredProducts = filterProductsByCategory(products, searchedCategory).filter(product => product.title.toLowerCase().includes(searchedTitle.toLowerCase()))
      addFilteredProducts(filteredProducts)
    }

    if(searchedTitle && !searchedCategory){
      const filteredProducts = filterProductsByTitle(products, searchedTitle)
      addFilteredProducts(filteredProducts)
    }

    if(!searchedTitle && searchedCategory){
      const filteredProducts = filterProductsByCategory(products, searchedCategory)
      addFilteredProducts(filteredProducts)
    }

    if(!searchedTitle && !searchedCategory){
      addFilteredProducts(products)
    }
  })

  console.log(filteredProducts)

  return filteredProducts
}

export {useFilterProducts}

