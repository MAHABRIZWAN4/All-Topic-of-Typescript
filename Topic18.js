"use strict";
// Asynchronous programming
// Asynchronous programming Callback queue me call hota he.
// EXAMPLE 1
/*console.log(1);
console.log(2);
setTimeout(function number(){
    console.log(3);
},2000)
console.log(4);
console.log(5);

//  EXAMPLE 2
let name1:string = "Mahab";
let name2:string = "Rashida";
setTimeout(function name3() {
    console.log(name1);
    
},2000)
console.log(name2);

// EXAMPLE 3
let a = "a";
let b = "b";
setTimeout(function () {
    console.log(a);
},2000)
console.log(b);
a = "c"
*/
Object.defineProperty(exports, "__esModule", { value: true });
console.log(1);
console.log(2);
setTimeout(function () {
    console.log(3);
}, 500);
for (let i = 1; i <= 5; i++) {
    console.log(`inside log ${i}`);
}
