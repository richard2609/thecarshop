const mongoose = require('mongoose');



const productSchema = new mongoose.Schema({
    id:{type:Number},
    brand:{type: String},
    name:{type: String},
    year:{type: Number},
    price:{type: Number},
    rating: {type: Number},
    imgUrl: {type: String},
    topSpeed: {type: Number},
    category: {type: String}
});

const Product = mongoose.model('Product',productSchema);

async function checkexistingProduct () {
    return await Product.find({});
}

async function addProducts () {
    const existingProduct = await checkexistingProduct();
    if(existingProduct.length === 0){
        Product.insertMany(products).then((docs)=>{
            console.log("docs inserted of products")
        })
        .catch((err)=>{
            console.log("Error inserting products",err);
        })
    } else {
        console.log("Products doc already exist");
    }
}


addProducts();


module.exports = Product;