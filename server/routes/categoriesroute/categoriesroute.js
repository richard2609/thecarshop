
const express = require('express');
const categoriesRouter = express.Router();
const getcategoriesdata = require('./categoriescontroller');
const getproductsdata = require('../productsroute/productscontroller')

categoriesRouter.get('/',getcategoriesdata);
categoriesRouter.get('/sport',getproductsdata);
categoriesRouter.get('/luxury',getproductsdata);
categoriesRouter.get('/vintage',getproductsdata);
categoriesRouter.get('/hypercars',getproductsdata);

module.exports = categoriesRouter;