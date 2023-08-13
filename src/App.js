import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Cart from './components/Cart'
import MainRoute from './MainRoute'
import ProductDetails from './components/ProductDetails'
import Payments from './components/payment/Payments'


const App = () => {

  const router=(createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<MainRoute />} >
      <Route index element={<Dashboard />}></Route>
      <Route path="/product/:id" element={<ProductDetails />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      <Route path='/payments' element={<Payments />}></Route>
    </Route>
  )))
  return (
    <>
    <RouterProvider router={router} />
   
    </>
  )
}

export default App