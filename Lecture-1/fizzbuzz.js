console.log(process.argv);
let neww = process.argv.pop();
// for(let i = 1; i <= neww[0]; i++) {
//     if(i % 3 === 0 && i % 5 === 0) {
//         console.log("fizzbuzz");
//     } else if(i % 3 === 0) {
//         console.log("fizz");
//     } else if(i % 5 === 0) {
//         console.log("buzz");
//     } else {
//         console.log(i);
//     }
// }
// we can't use modulus operator here because it is not optimized since it divides until, we get a smaller number than it, so we will use a counter approach
let count1 = 1;
let count2 = 1;
for(let i = 1; i <= neww; i++) {
    let str = "";
    if(count1 === 3){
        str += "fizz";
        count1 = 0;
    }
    if(count2 === 5){
        str += "buzz";
        count2 = 0;
    }if(str === "") {
        str += i;
    }
    console.log(str);
    count1++;
    count2++;
}
