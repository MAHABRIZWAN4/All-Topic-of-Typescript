"use strict";
// Rest Parameter
// EXAMPLE 1
Object.defineProperty(exports, "__esModule", { value: true });
function uploadFile(...file) {
    console.log("My File:" + " " + file);
}
uploadFile("FILE1", "FILE2", "FILE3", "FILE4", "FILE5");
// EXAMPLE 2
function foodItems(...food) {
    console.log("My Favourite food is " + food);
}
foodItems("Burger", "Chips", "Pizza", "Tikka", "Spaghetti", "Macroni", "Pasta", "Popcorn");
// Optional Parameter
function Personal_Info(Name, Father_Name, Course, NIC_No) {
    console.log(`${Name},${Father_Name},${Course},${NIC_No}`);
}
Personal_Info("Amna", "Muhammad Rafiq", "Artificial Intelligence");
