const User = require('../../models/users/users.model')

const addItemToCart = async (userId, product) => {
    try {
      const user = await User.findOne({googleId: userId});
    //   console.log(user);
  
      if (!user) {
        throw new Error('User not found');
      }
  
      const itemIndex = user.cart.items.findIndex(item => item.id === product.id);
  
      if (itemIndex > -1) {
        // If item already exists, increase quantity
        user.cart.items[itemIndex].quantity += 1;
      } else {
        // Add new item to the cart
        user.cart.items.push({ ...product, quantity: 1 });
      }
  
      await user.save();
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  const removeItemFromCart = async (userId, product) => {
    try {
      const user = await User.findOne({googleId:userId});
  
      if (!user) {
        throw new Error('User not found');
      }
    //   console.log("hey hey hey",user.cart.items);
    //   console.log("lhs",user.cart.items[0].id);
    //   console.log("rhs",product.id);

      user.cart.items = user.cart.items.filter(item => item.id !== product.id);
      await user.save();
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };



  const decreaseItemQuantity = async (userId, product) => {
    try {
      const user = await User.findOne({ googleId: userId });
  
      if (!user) {
        throw new Error('User not found');
      }
  
      const itemIndex = user.cart.items.findIndex(item => item.id === product.id);
  
      if (itemIndex > -1) {
        if (user.cart.items[itemIndex].quantity > 1) {
          // Decrease the quantity by 1
          user.cart.items[itemIndex].quantity -= 1;
        } else {
          // If quantity is 1, remove the item from the cart
          user.cart.items.splice(itemIndex, 1);
        }
        await user.save();
      } else {
        throw new Error('Item not found in cart');
      }
    } catch (error) {
      console.error('Error decreasing item quantity:', error);
    }
  };


  module.exports = {addItemToCart, removeItemFromCart, decreaseItemQuantity};