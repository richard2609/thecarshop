const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    id: Number,       // Unique identifier for the product
    name: String,            // Product name
    brand: String,
    year: Number,
    price: Number,           // Product price
    quantity: Number         // Quantity of the product in the cart
})

const userSchema = new mongoose.Schema({
    googleId:{type: Number},
    name:{type: String},
    email:{type: String},
    cart: {
        items:[cartSchema]
    }
}       
);

const User = mongoose.model('User',userSchema);
module.exports = User;
