"use strict";
/* FUNCTION => Functions are the primary means of passing data around in TypeScript.
TypeScript allows you to specify the types of both the input and output values
of functions.*/
Object.defineProperty(exports, "__esModule", { value: true });
//
function intro(name, course) {
    console.log(`My name is ${name.toUpperCase()} RIZWAN.I am enroll in the ${course}.`);
}
intro("Mahab", "Governor House IT Initiative");
// RETURN:EXAMPLE1
function myIntro(name, course) {
    return `My name is ${name.toUpperCase()} RIZWAN.I am enroll in the ${course}.`;
}
let information = console.log(myIntro("Mahab", "Governor House IT Initiative"));
// EXAMPLE 2
function num(num1, num2, num3) {
    return num1 + num2 + num3;
}
let sum = num(2, 3, 4);
console.log(sum);
//EXAMPLE 3 => Calculator
function calculator(x, y, operation) {
    if (operation === "addition") {
        console.log(x + y);
    }
    else if (operation === "subtraction") {
        console.log(x - y);
    }
    else if (operation === "multiplication") {
        console.log(x * y);
    }
    else if (operation === "division") {
        console.log(x / y);
    }
    else if (operation === "exponentiation") {
        console.log(x ** y);
    }
    else if (operation === "modulus") {
        console.log(x % y);
    }
}
calculator(2, 4, "addition");
calculator(2, 4, "subtraction");
calculator(2, 4, "multiplication");
calculator(2, 4, "division");
calculator(2, 4, "exponentiation");
calculator(2, 4, "modulus");
//EXAMPLE 4 => Calculator with using return function
function calculator1(x, y, operation) {
    if (operation === "addition") {
        return x + y;
    }
    else if (operation === "subtraction") {
        return x - y;
    }
    else if (operation === "multiplication") {
        return x * y;
    }
    else if (operation === "division") {
        return x / y;
    }
    else if (operation === "exponentiation") {
        return x ** y;
    }
    else if (operation === "modulus") {
        return x % y;
    }
}
console.log(calculator1(2, 4, "addition"));
console.log(calculator1(2, 4, "subtraction"));
console.log(calculator1(2, 4, "multiplication"));
console.log(calculator1(2, 4, "division"));
console.log(calculator1(2, 4, "exponentiation"));
console.log(calculator1(2, 4, "modulus"));
// ARROW FUNCTION
// Example 1
const name1 = () => {
    console.log("Mahab Rizwan");
};
name1();
//Example 2
const number = (x, y) => {
    console.log(x + y);
};
number(2, 3);
//Example 3
let food1 = (food) => {
    return `The ${food} is a delightful fusion of spicy flavors, encasing crispy fried chicken between tender buns. Its tangy sauce and crunchy lettuce make it a favorite among burger enthusiasts. One bite, and you'll crave more!`;
};
let favorite_food = food1("Zinger Burger");
console.log(favorite_food);
//BLOCK SCOPE AND GLOBAL SCOPE FUNCTION
// globalscope wo jinhein kahi kahi se bhi access ker sakte hein   e.g: Madam
// localscope wo jo kahi na kahi aa ker ru jate hein
// {} jahan bi hon ye variables ke scope wahan per ruk jate hein
// jis point per restriction de di jayyein wo block scope hote hein e.g: Teacher
// in ki accessibility {} ke through pata cahle gi or {} function me hote hein,condition me hote hein or object me hote hein
// blockscope ka jo usage he wo {} khatam hone tuk hi hein.ye {} ke under hi accessible hein.
let Coordinator = "Sobia";
function Teacher1() {
    let Teacher = "Mahab";
    console.log(Teacher);
    console.log(Coordinator);
}
Teacher1();
const Teacher2 = () => {
    let Teacher1 = "Amna";
    console.log(Teacher1);
    console.log(Coordinator);
};
Teacher2();
let Army = "Sir Ali Asghar";
function policeStation1() {
    let poice1 = "Sir Ahmed";
    console.log(poice1);
    console.log(Army);
}
policeStation1();
const poiceStation2 = () => {
    let poice2 = "Sir Aman";
    console.log(poice2);
    console.log(Army);
};
poiceStation2();
