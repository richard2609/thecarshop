import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import UserName from '../UserName/UserName';
import CartBody from '../CartBody/CartBody';
const Navbar = ({updateCart , cart, setCart}) => {

    useEffect(()=>{
        console.log("cart inside navbar", cart);
    })

async function callLogin() {
    window.location.href = 'https://thecarshop.onrender.com/login';
}

async function callLogout() {
    window.location.href = 'https://thecarshop.onrender.com/logout';
}



    return (
        <div class="container-fluid nav-main-container">
            {/* <nav class="navbar navbar-expand-lg bg-slate-300 border-bottom">
                <div class="navbar-nav navtext">
                    <a class="nav-link">Home</a>
                    <a class="nav-link">Shop</a>
                    <a class="nav-link">Categories</a>
                </div>
                <span class="nav-brand mx-auto">THE CAR SHOP</span>
                <div class="navbar-nav navtext2">
                    <a class="nav-link">Search</a>
                    <a class="nav-link"><i class="bi bi-person-fill text-black"></i></a>
                    <a class="nav-link"><i class="bi bi-cart-fill text-black"></i></a>
                </div>
            </nav> */}
            <nav class="navbar navbar-expand-md navbar-light border-bottom">

                <div class="container-fluid">
                    <span class="nav-brand me-auto brand-small">THE CAR SHOP</span>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end align-center" id="main-nav">
                        <div class="navbar-nav navtext">
                            <Link class="nav-link" to="/">Home</Link>
                            <Link class="nav-link" to='/shop'>Shop</Link>
                            <Link class="nav-link" to='/categories'>Categories</Link>
                        </div>
                        <Link class="nav-brand mx-auto brand-large" to="/">THE CAR SHOP</Link>
                        <div class="navbar-nav navtext2">
                            <div class="dropdown">
                                <button class="btn dropdown-toggle px-2" type="button" data-bs-toggle="dropdown">
                                    <i class="bi bi-person-fill text-black"></i>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-start text-center">
                                    <UserName />
                                    <li><p onClick={callLogin} class="m-0 py-1">Log in</p></li>
                                    <li><p onClick={callLogout} class="m-0 py-1">Log Out</p></li>
                                </ul>
                            </div>
                            <Link class="nav-link" to="/checkout">Checkout</Link>




                            <button class="btn text-start px-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                <i class="bi bi-cart-fill text-black"></i>
                            </button>

                            {/* 
                            <button class="nav=link btn text-start"><i class="bi bi-person-fill text-black"></i></button> */}
                        </div>
                    </div>
                </div>

            </nav>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" >
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Your Cart</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                        <CartBody cart={cart} updateCart= {updateCart} setCart = {setCart} />
                </div>
            </div>


        </div>
    )
}

export default Navbar;
