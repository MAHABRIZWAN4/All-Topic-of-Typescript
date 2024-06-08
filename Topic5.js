"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ARRAY
// Example 1
let name3 = ["Mahab", "Amna", "Misbah", "Dua", "Ayesha", "Farzana"];
console.log(name3);
// Example 2 => push()
name3.pop();
console.log(name3);
// Example 3 => pop()
name3.push("Razia");
console.log(name3);
// Example 4 => shift()
name3.shift();
console.log(name3);
// Example 5 => unshift()
name3.unshift("Rashida");
console.log(name3);
// Example 6 => splice()
//To Remove
let fruit = ["Mango", "Banana", "Pineapple", "Apple"];
fruit.splice(0, 2);
console.log(fruit);
//To Replace
let fruit1 = ["Mango", "Banana", "Pineapple", "Apple"];
fruit1.splice(1, 3, "Watermelon", "Orange");
console.log(fruit1);
// Example 7
let food2 = ["Zinger Burger", "Biryani", "Pizza", "Pancakes", "Sandwich"];
food2.splice(1, 3, "Chicken Tikka", "Chicken Roll");
console.log(food2);
//Example 8 => slice()
let Chinese_Dish = ["Hot and Sour Soup", "Chow Mein", "Egg Fried Rice", "Spring Rolls"];
let sliced_array = Chinese_Dish.slice(0, 2);
console.log(sliced_array);
