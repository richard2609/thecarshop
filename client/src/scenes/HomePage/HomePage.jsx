import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Intro from '../../components/Intro/Intro';
import BlankSection from '../../components/BlankSection/BlankSection';
import AboutUs from '../../components/AboutUs/AboutUs';
import BottomAboutUs from '../../components/BottomAboutUs/BottomAboutUs';
import Footer from '../../components/Footer/Footer';
import  './HomePage.css';

const HomePage = ({cart, updateCart, setCart}) => {
  return (
    <div>
      <div class="container-fluid px-0">
        <div class="section1">
          <Navbar cart={cart} updateCart={updateCart} setCart = {setCart} />
          <Intro />
        </div>
        <div class="section2">
          <BlankSection />
          <AboutUs />
          <BottomAboutUs />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default HomePage;
