import React from 'react';
import { Link } from 'react-router-dom';
import './CheckoutNavbar.css';
const CheckoutNavbar = ({updateCart , cart, setCart}) => {



    return (
        <div class="container-fluid nav-main-container">

            <nav class="navbar navbar-expand-md navbar-light border-bottom">

                <div class="container-fluid">
                    <span class="nav-brand me-auto brand-small">THE CAR SHOP</span>
                    <div class="collapse navbar-collapse justify-content-end align-center" id="main-nav">
                        <Link class="nav-brand mx-auto brand-large" to="/">THE CAR SHOP</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default CheckoutNavbar;
