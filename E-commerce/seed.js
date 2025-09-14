const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
    {
        name: "IPhone 17 pro max",
        img: "https://assets.thehansindia.com/h-upload/2025/09/09/1583707-iphone-17.webp",
        price: 149900,
        desc: "Just issi week launch hua h"
    },
    {
        name: "IPhone 17 pro",
        img: "https://www.hindustantimes.com/ht-img/img/2025/09/09/550x309/iPhone_17_Pro_1757444713206_1757444713290.jpeg",
        price: 134900,
        desc: "Just issi week launch hua h"
    },
    {
        name: "IPhone 17 air",
        img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202507/iphone-17-air-19315310-16x9_0.jpg?VersionId=6jBL0CbOgGFOHxg_mDmsEjjZrEy6mmYU",
        price: 119900,
        desc: "Just issi week launch hua h"
    },
    {
        name: "IPhone 17",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLnZF1M--t6ZmQgtOmKvRqiThxB_xcktMJKd79uXQhwyyOmsWrIqTw7BwbVnudTMk79Qo&usqp=CAU",
        price: 82900,
        desc: "Just issi week launch hua h"
    }
    
]

async function seedDB(){
    await Product.insertMany(products);
    console.log("Data seeded into DB successfully");
}

module.exports = seedDB;