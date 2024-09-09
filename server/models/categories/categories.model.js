
const mongoose = require('mongoose');

// const categories = [
//     {
//         id:0,
//         title:"Sport"
//     },
//     {
//         id:1,
//         title:"Luxury"
//     },
//     {
//         id:2,
//         title:"Vintage"
//     },
//     {
//         id:3,
//         title:"Hypercars"
//     }
// ]


const categorySchema = new mongoose.Schema({
            id:{type: Number},
            title:{type: String}
        }       
    );

const Category = mongoose.model('Category',categorySchema);

async function checkexistingCategory () {
   return await Category.find({});
}

// ADDING TO DATABASSE

async function addCategories() {
    const existingCategory = await checkexistingCategory();
    if(existingCategory.length === 0){
        Category.insertMany(categories).then((docs)=>{
            console.log("Docs inserted", docs)
        })
        .catch((err)=>{
            console.log("Error inserting docs",err);
        })
    }else {
        console.log("Documents already exist");
    }
    
}

addCategories();




module.exports = Category;
