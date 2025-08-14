const express = require('express');
const app = express();
const path = require('path');

const blogs = [
    {id:1,
    author: "Vivek Chaudhary",
    comment: "M hun vivek chaudhary",
    // content: "This is my first blog post",
    },
    {id:2,
    author: "John Doe",
    comment: "level sabke niklenege",
    // content: "This is my second blog post",
    },
    {id:3,
    author: "Jane Smith",
    comment: "This is my third blog post",
    }
]

// middleware for serving static files
app.use(express.static(path.join(__dirname, 'public'))); // serving static files from the 'public' directory

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

let password =800;
app.use('/',(req, res, next) => {
    if(password === 800) {
        next(); // proceed to the next middleware or route handler
    }else{
        res.send("Sorry nhi ho paega")
    }
})

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
  res.send('Hello from root route!');
})

//CRUD-----------

//create
//form
app.get('/blogs/new', (req, res) => {
    res.render('blogs/new'); // rendering the 'new' view for creating a new blog
})


//read
app.get('/blogs', (req, res) => {
    res.render('blogs/index', { blogs }); // rendering the 'blogs' view and passing the blogs data
})
app.post('/blogs', (req, res) => {
    let { author, comment } = req.body; // extracting author and comment from the request body
    blogs.push({ id: blogs.length + 1, author, comment }) // adding a new blog to the blogs array
    // console.log("req.body:",req.body); // extracting author and comment from the request
    // res.send("Blog created/added successfully"); // sending the received data back as a response
    res.redirect('/blogs') // redirecting to the blogs page after adding a new blog

})

//update


//delete


app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
})