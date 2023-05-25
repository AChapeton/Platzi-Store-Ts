import { useEffect } from "react";
import { Card } from "../../Components/Card"
import { Sidebar } from "../../Components/Sidebar";
import { ProductDetail } from "../../Components/ProductDetail";
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu";
import { useProductsStore } from "../../store/useProducts";
import { useToggleProductDetail, useToggleCheckout } from "../../store/useSidebar";

function Home() {

  const {products, addProducts} = useProductsStore()
  const {isProductDetailOpen} = useToggleProductDetail()
  const {isCheckoutOpen} = useToggleCheckout()


  useEffect(()  => {
    const fetchProducts: () => Promise<void> = async () => {
      const res: Response = await fetch('https://api.escuelajs.co/api/v1/products')
      const data: [] = await res.json()
      addProducts(data)
      console.log(data)
    }

    fetchProducts()
  }, [addProducts])

  return (
    <>
      <Sidebar>
        {/* {
          isProductDetailOpen
            ? <ProductDetail/>
            : isCheckoutOpen
              ? <CheckoutSideMenu/>
              : null
        } */}
        {
          isCheckoutOpen
            ? <CheckoutSideMenu/>
            : isProductDetailOpen
              ? <ProductDetail/>
              : null
        }
      </Sidebar>
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