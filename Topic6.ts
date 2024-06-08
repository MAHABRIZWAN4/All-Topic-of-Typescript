// OBJECT
// Example 1

let Introduction = ({
    name:"Mahab Muhammad Rizwan",
    Profession:"Teacher",
    Passion:"My passion is to become a web developer",
    course:"I enroll in the course of governor sindh IT initiative"
})
console.log(Introduction);
console.log(Introduction.name);
console.log(Introduction.Profession);
console.log(Introduction.Passion);
console.log(Introduction.course);

// Example 2
let carInfo = ([{
    brand:"TOYOTA",
    Model_Year:"2024",
    variant: "1800cc",
    speed:() => {
        return"Max speed is 200";
    }
},{
    brand:"Hyundai i20",
    Model_Year: 2024,
    Variant: "Highline Plus"
},{
    brand:"Honda City",
    Model_Year: 2024,
    Variant: "V CVT"
},{
    brand:"BMW 3-Series",
    Model_Year: 2024,
    Variant: "330i M Sport"
},{
    brand:"Toyota Fortuner",
    Model_Year: 2024,
    Variant: "Legender"
},{
    brand:"Audi A8",
    Model_Year: 2024,
    Variant: "L 55 TFSI quattro",
}])
console.log(carInfo);


console.log((carInfo[0].speed as Function)());

console.log(carInfo[2]);

console.log(carInfo[3].Model_Year);


//(carInfo[0].speed as Function) is syntax ka naam hai "type assertion". Hum yahaan speed property ko explicitly Function type ke roop mein dekhane ke liye use kar rahe hain. Phir hum () ke andar function ko call kar rahe hain.

// Nested Object => Object ke under object
type bill = {Customer:string,Buy:string,products:{product1:string,price1:number,product2:string,price2:number,product3:string,price3:number,product4:string,price4:number,product5:string,price5:number}}
let shopping:bill = {
       Customer: "Mahab",
       Buy:"Grocery",
       products:{
        product1:"Bread",
        price1:100,
        product2:"Egg",
        price2:200,
        product3:"Rice",
        price3:200,
        product4:"Pasta",
        price4:130,
        product5:"Chips",
        price5:500,
       }
} 

console.log(shopping);
console.log(shopping.products.product5);
