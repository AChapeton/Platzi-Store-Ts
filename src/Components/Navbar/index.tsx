import {NavLink} from 'react-router-dom'
import { useShoppingCartStore } from '../../store/useShoppingCart'
import { useProductsStore, useFilteredProductsStore } from '../../store/useProducts'

function Navbar() {

  const {cart} = useShoppingCartStore()

  const activeStyle = "underline underline-offset-4"

  const {products} = useProductsStore()
  const {addFilteredProducts} = useFilteredProductsStore()

  const handleFilterProduct = (categoryFromNav: string) => {
    console.log(categoryFromNav)
    addFilteredProducts(products, '', categoryFromNav)
  }

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink to='/'>
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            onClick={() => handleFilterProduct('')}
            className={({isActive}) => isActive ? activeStyle : undefined}>
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/shoes'
            onClick={() => handleFilterProduct('shoes')}
            className={({isActive}) => isActive ? activeStyle : undefined}>
            Shoes
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/electronics'
            onClick={() => handleFilterProduct('electronics')}
            className={({isActive}) => isActive ? activeStyle : undefined}>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/furniture'
            onClick={() => handleFilterProduct('furniture')}
            className={({isActive}) => isActive ? activeStyle : undefined}>
            Furniture
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/toys'
            onClick={() => handleFilterProduct('toys')}
            className={({isActive}) => isActive ? activeStyle : undefined}>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/others'
            onClick={() => handleFilterProduct('others')}
            className={({isActive}) => isActive ? activeStyle : undefined}>
            Others
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-3'>
        <li className='text-black/60'>
          andres@chapeton.com
        </li>
        <li>
          <NavLink 
            to='/my-orders'
            className={({isActive}) => isActive ? activeStyle : undefined}>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/my-account'
            className={({isActive}) => isActive ? activeStyle : undefined}>
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/sign-in'
            className={({isActive}) => isActive ? activeStyle : undefined}>
            Sign In
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/'
            className={({isActive}) => isActive ? activeStyle : undefined}>
            Cart {cart.length}
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export {Navbar}