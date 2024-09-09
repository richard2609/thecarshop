import React, { useState, useEffect } from 'react';
import './ShopPage.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';



const ShopPage = ( {updateCart, cart, setCart} ) => {

    
    const [products, setproducts] = useState([]);
    useEffect(() => {
        try {
            async function httpgetProductsData() {
                const reponse = await fetch("http://localhost:3001/shop");
                const data = await reponse.json();
                setproducts(data);
                console.log("cart inside shoppage", cart)
            }
            httpgetProductsData();
            
        }
        catch (err) {
            console.log(err);
        }

    }, [])

    const handleAddToCart = async (productfull) => {
       await addToCart (productfull).then(()=>updateCart());
    }

    const addToCart = async (productfull) =>{

        try {
            const response = await fetch('http://localhost:3001/cart/add', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              credentials: 'include', // Include cookies for session handling
              body: JSON.stringify(productfull)
            });
        
            if (!response.ok) {
              const data = await response.json();
              console.error('Error adding item to cart:', data.message);
              return;
            }
        
            const data = await response.json();
            console.log(data.message);
            updateCart(); // Success message
            // Optionally refresh cart items or show a confirmation message
          } catch (error) {
            console.error('Error:', error);
          }

    }

    return (
        <div>
            <Navbar cart={cart} updateCart = {updateCart} setCart = {setCart} />
            <div class="container">

                <div>
                    <div className="row">
                        {
                            products.slice(0, 4).map((product, index) => {
                                return (
                                    <div key={product.id} className='col-lg-3 col-5'>
                                        <img src={product.imgUrl} className='clip-image img-fluid'></img>
                                        <div className='card'>
                                            <div className='card-body'>
                                                <h5 className='card-title'>{product.brand} {product.name}</h5>
                                                <p className='card=text'>{product.price}</p>
                                                <a href="#" className='btn btn-secondary' onClick={()=>handleAddToCart(product)}>ADD TO CART</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="row">
                        {
                            products.slice(4, 8).map((product, index) => {
                                return (
                                    <div key={product.id} className='col-lg-3 col-5'>
                                        <img src={product.imgUrl} className='clip-image img-fluid'></img>
                                        <div className='card'>
                                            <div className='card-body'>
                                                <h5 className='card-title'>{product.brand} {product.name}</h5>
                                                <p className='card=text'>{product.price}</p>
                                                <a href="#" className='btn btn-secondary' onClick={()=>handleAddToCart(product)}>ADD TO CART</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="row last-row">
                        {
                            products.slice(8, 12).map((product, index) => {

                                {/* console.log(products.slice(8, 12)) */}
                                return (
                                    <div key={product.id} className='col-lg-3 col-5'>
                                        <img src={product.imgUrl} className='clip-image img-fluid'></img>
                                        <div className='card'>
                                            <div className='card-body'>
                                                <h5 className='card-title'>{product.brand} {product.name}</h5>
                                                <p className='card=text'>{product.price}</p>
                                                <a href="#" className='btn btn-secondary' onClick={()=>handleAddToCart(product)}>ADD TO CART</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>


                <Footer />
            </div>
        </div>
    )
}

export default ShopPage;
