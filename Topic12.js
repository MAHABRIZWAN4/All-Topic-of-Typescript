"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Narrowing
// EXAMPLE 1
let age;
age = 20.44838467335;
if (typeof age === "number") {
    console.log(age.toFixed(0));
}
else {
    console.log("This is a string");
}
// EXAMPLE 2
let age1;
age1 = 20.44838467335;
if (typeof age1 === "number") {
    console.log(age1.toPrecision(7));
}
else {
    console.log("This is a string");
}
// EXAMPLE 2
let age2;
age2 = "twenty";
if (typeof age2 === "number") {
    console.log("This is a number.");
}
else {
    console.log(age2.toUpperCase());
}
// EXAMPLE 3
let age3;
age3 = "twenty";
if (typeof age3 === "number") {
    console.log("This is a number.");
}
else {
    console.log(age3[0].toUpperCase() + age3.slice(1).toLowerCase());
}
