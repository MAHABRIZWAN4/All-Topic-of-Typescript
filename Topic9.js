"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// LOOPS 
//Forloop => 1) Starting point 
//   2) Ending point
//   3) What we take steps to move starting point to ending point.
// forloop jub use hota jub hamein ending point pata ho....
//Example 1
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
//Example 2
for (let i = 10; i >= 0; i--) {
    console.log(i);
}
//Example 3 => Making table with using loop.
for (let i = 1; i <= 10; i++) {
    let number = 12;
    let first = number * i;
    console.log(number + " " + "*" + " " + i + " " + "=" + " " + first);
}
//Example 4 => loop with array
let fruit2 = ["Banana", "Apple", "Peach", "Orange", "Watermelon", "Mango"];
for (let a = 0; a < 6; a++) {
    console.log(fruit2[a]);
}
// Example 5 
let fruit4 = ["Banana", "Apple", "Peach", "Orange", "Watermelon", "Mango"];
fruit4.push("Blueberry", "Raspberry", "Blackberry", "Kiwi", "Pomegranate", "Papaya", "Plum", "Avocado");
console.log(fruit4);
for (let a = 0; a < fruit4.length; a++) {
    console.log(fruit4[a]);
}
//Example 6
//While loop
let number8 = 5;
while (number8 <= 15) {
    console.log(number8);
    number8 += 3;
}
//Example 7
let number9 = 15;
while (number9 >= 5) {
    console.log(number9);
    number9--;
}
// for of loop
// Example 8
let name2 = ["Misbah", "Alishba", "Amna", "Rashida", "Muniza"];
for (let name4 of name2) {
    console.log(name4);
}
// Example 9
let name6 = ["Misbah", "Ayesha", "Amna", "Rashida", "Dua"];
for (let name5 of name6) {
    console.log("AssalamuAlaikum! " + " " + name5 + " " + "Good Morning");
}
// Enums
// Example 10
var Diection1;
(function (Diection1) {
    Diection1[Diection1["North"] = 0] = "North";
    Diection1[Diection1["South"] = 1] = "South";
    Diection1[Diection1["East"] = 2] = "East";
    Diection1[Diection1["West"] = 3] = "West";
})(Diection1 || (Diection1 = {}));
console.log(Diection1.East);
// Example 11
var Diection2;
(function (Diection2) {
    Diection2["North"] = "North";
    Diection2["South"] = "South";
    Diection2["East"] = "South";
    Diection2["West"] = "West";
})(Diection2 || (Diection2 = {}));
console.log(Diection2.East);
var signals;
(function (signals) {
    signals["Red"] = "Red";
    signals["Green"] = "Green";
    signals["Yellow"] = "Yellow";
})(signals || (signals = {}));
console.log(signals.Green);
const student_Data = [["Ayesha Rizwan", "4th", 9, "English"]];
console.log(student_Data);
console.log(student_Data[0]);
function DisplayPerosn_Info(persons) {
    let [name, age, NIC] = persons;
    console.log(`Name: ${name}, Age: ${age}, Do You Have NIC: ${NIC ? "Yes" : "No"}`);
}
let person3 = ["Ali Asghar", 16, false];
let person4 = ["Aman", 23, true];
DisplayPerosn_Info(person3);
DisplayPerosn_Info(person4);
function tuples(personInfo) {
    let [name, email, number] = personInfo;
    console.log(`My name is ${name},My email is ${email} and my ID number is ${number}`);
}
let person1 = ["Mahab", "mahab@mail.com", 3145];
let person2 = ["Misbah", "misbah@mail.com", 31235];
tuples(person1);
tuples(person2);
