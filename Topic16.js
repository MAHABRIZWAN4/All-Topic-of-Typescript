"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let ball = {
    Diameter: 23
};
let sphere = {
    Diameter: 24
};
console.log(ball);
console.log(sphere);
ball = sphere; // OK 
sphere = ball; // OK
let ball1 = {
    Diameter: 23
};
let sphere1 = {
    Diameter: 24,
    length: 22
};
console.log(ball1);
console.log(sphere1);
ball1 = sphere1; // OK 
let person = {
    name: "Amna",
    id: 34
};
person = {
    name: "Ayesha", //OK
    id: 33
};
let restaurant = {
    Pizza: "Rs:1000",
    Burger: "RS:500",
    Tikka: "RS:300",
    Biryani: "Rs:200",
    Pasta: "RS:300"
};
restaurant = {
    Tikka: "RS:300",
    Biryani: "Rs:200",
    BeefPulao: "RS:300"
};
console.log(restaurant.Tikka);
