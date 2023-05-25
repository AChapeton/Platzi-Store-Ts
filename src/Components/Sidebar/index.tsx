import { useToggleProductDetail, useToggleCheckout } from '../../store/useSidebar'
import './styles.css'

interface SidebarProps {
  children: React.ReactNode
}

function Sidebar({children}: SidebarProps) {
  const {isProductDetailOpen, closeProductDetail} = useToggleProductDetail()
  const {isCheckoutOpen, closeCheckout} = useToggleCheckout()

  const handleCloseSidebar = () => {
    if(isProductDetailOpen){
      closeProductDetail()
    }

    if(isCheckoutOpen){
      closeCheckout()
    }
  }

  return (
    <aside className={`${isProductDetailOpen || isCheckoutOpen ? 'flex' : 'hidden'} sidebar flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>
          {
            isProductDetailOpen
              ? 'Detail'
              : isCheckoutOpen
                ? 'My Order'
                : null
          }
        </h2>
        <div>
          <span onClick={() => handleCloseSidebar()}>x</span>
          </div>
      </div>
       {children}
    </aside>
  )
}

export {Sidebar}