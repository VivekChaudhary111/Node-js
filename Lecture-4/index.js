const express = require('express'); // importing the express module
const path = require('path'); // module to handle file paths
const app = express();
const PORT = 8085;

app.set('view engine', 'ejs'); // setting the view engine to EJS for rendering templates
app.set('views', path.join(__dirname, 'views')); // setting the directory for views
app.get('/', (req, res) => {
    res.send('Welcome to the new root route!') // sending a response when the root URL is accessed
})

app.get('/home', (req, res) => {
    res.render('index'); // rendering the 'home' view when the '/home' route
});
// app.get('*', (req, res) => {
//     res.send('Invalid Path') // sending a response for any undefined paths
// })
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
}) // starting the server and listening on the specified port