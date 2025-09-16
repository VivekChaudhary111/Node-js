const express = require('express');
const Product = require('../models/Product');
const Review = require('../models/Review');
const router = express.Router();  // mini instance or mini server
const {validateReview} = require('../middleware');

// adding review
router.post('/product/:id/review', validateReview, async (req, res)=>{
    try{

        let {id} = req.params;
        let {rating, comment} = req.body;
        // console.log(req.body);
        const product = await Product.findById(id);
        const review = new Review({rating, comment});
    
        product.reviews.push(review);
        await review.save();
        await product.save();
        req.flash('success', 'Review added successfully!')
        res.redirect(`/product/${id}`);
    }catch(e){
        res.status(500).render('error', {status: 500, message: "Internal_Server_Problem", err: e.message});
    }
})

// deleting a particular review
router.delete('/product/:id/review/:idd', async(req, res)=>{
    let {id, idd} = req.params;
    // console.log(idd);
    let product = await Product.findById(id);
    const index = product.reviews.indexOf(idd);
    if (index !== -1) {
        product.reviews.splice(index, 1); // Removes 1 element starting from 'index'
        await product.save(); // save the changes in database
    }
    await Review.findByIdAndDelete(idd);
    req.flash('success', 'Review deleted successfully!')
    res.redirect(`/product/${id}`);
})




module.exports = router;