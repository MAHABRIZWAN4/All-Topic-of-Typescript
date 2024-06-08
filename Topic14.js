"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.number = exports.name = exports.func = void 0;
// modules
// EXAMPLE 1
const func = () => {
    console.log("HELLO WORLD");
};
exports.func = func;
// EXAMPLE 2
const name = (name) => {
    console.log("HELLO" + " " + name);
};
exports.name = name;
// EXAMPLE 3
exports.number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
