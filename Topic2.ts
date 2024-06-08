// Operators
// ARITHMETIC OPERATOR  

//ADDITION
let sum1:number = 2;
let sum2:number = 3;
console.log(sum1 + sum2);

//ADDITION WITH STRING
let add1:string = "Mahab";
let add2:string = "Rizwan";
console.log(add1 + "\t" + add2);

//SUBTRACTION
let sub1:number = 56;
let sub2:number = 44;
console.log(sub2 - sub1);

//MULTIPLICATION
let multiplication1:number = 10;
let multiplication2:number = 10;
console.log(multiplication1 * multiplication2);

//DIVISION
let div1:number = 50;
let div2:number = 5;
console.log(div1 / div2);

//EXPONENTIATION
let Exponentiation1:number = 3;
let Exponentiation2:number = 2;
console.log(Exponentiation1 ** Exponentiation2);

//MODULUS
let modulus1:number = 5;
let modulus2:number = 3;
console.log(modulus1 % modulus2);

// ASSIGNMENT OPERATOR => Assignment operator are used to assigning values to variables. 
let num1:number = 1;
console.log(num1);
num1 += 45;
console.log(num1);
num1 -= 2;
console.log(num1);

//COMPARISION OPERATOR => Comparison operator are used to compare values of variables.

// EQUALS TO:
let num2:number = 3;
let num3:number = 4;
if (num2 == num3) {
    console.log("You are correct!");
}
else{console.log("Not Correct");
}

let num4:string = "Mahab";
let num5:string = "mahab";
if (num4 === num5) {
    console.log("You are Correct!");
}
else{console.log("You are not correct!");
}

// NOT EQUALS TO
let num6:number = 4;
let num7:number = 3;
if (num6 != num7) {
    console.log("You are correct!");
    
} else {
    console.log("You are not corecrt!");
    
}

// GREATER THAN AND LESS THAN
let num8:number = 45;
let num9:number = 56;
if (num8 < num9) {
    console.log("You are corret!");
} else {
    console.log("You are not correct!");
}

if (num8 > num9) {
    console.log("You are correct!");
    
} else {
    console.log("You are not correct!");
}

// LESS THAN EQUALS TO OR LESS THAN EQUALS TO
let  num10:number = 4;
let num11:number = 5;
if (num11 <= num10) {
    console.log("You are correct!");
} else {
    console.log("You are not correct!");
}

if (num11 >= num10) {
    console.log("You are correct!");
} else {
    console.log("You are not correct!");
}

// LOGICAL OPERATOR =>Logical operator are used to combine multiple conditions in one.

// && OPERATOR
let num12:number = 34;
let num13:number = 43;
if (num12 == 34 && num13 >= num12) {
    console.log("You are correct!");
} else {
    console.log("You are not correct");
}
// || OPERATOR
if (num12 === num13 || num12 <= num13) {
    console.log("You are correct!");
} else {
    console.log("You are not correct!");
}

//NOT OPERATOR
if (!(num12 === 34)) {
    console.log("You are correct!");
} else {
    console.log("You are not correct!");
}

