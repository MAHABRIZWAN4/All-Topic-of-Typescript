"use strict";
// => If, Else and Else If Statements:
Object.defineProperty(exports, "__esModule", { value: true });
// if => Use if to specify a block of code to be executed, if a specified condition is true.
// else => Use else to specify a block of code to be executed, if the same condition is false.
// else if => Use else if to specify a new condition to test, if the first condition is false.
// MAKING MARKSHEET WITH WITH USING If, Else and Else If Statements.
let percentage = 79;
if (percentage <= 100 && percentage >= 80) {
    console.log("WELDONE! You got A+ Grade.");
}
else if (percentage <= 79.99 && percentage >= 70) {
    console.log("VERY GOOD! You got A grade.");
}
else if (percentage <= 69.99 && percentage >= 60) {
    console.log("GOOD! You got B grade.");
}
else if (percentage <= 59.99 && percentage >= 50) {
    console.log("FAIR! You got C grade.");
}
else if (percentage <= 49.99 && percentage >= 40) {
    console.log("AVERAGE! You got D grade.");
}
else
    (console.log("FAIL! But never loose Confidence Try again."));
let country = "Pakistan";
if (country === "Pakistan") {
    console.log("You are Correct!");
}
else if (country === "pakistan") {
    console.log("You are not correct!");
}
else {
    console.log("Wrong");
}
let food = "Burger";
if (food === "Burger") {
    console.log("OHH! So tasty Burger is my favourite food.");
}
else if (food === "Biryani") {
    console.log("Yummy! Biryani is my favorite dinner because it is very tasty.");
}
else
    (console.log("If it's served for dinner today, I'll still eat it."));
