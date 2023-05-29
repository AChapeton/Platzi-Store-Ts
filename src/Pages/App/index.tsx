import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from "../Home"
import { MyAccount } from "../MyAccount"
import { MyOrder } from "../MyOrder"
import { MyOrders } from "../MyOrders"
import {SignIn} from '../SignIn'
import { NotFound } from "../NotFound"
import { Navbar } from '../../Components/Navbar'
import { Layout } from '../../Components/Layout'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/shoes" element={<Home/>}/>
            <Route path="/electronics" element={<Home/>}/>
            <Route path="/furniture" element={<Home/>}/>
            <Route path="/toys" element={<Home/>}/>
            <Route path="/others" element={<Home/>}/>
            <Route path="/my-account" element={<MyAccount/>}/>
            <Route path="/my-order" element={<MyOrder/>}/>
            <Route path="/my-orders" element={<MyOrders/>}/>
            <Route path="/my-orders/last" element={<MyOrder/>}/>
            <Route path="/my-orders/:id" element={<MyOrder/>}/>
            <Route path="/sign-in" element={<SignIn/>}/>
            <Route path="/not-found" element={<NotFound/>}/>
          </Routes>
        </Layout>
    </BrowserRouter>
  )
}

export default App