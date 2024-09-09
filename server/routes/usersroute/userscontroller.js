
const User = require('../../models/users/users.model');

async function transformusersdatatocart () {
    const users =await User.find({},{ _id: 0, __v: 0 });
    console.log("users inside test",users);
    return users;
}
 function getusersdata (req,res) {

    // try{
    //     const users = await transformusersdata();
    //     console.log("cat inside main",users);
    //     res.status(200).json(users);
    // } catch (err) {
    //     console.error("ERror fetching",err);
    //     res.status(500);
    // }
    res.json(req.user);

}


async function getcartdata (userId) {
    console.log("userID",userId)
    const user = await User.find({googleId:userId},{_id:0, __v:0});
    const cart = user[0].cart.items;
    // console.log("cart inside getcartdata",cart);
    return cart;
}

module.exports = getcartdata;