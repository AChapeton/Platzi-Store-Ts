import { useProductDetail } from '../../store/useShoppingCart'
import './styles.css'

function ProductDetail() {
  const {isProductDetailOpen, closeProductDetail} = useProductDetail()

  return (
    <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div>
          <span onClick={() => closeProductDetail()}>x</span>
          </div>
      </div>
    </aside>
  )
}

export {ProductDetail}
