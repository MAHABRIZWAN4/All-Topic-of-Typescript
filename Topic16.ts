// Structure Typing
// Structure Of Object
// Example 1 
interface Ball{
    Diameter:number
}

interface Sphere{
    Diameter:number
}

let ball:Ball = {
    Diameter:23
}
let sphere:Sphere = {
    Diameter:24
}


console.log(ball);
console.log(sphere);
ball = sphere   // OK 
sphere = ball   // OK

// Example 2
interface Ball1{
    Diameter:number
}

interface Sphere1{
    Diameter:number,
    length:number
}

let ball1:Ball1 = {
    Diameter:23
}
let sphere1:Sphere1 = {
    Diameter:24,
    length:22
}


console.log(ball1);
console.log(sphere1);
ball1 = sphere1   // OK 
// sphere1 = ball1   // NoT OK

// REASSIGN OBJECT
interface Person {
    name:string,
    id:number
}

let person:Person = {
    name:"Amna",
    id:34
}

person = {
     name:"Ayesha",        //OK
     id:33
}
/*person = {
    fullname:"Ayesha",        //Error Because Object literal may only specify known properties,
    id:33
}
*/

// INDEX SIGNATURE  // USE INDEX SIGNATURE WHEN WE DONT KNOW PROPERTIES...
interface Restaurant {
    [x:string]:any
}
let restaurant:Restaurant = {
    Pizza:"Rs:1000",
    Burger:"RS:500",
    Tikka:"RS:300",
    Biryani:"Rs:200",
    Pasta:"RS:300"
}
restaurant = {
    Tikka:"RS:300",
    Biryani:"Rs:200",
    BeefPulao:"RS:300"
}

console.log(restaurant.Tikka)







