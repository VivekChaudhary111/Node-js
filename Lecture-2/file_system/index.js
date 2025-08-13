// const path = require('path');
// console.log(path.join('vivek', 'kumar', 'sharma'));

const fs = require('fs');
const { fileURLToPath } = require('url');

// CRUD => create, read, update, delete

// create a file
// let data = "This is for vivek.txt: nammaste ji ke haal chaal copy to all"
// fs.writeFile('vivek.txt', data, {
//     encoding: 'utf-8', // html encoding
//     flag: 'w' // for writing, 'a' for appending, 'r' for reading

// }, (err)=>{
//     if(err){throw err}
//     console.log("File written successfully");
// })

// read a file
// fs.readFile('vivek.txt', {
//     encoding: 'utf-8', // specify encoding to get string output
//     flag: 'r' // for reading, 'w' for writing, 'a' for appending
// }, (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log(data); // buffer data
//     // console.log(data.toString()); // convert buffer to string
// });

// update a file
// fs.appendFile('vivek.txt', '  data add kar rha hun', (err)=>{
//     if(err){throw err}
//     console.log("File updated successfully");
// })

// delete a file
// fs.unlink('vivek.txt', (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log("File deleted successfully");
// })