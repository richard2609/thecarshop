import React from 'react';
import { Link } from 'react-router-dom';
import './Intro.css';

const Intro = () => {
    return (
        <div class="container-fluid">
            <div class="row justify-content-center align-items-center text-center text-md-start">
                <div class="col-md-7">
                    <img src="https://static.vecteezy.com/system/resources/previews/025/305/916/non_2x/white-sport-car-on-transparent-background-3d-rendering-illustration-free-png.png" alt="" class="img-fluid"></img>
                </div>
                <div class="col-md-3 car-info justify-content-center align-items-center">
                    <div class="row justify-content-center align-items-center">
                        <h4 class="p-0 m-0">Mercedes Benz</h4>
                    </div>
                    <div class="row justify-content-center align-items-center">
                        <p class="p-0 m-0">AMG GT</p>
                    </div>
                    <div class="row justify-content-center align-items-center">
                        <p class="p-0 m-0">Price $120,000</p>
                    </div>
                    <div class="row my-3 align-items-center">
                        <div class="col-12 m-0 p-0">
                            <Link class="btn btn-secondary px-5 py-3" to="/categories">SHOP NOW</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Intro;
