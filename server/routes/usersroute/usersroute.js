
const express = require('express');
const usersRouter = express.Router();
const getcartdata = require('./userscontroller');
// const ensureAuthenticated = require('../../index');
// const getusersdata = require('./userscontroller');

// Middleware function to check authentication
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.status(401).json({ message: 'Unauthorized' });
  }

usersRouter.get('/',ensureAuthenticated,(req, res)=>{
    res.json(req.user);
});
usersRouter.get('/getcart', ensureAuthenticated, async(req,res)=>{
    const userId = req.user.googleId;
    const cart = await getcartdata(userId);
    console.log("username/getcart hitttt")
    res.status(200).json(cart);
})

module.exports = usersRouter;