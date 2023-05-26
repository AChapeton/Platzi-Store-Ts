import {useState, useEffect} from 'react'
import { Product } from '../types'


const useFilterProducts = (products: Array<Product>, value: string) => {
  const filteredProducts = products?.filter(product => product.title.toLowerCase().includes(value.toLowerCase()))
  return filteredProducts
}

export {useFilterProducts}