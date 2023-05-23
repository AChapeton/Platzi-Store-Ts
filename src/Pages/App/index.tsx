import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from "../Home"
import { MyAccount } from "../MyAccount"
import { MyOrder } from "../MyOrder"
import { MyOrders } from "../MyOrders"
import {SignIn} from '../SignIn'
import { NotFound } from "../NotFound"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/my-account" element={<MyAccount/>}/>
        <Route path="/my-order" element={<MyOrder/>}/>
        <Route path="/my-orders" element={<MyOrders/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/not-found" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
