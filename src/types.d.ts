export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: Category
  images: string[]
}

export interface Category {
  id: number
  name: string
  image: string
}

export interface ProductCart {
  product: Product
  quantity: number
  total: number
}

export interface Order {
  products: Array<ProductCart>
  date: string
  totalProducts: number
  totalPrice: number
}
