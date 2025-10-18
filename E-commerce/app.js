const express = require('express');
const app = express();
const path = require('path');
const seedDB = require('./seed');

const productRoutes = require('./routes/product');
const reviewRoutes = require('./routes/review');
const cartRoutes = require('./routes/cart');

const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session')


const authRoutes = require("./routes/auth");
const passport = require('passport'); //pass
const LocalStrategy = require('passport-local'); //pass
const User = require('./models/User'); //pass


const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://vivek2020singh2020:pLiJDOMzhCUWADkh@cluster0.sazdu4p.mongodb.net/E-Commerce-App?retryWrites=true&w=majority')
.then(()=>{
    console.log("DB connected successfully...");
})
.catch((err)=>{
    console.log("Failed to connect with DB...");
    console.log(err);
})

app.use(express.urlencoded({extended: true})); // to parse the req.body
app.use(express.json()); // to parse json data

let configSession = {
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { 
    expires: Date.now() + 1000 * 60 * 60 * 24, // 24 hours from now
    maxAge: 1000 * 60 * 60 * 24,  // 24 hours in milliseconds
    secure: false, // Set to true if using HTTPS
    httpOnly: true // Prevent XSS attacks
  }
}

app.use(methodOverride('_method'));
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // views folder
app.use(express.static(path.join(__dirname, 'public'))); // public folder
app.use(session(configSession));
app.use(flash());

app.use(passport.initialize()); //pass
app.use(passport.session()); //pass
// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser()); //pass
passport.deserializeUser(User.deserializeUser()); //pass

// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate())); //pass


app.use((req, res, next)=>{
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.currentUser = req.user; // Pass the authenticated user to all views
    next();
})

// seeded data into DB once
// seedDB();


app.use(productRoutes); // used as middleware so that har incoming request par chale
app.use(reviewRoutes);  // used as middleware so that har incoming request par chale
app.use(authRoutes); // used as middleware so that har incoming request par chale
app.use(cartRoutes); // used as middleware so that har incoming request par chale

app.listen(8080, ()=>{
    console.log("Server connected at PORT http://localhost:8080");
})
