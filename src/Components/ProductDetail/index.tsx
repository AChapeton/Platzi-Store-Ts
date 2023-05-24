import { useProductDetail, useToggleProductDetail } from '../../store/useProductDetail'
import './styles.css'

function ProductDetail() {
  const {isProductDetailOpen, closeProductDetail} = useToggleProductDetail()
  const {product} = useProductDetail()

  console.log(product)

  return (
    <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div>
          <span onClick={() => closeProductDetail()}>x</span>
          </div>
      </div>
      <figure className='px-6'>
        <img className='w-full h-full rounded-lg' src={product.images[0]} alt={product.title} />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl mb-2'>${product.price}</span>
        <span className='font-medium text-md'>{product.title}</span>
        <span className='font-light text-sm'>{product.description}</span>
      </p>
    </aside>
  )
}

export {ProductDetail}
