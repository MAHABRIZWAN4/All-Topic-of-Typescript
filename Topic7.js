"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let student1 = "Rashida";
let student2 = "Dua";
console.log(student1);
console.log(student2);
let food3 = ["Paratha", "Omelette", "Cereal with milk", "Toast with butter"];
let food4 = ["Biryani", "Mutton karahi", "Burger", "Chinese Pulao"];
console.log(food3);
console.log(food4);
let studentList = ([{
        name: "Misbah",
        Roll_No: 22,
        Class: "10th"
    }, {
        name: "Dua",
        Roll_No: 2,
        class: "5th"
    }, {
        name: "Ayesha",
        Roll_No: 7,
        class: "4th"
    }, {
        name: "Mehak",
        Roll_No: 3,
        class: "12th"
    }, {
        name: "Alishba",
        Roll_No: 8,
        Class: () => "10th"
    }]);
console.log(studentList);
let mycar = {
    model: "2024",
    maxspeed: () => "500bc"
};
console.log(mycar.maxspeed());
