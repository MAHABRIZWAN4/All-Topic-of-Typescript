"use strict";
// Operators
// ARITHMETIC OPERATOR  
Object.defineProperty(exports, "__esModule", { value: true });
//ADDITION
let sum1 = 2;
let sum2 = 3;
console.log(sum1 + sum2);
//ADDITION WITH STRING
let add1 = "Mahab";
let add2 = "Rizwan";
console.log(add1 + "\t" + add2);
//SUBTRACTION
let sub1 = 56;
let sub2 = 44;
console.log(sub2 - sub1);
//MULTIPLICATION
let multiplication1 = 10;
let multiplication2 = 10;
console.log(multiplication1 * multiplication2);
//DIVISION
let div1 = 50;
let div2 = 5;
console.log(div1 / div2);
//EXPONENTIATION
let Exponentiation1 = 3;
let Exponentiation2 = 2;
console.log(Exponentiation1 ** Exponentiation2);
//MODULUS
let modulus1 = 5;
let modulus2 = 3;
console.log(modulus1 % modulus2);
// ASSIGNMENT OPERATOR => Assignment operator are used to assigning values to variables. 
let num1 = 1;
console.log(num1);
num1 += 45;
console.log(num1);
num1 -= 2;
console.log(num1);
//COMPARISION OPERATOR => Comparison operator are used to compare values of variables.
// EQUALS TO:
let num2 = 3;
let num3 = 4;
if (num2 == num3) {
    console.log("You are correct!");
}
else {
    console.log("Not Correct");
}
let num4 = "Mahab";
let num5 = "mahab";
if (num4 === num5) {
    console.log("You are Correct!");
}
else {
    console.log("You are not correct!");
}
// NOT EQUALS TO
let num6 = 4;
let num7 = 3;
if (num6 != num7) {
    console.log("You are correct!");
}
else {
    console.log("You are not corecrt!");
}
// GREATER THAN AND LESS THAN
let num8 = 45;
let num9 = 56;
if (num8 < num9) {
    console.log("You are corret!");
}
else {
    console.log("You are not correct!");
}
if (num8 > num9) {
    console.log("You are correct!");
}
else {
    console.log("You are not correct!");
}
// LESS THAN EQUALS TO OR LESS THAN EQUALS TO
let num10 = 4;
let num11 = 5;
if (num11 <= num10) {
    console.log("You are correct!");
}
else {
    console.log("You are not correct!");
}
if (num11 >= num10) {
    console.log("You are correct!");
}
else {
    console.log("You are not correct!");
}
// LOGICAL OPERATOR =>Logical operator are used to combine multiple conditions in one.
// && OPERATOR
let num12 = 34;
let num13 = 43;
if (num12 == 34 && num13 >= num12) {
    console.log("You are correct!");
}
else {
    console.log("You are not correct");
}
// || OPERATOR
if (num12 === num13 || num12 <= num13) {
    console.log("You are correct!");
}
else {
    console.log("You are not correct!");
}
//NOT OPERATOR
if (!(num12 === 34)) {
    console.log("You are correct!");
}
else {
    console.log("You are not correct!");
}
