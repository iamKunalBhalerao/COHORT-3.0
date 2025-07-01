"use strict";
// Problem 1 - Hello world
/*
function hello() {
    console.log("Hello World")
}

hello()
*/
// Problem 2 - Sum function
/*
function sum(a: number, b:number): number {
    return a + b;
}

let ans = sum(10, 20)
console.log(ans)
*/
// Problem 3 - Return true or false based on if a user is 18+
function isLeagle(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
let ans = isLeagle(22);
console.log(ans);
// function isLeagle(age: number){
//     if (age >= 18) {
//         return true
//     } else {
//         return false
//     }
// }
// const ans = isLeagle(22)
// console.log(ans)
