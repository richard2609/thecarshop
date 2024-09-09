import React from 'react';
import { Link } from 'react-router-dom';
import './CheckoutPage.css';
import CheckoutNavbar from '../../components/CheckoutNavbar/CheckoutNavbar';
import Navbar from '../../components/Navbar/Navbar';

const CheckoutPage = ({cart, setCart, updateCart}) => {

console.log("checkout",cart);

    function calculateCartTotal(cart) {
          return cart.reduce((total, item) => {
          return total + (item.price * item.quantity);
        }, 0);
      }

      const cartTotal = calculateCartTotal(cart);
      

    return (
        <div className='checkout-scroll'>
            <div class="container-fluid">
                {/* <CheckoutNavbar /> */}
                <Navbar />
                <div class="container justify-content-center my-5">
                    <div className='text-center my-5'>
                        <span className='text-center fs-1 fw-bolder'>Checkout</span>
                    </div>
                    <div>
                        <div class="row justify-content-center">
                            <div class="col-lg-5">
                                <div>
                                    <div class="row my-3">
                                        <div class="col-6">
                                            <h6 className='fw-bold'>Customer Information</h6>
                                        </div>
                                    </div>
                                    <div class="row my-3">
                                        <div class="col-10">
                                            <div class="input-group mb-3">
                                                {/* <span class="input-group-text" id="basic-addon1">@</span> */}
                                                <input type="text" class="form-control" placeholder="username or email address*" aria-label="Username" aria-describedby="basic-addon1" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row my-3">
                                        <div class="col-6">
                                            <h6 className='fw-bold'>Billing Address</h6>
                                        </div>
                                    </div>
                                    <div class="row my-3">
                                        <div class="col-5">
                                            <div class="input-group mb-3">
                                                {/* <span class="input-group-text" id="basic-addon1">@</span> */}
                                                <input type="text" class="form-control" placeholder="First Name" aria-label="Username" aria-describedby="basic-addon1" />
                                            </div>
                                        </div>
                                        <div class="col-5">
                                            <div class="input-group mb-3">
                                                {/* <span class="input-group-text" id="basic-addon1">@</span> */}
                                                <input type="text" class="form-control" placeholder="Last Name" aria-label="Username" aria-describedby="basic-addon1" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row my-3">
                                        <div class="col-10">
                                            <div class="input-group mb-3">
                                                {/* <span class="input-group-text" id="basic-addon1">@</span> */}
                                                <input type="text" class="form-control" placeholder="Address Line 1" aria-label="Username" aria-describedby="basic-addon1" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row my-3">
                                        <div class="col-10">
                                            <div class="input-group mb-3">
                                                {/* <span class="input-group-text" id="basic-addon1">@</span> */}
                                                <input type="text" class="form-control" placeholder="Address Line 2" aria-label="Username" aria-describedby="basic-addon1" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row my-3">
                                        <div class="col-4">
                                            <div class="input-group mb-3">
                                                {/* <span class="input-group-text" id="basic-addon1">@</span> */}
                                                <input type="text" class="form-control" placeholder="City/Town" aria-label="Username" aria-describedby="basic-addon1" />
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            <div class="input-group mb-3">
                                                {/* <span class="input-group-text" id="basic-addon1">@</span> */}
                                                <input type="text" class="form-control" placeholder="State" aria-label="Username" aria-describedby="basic-addon1" />
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            <div class="input-group mb-3">
                                                {/* <span class="input-group-text" id="basic-addon1">@</span> */}
                                                <input type="text" class="form-control" placeholder="Zipcode" aria-label="Username" aria-describedby="basic-addon1" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row my-3">
                                        <div class="col-10">
                                            <div class="input-group mb-3">
                                                {/* <span class="input-group-text" id="basic-addon1">@</span> */}
                                                <input type="text" class="form-control" placeholder="Phone" aria-label="Username" aria-describedby="basic-addon1" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row my-3">
                                        <div class="col-6">
                                            <h6 className='fw-bold'>Additional Information</h6>
                                        </div>
                                    </div>
                                    <div class="row my-3">
                                        <div class="col-10">
                                            <div class="form-floating">
                                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                                <label for="floatingTextarea">Special notes about your delivery</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row my-3">
                                        <div class="col-6">
                                            <h6 className='fw-bold'>Payment</h6>
                                        </div>
                                    </div>
                                    <div class="row my-3">
                                        <div class="col-10">
                                            <ul class="list-group">
                                                <li class="list-group-item">Cash on delivery</li>
                                                <li class="list-group-item">Pay with cash upon delivery </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="col-lg-5">
                                <div class="row my-3">
                                    <div class="col-6">
                                        <h6 className='fw-bold'>Your order</h6>
                                    </div>
                                </div>
                                <div class="row my-3">
                                    <div class="col-10">
                                        <ul class="list-group">
                                            <li class="list-group-item">
                                                <div class="row">
                                                    <div class="col-6">Product</div><div class="col-6 text-end">Subtotal</div>
                                                </div>
                                            </li>
                                            {cart.map((cartItem)=>{
                                                return(
                                                    <li class="list-group-item">
                                                <div class="row my-5">
                                                    <div class="col-6">{cartItem.brand} {cartItem.name} X {cartItem.quantity}</div><div class="col-6 text-end">{cartItem.price * cartItem.quantity} </div>
                                                </div>
                                            </li>
                                                )
                                            })}
                                            <li class="list-group-item">
                                                <div class="row">
                                                    <div class="col-6">Total</div><div class="col-6 text-end">$ {cartTotal}</div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <Link class="btn gotohome-button" to="/">GO TO HOME</Link>
                            </div>
                        </div>
                        <div class="row justify-content-center my-5 text-center">
                            <div class="col-lg-8">
                                <Link className='btn btn-secondary confirm-order' to="/thankyou">CONFIRM ORDER</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <p>This is the checkout Page.</p> */}
            </div>

        </div>
    )
}

export default CheckoutPage;
