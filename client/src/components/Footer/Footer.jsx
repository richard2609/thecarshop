import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div class="container-fluid bg-white">
            <div class="row justify-content-between py-5 my-xxl-5 px-5">
                <div class="col-md-2 mx-xxl-4 my-3">
                    <p class="s1-main fs-4 fw-bold custom-fw-s1-main">THE CAR SHOP</p>
                    <p class="s1-sub">Shop for any car you want at the same place.</p>
                </div>
                <div class="col-md-2 mx-xxl-4 my-3">
                    <p class="s2-main fs-4 fw-bold">Contact Us</p>
                    <span class="s2-sub">
                        <p>Email: thecarshop@123.com</p>
                        <p>Phone: +1 346 554 4444</p>
                        <p>Address: 1323 NY Avenue, CA 1212</p>
                    </span>
                </div>
                <div class="col-md-2 mx-xxl-4 my-3">
                    <p class="s3-main fs-4 fw-bold">Links</p>
                    <p class="s3-sub">Home</p>
                    <p class="s3-sub">Shop</p>
                    <p class="s3-sub">Profile</p>
                    <p class="s3-sub">Cart</p>
                </div>
                <div class="col-md-2 me-xxl-4 s4-main my-3">
                    <p class="fs-4 fw-bold">Social Media</p>
                    <span>
                        <p><i class="bi bi-instagram fs-4"></i> Instagram</p>
                    </span>

                    <p><i class="bi bi-linkedin fs-4"></i> Linked In</p>
                    <span>
                    </span>
                    <span>

                        <p><i class="bi bi-facebook fs-4"></i> Facebook</p>
                    </span>



                </div>
            </div>
        </div>
    )
}

export default Footer
