
const Category = require('../../models/categories/categories.model');

async function transformcategoriesdata () {
    const categories =await Category.find({},{ _id: 0, __v: 0 });
    console.log("categories inside test",categories);
    return categories;
}

async function getcategoriesdata (req,res) {

    try{
        const categories = await transformcategoriesdata();
        console.log("cat inside main",categories);
        res.status(200).json(categories);
    } catch (err) {
        console.error("ERror fetching",err);
        res.status(500);
    }

}


module.exports = getcategoriesdata;