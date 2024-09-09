
const express = require('express');
const cartRouter = express.Router();
const {addItemToCart,removeItemFromCart, decreaseItemQuantity} = require('./cartcontroller');

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  }
  

cartRouter.post('/add',ensureAuthenticated,async (req, res) => {
    const product = req.body;
    const user = req.user;
    const userId = user.googleId
    await addItemToCart(userId, product);
    res.status(200).json({ message: 'Item added to cart' });
  });

  cartRouter.post('/remove',ensureAuthenticated,async (req, res) => {
    const product = req.body;
    const user = req.user;
    // console.log("user user",user);
    const userId = user.googleId;
    await removeItemFromCart(userId, product);
    res.status(200).json({ message: 'Item removed from cart' });
  });

  cartRouter.post('/decrease',ensureAuthenticated,async (req, res) => {
    const product = req.body;
    const user = req.user;
    const userId = user.googleId
    await decreaseItemQuantity(userId, product);
    res.status(200).json({ message: 'Quantity decreased' });
  });


module.exports = cartRouter;