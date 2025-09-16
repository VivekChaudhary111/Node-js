const express = require('express');
const app = express();
const path = require('path');
const seedDB = require('./seed');
const productRoutes = require('./routes/product');
const reviewRoutes = require('./routes/review');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session')

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopping-app-v1')
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
  saveUninitialized: true
//   cookie: { secure: true }
}

app.use(methodOverride('_method'));
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // views folder
app.use(express.static(path.join(__dirname, 'public'))); // public folder
app.use(session(configSession));
app.use(flash());
app.use((req, res, next)=>{
    res.locals.success = req.success;
    res.locals.error = req.error;
    next();
})

// seeded data into DB once
// seedDB();


app.use(productRoutes); // used as middleware so that har incoming request par chale
app.use(reviewRoutes);  // used as middleware so that har incoming request par chale

app.listen(8080, ()=>{
    console.log("Server connected at PORT http://localhost:8080");
})
