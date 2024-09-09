
const express = require('express');
const productsRouter = express.Router();
const getproductsdata = require('./productscontroller');

productsRouter.get('/',getproductsdata);
module.exports = productsRouter;