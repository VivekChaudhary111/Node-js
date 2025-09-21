const express =  require('express');
const User = require('../models/User');
const passport = require('passport');
const router = express.Router();

// to show register form
router.get('/register' , (req,res)=>{
    res.render('auth/signup');
})

// to actually register the user into DB
router.post('/register' , async (req,res)=>{
    try{
        let { username , password , email , role} = req.body;
        let user = new User({ username , email , role});
        let newUser = await User.register(user , password);
        // res.send(newUser);
        req.login(newUser, function(err){
            if(err) {
                req.flash('error' , e.message);
                res.redirect('/products');
                return next(err);
            }
            req.flash('success' , 'Welcome, You are registered successfully');
            return res.redirect('/products');
        })
    }
    catch(e){
        req.flash('error' , e.message);
        res.redirect('/products');
    }
})

// to show login form
router.get('/login' , (req,res)=>{
    res.render('auth/login');
})
// actually login the user using passport
router.post('/login',
  passport.authenticate('local', 
  { 
    failureRedirect: '/login', 
    failureMessage: true 
  }),
  function(req, res) {
    console.log(req.user);
    req.flash('success' , 'Welcome Back')
    res.redirect('/products');
});

router.get('/logout' , (req,res)=>{
    req.logout(()=>{
        req.flash('success' , 'Logged out successfully')
        res.redirect('/login');
    });
})

module.exports = router;