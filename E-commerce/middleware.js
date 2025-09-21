const {productSchema, reviewSchema} = require('./schema');
const Product = require('./models/Product');

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

const isLoggedIn = (req, res, next)=>{
    if(!req.isAuthenticated()){
        req.flash('error' , 'You must be signed in first!');
        return res.redirect('/login');
    }
    next();
}

const isSeller = (req, res, next)=>{
    if(req.user.role !== 'seller'){
        req.flash('error' , 'You must be a Seller to do that!');
        return res.redirect('/products');
    }
    next();
}

const isProductAuthor = async (req, res, next)=>{
    let {id} = req.params;
    let product = await Product.findById(id);
    if(!product.author.equals(req.user._id)){
        req.flash('error' , 'You are not authorized to do that!');
        return res.redirect(`/products`);
    }
    next();
}

module.exports = {validateProduct, validateReview, isLoggedIn, isSeller, isProductAuthor};