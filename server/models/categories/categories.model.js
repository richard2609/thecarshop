
const mongoose = require('mongoose');

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
