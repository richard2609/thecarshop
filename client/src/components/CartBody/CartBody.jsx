import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './CartBody.css';

const CartBody = ({ updateCart, cart, setCart }) => {

  // const [cart, setCart] = useState([]);
  useEffect(() => {
    //   console.log("this is the cart",cart);
    if (cart) {
      // console.log("this is the updatecart function", typeof(updateCart));
      updateCart();
    }

  }, [])

  // const fetcCartData = async () =>{
  //     try {
  //         async function httpgetCartData() {
  //             const reponse = await fetch("http://localhost:3001/username/getcart", {
  //                 credentials: 'include',
  //             });
  //             const data = await reponse.json();
  //             setCart(data);
  //         }
  //         httpgetCartData();

  //     }
  //     catch (err) {
  //         console.log(err);
  //     }
  // }


  const removeFromCart = async (product) => {
    try {
      await fetch('https://thecarshop.onrender.com/cart/remove', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(product)
      });
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
    updateCart();
  }


  const increaseQuantity = async (product) => {
    try {
      const response = await fetch('https://thecarshop.onrender.com/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(product),
      });
      const updatedCart = await response.json();
      setCart(updatedCart);
      updateCart(); // Optionally update cart in parent component
    } catch (error) {
      console.error('Error increasing item quantity:', error);
    }
  };


  const handleIncreaseQuantity = async (product) => {
    await increaseQuantity(product).then(() => updateCart());
  }

  const decreaseQuantity = async (product) => {
    try {
      const response = await fetch('https://thecarshop.onrender.com/cart/decrease', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(product),
      });
      const updatedCart = await response.json();
      setCart(updatedCart);
      updateCart(); // Optionally update cart in parent component
    } catch (error) {
      console.error('Error decreasing item quantity:', error);
    }
  };

  const handleDecreaseQuantity = async (product) => {
    await decreaseQuantity(product).then(() => updateCart());
  }



  if (!cart) {
    return (
      <div>
        <p>Loading</p>;
      </div>
    )
  } else if (cart.length === 0) {
    return (
      <div>
        <p>Your cart is empty</p>
      </div>
    )
  } else {
    if (Array.isArray(cart) === true) {
      return (
        <div>
          <div>
            {cart.map((cartItem) => (
              <div className='row justify-content-center'>

                <p class="col-5 cart-name fs-6">{cartItem.brand} {cartItem.name}<span class="cart-price"> ${cartItem.price * cartItem.quantity}</span></p>
                <span class="col-4"> <i onClick={() => handleDecreaseQuantity(cartItem)} class="bi bi-dash-lg"></i> <span class="px-1"> {cartItem.quantity} </span> <i onClick={() => handleIncreaseQuantity(cartItem)} class="bi bi-plus-lg"></i> </span><span class="col-1">
                  <i onClick={() => handleRemoveFromCart(cartItem)} class="bi bi-trash3-fill"></i></span>

              </div>
            ))}

          </div>
          <div class="row justify-content-center">
            {/* <Link class="btn col-10 checkout-button" to="/checkout">CHECKOUT
            </Link> */}
          </div>
        </div>
      )
    }
  }

}

export default CartBody;
