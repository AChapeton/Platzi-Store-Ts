import { Product } from "../../types"
import { useProductDetail } from "../../store/useProductDetail"
import { useToggleProductDetail, useToggleCheckout } from "../../store/useSidebar";
import {useShoppingCartStore} from "../../store/useShoppingCart"

interface CardProps {
  data: Product
}

function Card({data}: CardProps){
  const {addProductToCart} = useShoppingCartStore()
  const {openProductDetail, closeProductDetail} = useToggleProductDetail()
  const {openCheckout, closeCheckout} = useToggleCheckout()
  const {showProductDetail} = useProductDetail()

  const showProduct = (product: Product) => {
    openProductDetail()
    closeCheckout()
    console.log('open detail')
    showProductDetail(product)
  }

  const handleAddProductToCart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, product: Product) => {
    e.stopPropagation()
    addProductToCart(product)
    openCheckout()
    closeProductDetail()
    console.log('open checkout')
  }

  return(
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct(data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.category.name}
        </span>
        <img className="w-full h-full object-cover rounded-lg" src={data.images[0]} alt={data.title} />
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full  m-2 p-1"
          onClick={(e) => handleAddProductToCart(e, data)}
        >
          +
        </div>
      </figure>
      <p className='flex justify-between'>
        <span className="text-sm font-light">{data.title}</span>
        <span className="text-lg font-medium">${data.price}</span>
      </p>
    </div>
  )
}

export {Card}