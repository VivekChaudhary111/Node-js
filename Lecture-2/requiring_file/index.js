const sam = "web"

function vohra(){
    console.log("I am Vohra function");
}

let mav ={
    a: "woof woof"
}

// module.exports = {} // by default it is an empty object

// module.exports = {sammy : sam, vohraaa: vohra, maverick: mav}
// module.exports = {sam : sam, vohra: vohra, mav: mav}
module.exports = {sam, vohra, mav} // module.exports = {sammy, vohraaa, maverick} // this is also valid when we want keys = values of object
