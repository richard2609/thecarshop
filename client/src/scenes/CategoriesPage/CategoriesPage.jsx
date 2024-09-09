import React, {useState, useEffect} from 'react';
import './CategoriesPage.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';


const CategoriesPage = ({cart, updateCart, setCart}) => {

    const [categories, setcategories] = useState([]);
    useEffect(() => {
        try {
            async function httpgetCategoriesData() {
                const reponse = await fetch("https://thecarshop.onrender.com/categories");
                const data = await reponse.json();
                console.log(data);
                setcategories(data);
            }
            httpgetCategoriesData();
        }
        catch (err) {
            console.log(err);
        }

    }, [])


    return (
        <div>
            <Navbar cart={cart} updateCart={updateCart} setCart = {setCart} />
            {/* <div class="container-fluid">
                <div class="row align-items-center justify-content-center text-center card-row">
                    <div class="col-md-6 card-bg-container-sport">
                        <div class="card-container">
                            <p>SPORT</p>
                        </div>
                    </div>
                    <div class="col-md-6 card-bg-container-luxury">
                        <div class="card-container">
                            <p>LUXURY</p>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center justify-content-center text-center card-row">
                    <div class="col-md-6 card-bg-container-vintage">
                        <div class="card-container">
                            <p>VINTAGE</p>
                        </div>
                    </div>
                    <div class="col-md-6 card-bg-container-electric">
                        <div class="card-container">
                            <p>ELECTRIC</p>
                        </div>
                    </div>
                </div>
            </div> */}

                <div class="container-fluid">
                    <div className='row align-items-center justify-content-center text-center card-row'>
                        {categories.slice(0, 2).map((category) => {
                            return (
                                <div key={category.id} className={`col-md-6 card-bg-container-${category.title.toLowerCase()}`}>
                                    <div className='card-container'>
                                        <Link className='link-text' to={`/categories/${category.title.toLowerCase()}`}>{category.title.toUpperCase()}</Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='row align-items-center justify-content-center text-center card-row'>
                        {categories.slice(2, 4).map((category) => {
                            return (
                                <div key={category.id} className={`col-md-6 card-bg-container-${category.title.toLowerCase()}`}>
                                    <div className='card-container'>
                                        <Link className='link-text'  to={`/categories/${category.title.toLowerCase()}`}>{category.title.toUpperCase()}</Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            <Footer />
        </div>
    )
}

export default CategoriesPage;
