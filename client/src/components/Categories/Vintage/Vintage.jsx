import React, {useState, useEffect} from 'react';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import './Vintage.css';

const Vintage = ({updateCart, setCart, cart}) => {

    const [products, setproducts] = useState([]);
    useEffect(() => {
        try {
            async function httpgetProductsData() {
                const reponse = await fetch("https://thecarshop.onrender.com/categories/vintage");
                const data = await reponse.json();
                setproducts(data);
            }
            httpgetProductsData();
        }
        catch (err) {
            console.log(err);
        }

    }, [])

    const handleAddToCart = async (productfull) => {
       await addToCart (productfull).then(()=> updateCart());
    }

    const addToCart = async (productfull) =>{

        try {
            const response = await fetch('https://thecarshop.onrender.com/cart/add', {
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
            console.log(data.message); // Success message
            // Optionally refresh cart items or show a confirmation message
          } catch (error) {
            console.error('Error:', error);
          }

    }

    const vintageProducts = products.filter(product => product.category === 'vintage');
    console.log(vintageProducts);
    return (
        <div>
            <Navbar cart={cart} updateCart={updateCart} setCart={setCart} />
            <div className='container'>
                <div className="row">
                    {
                        vintageProducts.slice(0, 4).map((product, index) => {
                            return (
                                <div key={product.id} className='col-lg-3 col-5'>
                                    <img src={product.imgUrl} className='clip-image img-fluid'></img>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <h5 className='card-title'>{product.brand} {product.name}</h5>
                                            <p className='card=text'>{product.price}</p>
                                            <a href="#" className='btn btn-secondary' onClick={()=> handleAddToCart(product)}>ADD TO CART</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="row">
                    {
                        vintageProducts.slice(4, 8).map((product, index) => {
                            return (
                                <div key={product.id} className='col-lg-3 col-5'>
                                    <img src={product.imgUrl} className='clip-image img-fluid'></img>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <h5 className='card-title'>{product.brand} {product.name}</h5>
                                            <p className='card=text'>{product.price}</p>
                                            <a href="#" className='btn btn-secondary' onClick={()=> handleAddToCart(product)}>ADD TO CART</a>
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

    )
}

export default Vintage;
