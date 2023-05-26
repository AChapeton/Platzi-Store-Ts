import { useEffect, useState} from "react";
import { Card } from "../../Components/Card"
import { Sidebar } from "../../Components/Sidebar";
import { ProductDetail } from "../../Components/ProductDetail";
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu";
import { useProductsStore, useFilteredProductsStore } from "../../store/useProducts";
import { useToggleProductDetail, useToggleCheckout } from "../../store/useSidebar";
import { useFilterProducts } from "../../hooks/useFilterProducts";
import { Product } from "../../types";

function Home() {

  const {products, addProducts} = useProductsStore()
  // const {filteredProducts, addFilteredProducts} = useFilteredProductsStore()
  const {isProductDetailOpen} = useToggleProductDetail()
  const {isCheckoutOpen} = useToggleCheckout()
  const [searchedTitle, setSearchedTitle] = useState<string>('')
  const filteredProducts = useFilterProducts(products, searchedTitle)


  useEffect(()  => {
    const fetchProducts: () => Promise<void> = async () => {
      const res: Response = await fetch('https://api.escuelajs.co/api/v1/products')
      const data: [] = await res.json()
      addProducts(data)
      console.log(data)
    }

    fetchProducts()
  }, [addProducts])

  const handleInputSearch = (value: string) => {
    setSearchedTitle(value)
  }

  const renderView = () => {
    if(searchedTitle.length > 0){
      if(filteredProducts.length > 0){
        return(
          filteredProducts?.map(product => (
            // <h1>{product.title}</h1>
            <Card data={product}/>
          ))
        )
      }else{
        <div>We did not found anything</div>
      }
    }else{
      return(
        products?.map(product => (
          // <h1>{product.title}</h1>
          <Card data={product}/>
        ))
      )
    }
  }

  return (
    <>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Exclussive Products</h1>
      </div>
      <input
        type="text"
        className="rounded-lg border border-black w-80 p-2 mb-6 focus: outline-none"
        placeholder="Search a product"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputSearch(e.target.value)}
      />
      <Sidebar>
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
          renderView()
        }
      </div>
    </>
  )
}

export {Home}