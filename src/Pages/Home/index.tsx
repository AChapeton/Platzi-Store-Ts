import { useEffect } from "react";
import { Card } from "../../Components/Card"
import { useProductsStore } from "../../store/useProducts";

function Home() {

  const {products, addProducts} = useProductsStore()

  useEffect(()  => {
    const fetchProducts: () => Promise<void> = async () => {
      const res = await fetch('https://api.escuelajs.co/api/v1/products')
      const data = await res.json()
      addProducts(data)
      console.log(data)
    }

    fetchProducts()
  }, [addProducts])

  return (
    <div>
      <Card/>
      {
        products?.map(product => (
          <h1>{product.title}</h1>
        ))
      }
    </div>
  )
}

export {Home}