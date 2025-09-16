const express = require('express');
const Product = require('../models/Product');
const Review = require('../models/Review');
const router = express.Router();  // mini instance or mini server
const {validateProduct} = require('../middleware');

// show all products
router.get('/products', async (req, res)=>{
    try{
        let products = await Product.find({});
        res.render('products/index', {products, success:req.flash('success')});
    }catch(e){
        res.status(500).render('error', {status: 500, message: "Internal_Server_Problem", err: e.message})
    }
})

// show form to create new product
router.get('/product/new', (req, res)=>{
    try{
        res.render('products/new');
    }catch(e){
        res.status(500).render('error', {status: 500, message: "Internal_Server_Problem", err: e.message})
    }
})

// actually create new product
router.post('/products', validateProduct, async (req, res)=>{
    try{
        let {name, img, price, desc} = req.body;
        await Product.create({name, img, price, desc});
        req.flash('success', 'Product added successfully!');
        res.redirect('/products');
    }catch(e){
        res.status(500).render('error', {status: 500, message: "Internal_Server_Problem", err: e.message})
    }
})


// to show a particular product
router.get('/product/:id', async (req, res)=>{
    try{
        let {id} = req.params;
        let foundProduct = await Product.findById(id).populate('reviews');
        let averageRating = 0;
        if (foundProduct.reviews.length > 0) {
            const totalRating = foundProduct.reviews.reduce((sum, review) => sum + review.rating, 0);
            averageRating = (totalRating / foundProduct.reviews.length);
        }
        averageRating = Math.round(averageRating);
        // console.log(averageRating);
        res.render('products/show', {foundProduct, averageRating, success:req.flash('success')});
    }catch(e){
        res.status(500).render('error', {status: 500, message: "Internal_Server_Problem", err: e.message})
    }
})

// to show a form to edit a product

router.get('/product/:id/edit', async (req, res)=>{
    try{
        let {id} = req.params;
        let foundProduct = await Product.findById(id);
        res.render('products/edit', {foundProduct});
    }catch(e){
        res.status(500).render('error', {status: 500, message: "Internal_Server_Problem", err: e.message})
    }
})

// to actually edit a product and redirect to products
router.patch('/product/:id', validateProduct, async (req, res)=>{
    try{
        let {id} = req.params;
        let {name, price, img, desc} = req.body;
        await Product.findByIdAndUpdate(id, {name, price, img, desc});
        req.flash('success', 'Product edited successfully!')
        res.redirect(`/product/${id}`);
    }catch(e){
        res.status(500).render('error', {status: 500, message: "Internal_Server_Problem", err: e.message})
    }
})

// to delete a product
router.delete('/product/:id', async (req, res)=>{
    try{
        let {id} = req.params;
        let product = Product.findById(id);
        // for(let id of product.reviews){
            //     await Review.findByIdAndDelete(id);
            // }
        await Product.findByIdAndDelete(id);
        req.flash('success', 'Product deleted successfully!')
        res.redirect(`/products`);
    }catch(e){
        res.status(500).render('error', {status: 500, message: "Internal_Server_Problem", err: e.message})
    }
})







module.exports = router;