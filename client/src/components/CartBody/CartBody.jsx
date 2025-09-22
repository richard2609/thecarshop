import React, { useEffect} from 'react';
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



  const removeFromCart = async (product) => {
    try {
      await fetch('http://localhost:6001/cart/remove', {
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
      const response = await fetch('http://localhost:6001/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(product),
      });
      const updatedCart = await response.json();
      setCart(updatedCart);
      updateCart(); 
    } catch (error) {
      console.error('Error increasing item quantity:', error);
    }
  };


  const handleIncreaseQuantity = async (product) => {
    await increaseQuantity(product).then(() => updateCart());
  }

  const decreaseQuantity = async (product) => {
    try {
      const response = await fetch('http://localhost:6001/cart/decrease', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(product),
      });
      const updatedCart = await response.json();
      setCart(updatedCart);
      updateCart(); 
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
