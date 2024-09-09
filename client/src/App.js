import React, {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './scenes/HomePage/HomePage';
import ShopPage from './scenes/ShopPage/ShopPage';
import CategoriesPage from './scenes/CategoriesPage/CategoriesPage';
import Sport from './components/Categories/Sport/Sport';
import Luxury from './components/Categories/Luxury/Luxury';
import Vintage from './components/Categories/Vintage/Vintage';
import Hypercars from './components/Categories/Hypercars/Hypercars';
import CallbackPage from './scenes/CallbackPage/CallbackPage';
import CheckoutPage from './scenes/CheckoutPage/CheckoutPage';
import ThankyouScene from './scenes/ThankyouScene/ThankyouScene';
import './App.css';
const App = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
     fetcCartData();
     console.log("cart inside app",cart);

  }, [])

  const fetcCartData = async () =>{
      try {
          async function httpgetCartData() {
              const reponse = await fetch("https://thecarshop.onrender.com/username/getcart", {
                  credentials: 'include',
              });
              const data = await reponse.json();
              setCart(data);
              console.log("data received from backend of cart",data)
          }
          httpgetCartData();
          console.log("the gettedd and setted cart",cart);

      }
      catch (err) {
          console.log(err);
      }
  }

  return (
    <div>
      <Routes>
        <Route path='/auth/google/callback' element={<CallbackPage />}></Route>
        <Route path='/' element={<HomePage updateCart={fetcCartData} cart = {cart} setCart = {setCart} />}></Route>
        <Route path='/home' element={<HomePage updateCart = {fetcCartData} cart = {cart} setCart = {setCart} />}></Route>
        <Route path='/shop' element={<ShopPage updateCart = { fetcCartData } cart = {cart} setCart = {setCart} />}></Route>
        <Route path='/categories' element={<CategoriesPage updateCart={fetcCartData} cart = {cart } setCart = {setCart} />}></Route>
        <Route path='categories/sport' element={<Sport  cart = {cart} setCart = {setCart} updateCart={fetcCartData} />}></Route>
        <Route path='categories/luxury' element={<Luxury  cart = {cart} setCart = {setCart} updateCart={fetcCartData} />}></Route>
        <Route path='categories/hypercars' element={<Hypercars  cart = {cart} setCart = {setCart} updateCart={fetcCartData} />}></Route>
        <Route path='categories/vintage' element={<Vintage  cart = {cart} setCart = {setCart} updateCart={fetcCartData} />}></Route>
        <Route path='/checkout' element={<CheckoutPage cart ={cart} setCart = {setCart} updateCart={fetcCartData} />}></Route>
        <Route path='/thankyou' element={<ThankyouScene />} ></Route>
      </Routes>
      {/* <HomePage /> */}
      {/* <ShopPage /> */}
      {/* <CategoriesPage /> */}
    </div>
  )
}

export default App;
