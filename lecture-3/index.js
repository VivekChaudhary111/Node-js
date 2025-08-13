const express = require('express');  //fn
const path = require('path'); // module to handle file paths
const app = express(); // creating an instance of express application
const port = 8080; // defining the port number



app.listen(port, () => {
    console.log(`Server connected at port: ${port}`);
    }); // starting the server and listening on the specified port
    
app.get('/', (req, res) => {
    res.send('Welcome to root route Mere Nodemon bhai'); // sending a response when the root URL is accessed
}); // defining a route for the root URL

app.get('/home', (req, res) => {
    res.send('<h1>Ho jaegi Balle Balle</h1>')
});

// to send data using GET method there are two ways

// 1. params
// 2. query parameters

// 1. PARAMS req: 'greet/vivek'
app.get('/greet/:name', (req, res) => {
    console.log(req.params); // logging the parameters sent in the URL
    res.send(`Hi, How are you? ${req.params.name}`); // sending a response with the name from the URL
}); 

// 2. QUERY PARAMS req: 'greet?name=vivek&age=20'
app.get('/about', (req, res) => {
    console.log(req.query); // logging the parameters sent in the URL
    res.send(`Hi, my name is <b>${req.query.name}</b> and I am <b>${req.query.age}</b> years old.`); // sending a response with the name from the URL
}); 

app.get('/app', (req, res) =>{
    res.sendFile(path.join(__dirname, 'index.html')); // sending an HTML file as a response
});
/* This is tedious way to send static files, use express.static instead
app.get('/script.js', (req, res) =>{
    res.sendFile(path.join(__dirname, 'script.js')); // sending a JavaScript file as a response
});
app.get('/style.css', (req, res) =>{
    res.sendFile(path.join(__dirname, 'style.css')); // sending a CSS file as a response
});
*/
// Alternative to above part is to send a folder containing all static files to the browser/client
let publicPath = path.join(__dirname, 'public'); // defining the path to the public directory
app.use(express.static(publicPath)); // serving static files from the 'public' directory
