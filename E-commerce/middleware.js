const {productSchema, reviewSchema} = require('./schema')

const validateProduct = (req, res, next)=>{
    const {name, img, price, desc} = req.body;
    const {error} = productSchema.validate({name, img, price, desc});
    if(error){
        return res.status(400).render('error', {status: 400, err: error.message})
    }
    next();
}

const validateReview = (req, res, next)=>{
    const {rating, comment} = req.body;
    const {error} = reviewSchema.validate({rating, comment});
    if(error){
        return res.status(400).render('error', {status: 400, err: error.message})
    }
    next();
}

module.exports = {validateProduct, validateReview}