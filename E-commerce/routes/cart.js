const express = require('express');
const router = express.Router();  // mini instance or mini server
const {isLoggedIn} = require('../middleware');
const User = require('../models/User');
const Product = require('../models/Product');


// to show cart items of a particular user
router.get('/user/cart', isLoggedIn, async (req, res)=>{
    try{
        let userId = req.user._id;
        let user = await User.findById(userId).populate('cart');
        // console.log(user.cart);
        res.render('cart/index', {cartItems: user.cart});
    }catch(e){
        res.status(500).render('error', {status: 500, message: "Internal_Server_Problem", err: e.message})
    }
})


// to add a product to cart of a particular user
router.post('/user/:productId/add', isLoggedIn, async (req, res)=>{
    try{
        let {productId} = req.params;
        let userId = req.user._id;
        let user = await User.findById(userId);
        let product = await Product.findById(productId);
        if(!user.cart.includes(productId)){
            user.cart.push(product);
            await user.save();
        }
        req.flash('success', 'Product added to cart successfully!');
        // res.redirect(`/product/${productId}`);
        res.redirect(`/user/cart`);
    }
    catch(e){
        res.status(500).render('error', {status: 500, message: "Internal_Server_Problem", err: e.message})
    }
})
// to remove a product from cart of a particular user
router.delete('/user/:productId', isLoggedIn, async (req, res)=>{
    try{
        let {productId} = req.params;
        let userId = req.user._id;
        let user = await User.findById(userId);
        const index = user.cart.indexOf(productId);
        if (index !== -1) {
            user.cart.splice(index, 1);
            await user.save(); // save the changes in database
        }
        req.flash('success', 'Product removed from cart successfully!');
        res.redirect('/user/cart');
    }
    catch(e){
        res.status(500).render('error', {status: 500, message: "Internal_Server_Problem", err: e.message})
    }
})



module.exports = router;