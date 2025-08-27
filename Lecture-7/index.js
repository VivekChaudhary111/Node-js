const express = require('express');
const app = express();
// const path = require('path');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://vivek2020singh2020:pLiJDOMzhCUWADkh@cluster0.sazdu4p.mongodb.net/')
.then(() => {
    console.log("Database connected successfully!!!");
})
.catch(err => {
    console.log("OH NO MONGO CONNECTION ERROR!!!!");
    console.log(err);
});

app.get('/', (req, res) => {
  res.send('Hello from root route!');
})

const PORT = 8080;
app.listen(PORT, () => {
  console.log('Server is running on port 8080');
})
