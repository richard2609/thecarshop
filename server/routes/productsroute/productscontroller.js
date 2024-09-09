const Product = require('../../models/products/products.model');


async function transformproductsdata () {
    const products = await Product.find({},{_id: 0, __v: 0});
    // console.log("products inside test",products);
    return products;
}

async function getproductsdata (req, res) {
    try{
        const products = await transformproductsdata();
        res.status(200).json(products);
    } catch (err) {
        console.error("error fethcing products",err);
        res.status(500);
    }
}

module.exports = getproductsdata;