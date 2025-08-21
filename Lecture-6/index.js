const express = require('express');
const methodOverride = require('method-override');
const { v4: uuidv4 } = require('uuid');
const app = express();
const path = require('path');

let blogs = [
    {id:uuidv4(),
    author: "Vivek Chaudhary",
    comment: "M hun vivek chaudhary",
    // content: "This is my first blog post",
    },
    {id:uuidv4(),
    author: "John Doe",
    comment: "level sabke niklenege",
    // content: "This is my second blog post",
    },
    {id:uuidv4(),
    author: "Jane Smith",
    comment: "This is my third blog post",
    }
]

// middleware for serving static files
app.use(express.static(path.join(__dirname, 'public'))); // serving static files from the 'public' directory

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(methodOverride('_method')) // middleware for patch/put/delete requests 

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
// read particular blog
app.get('/blogs/:idd', (req, res) => {
    console.log(req.params);
    // res.send(req.params);
    let{idd} =  req.params;
    // let foundBlog = blogs.find((blog) => blog.id == parseInt(idd)); // finding the blog with the given id
    let foundBlog = blogs.find((blog) => blog.id == idd); // finding the blog with the given id
    res.render('blogs/show', {foundBlog}); // rendering the 'show' view and passing the found blog data
})
//update

app.get('/blogs/:idd/edit', (req, res) => {
    let {idd} = req.params; 
    let foundBlog = blogs.find((blog) => blog.id == idd);
    res.render('blogs/edit', {foundBlog}); 
})

app.patch('/blogs/:iddd', (req, res) => {
    let {iddd} = req.params;
    let foundBlog = blogs.find((blog) => blog.id == iddd); 
    let {author, comment} = req.body; // extracting author and comment from the request body
    foundBlog.author = author; // updating the author of the found blog
    foundBlog.comment = comment; // updating the comment of the found blog
    res.redirect('/blogs'); // redirecting to the blogs page after updating the blog   
})


//delete
app.delete('/blogs/:iddd', (req, res) => {
    let {iddd} = req.params;
    let newArray = blogs.filter((blog) => blog.id != iddd)
    blogs = newArray; 
    res.redirect('/blogs');
})


app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
})