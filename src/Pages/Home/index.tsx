import { useEffect } from "react";
import { Card } from "../../Components/Card"
import { useProductsStore } from "../../store/useProducts";
import { ProductDetail } from "../../Components/ProductDetail";

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
    <>
      <ProductDetail/>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          products?.map(product => (
            // <h1>{product.title}</h1>
            <Card data={product}/>
          ))
        }
      </div>
    </>
  )
}

export {Home}