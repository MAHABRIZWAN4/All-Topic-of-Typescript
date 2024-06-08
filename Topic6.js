"use strict";
// OBJECT
// Example 1
Object.defineProperty(exports, "__esModule", { value: true });
let Introduction = ({
    name: "Mahab Muhammad Rizwan",
    Profession: "Teacher",
    Passion: "My passion is to become a web developer",
    course: "I enroll in the course of governor sindh IT initiative"
});
console.log(Introduction);
console.log(Introduction.name);
console.log(Introduction.Profession);
console.log(Introduction.Passion);
console.log(Introduction.course);
// Example 2
let carInfo = ([{
        brand: "TOYOTA",
        Model_Year: "2024",
        variant: "1800cc",
        speed: () => {
            return "Max speed is 200";
        }
    }, {
        brand: "Hyundai i20",
        Model_Year: 2024,
        Variant: "Highline Plus"
    }, {
        brand: "Honda City",
        Model_Year: 2024,
        Variant: "V CVT"
    }, {
        brand: "BMW 3-Series",
        Model_Year: 2024,
        Variant: "330i M Sport"
    }, {
        brand: "Toyota Fortuner",
        Model_Year: 2024,
        Variant: "Legender"
    }, {
        brand: "Audi A8",
        Model_Year: 2024,
        Variant: "L 55 TFSI quattro",
    }]);
console.log(carInfo);
console.log(carInfo[0].speed());
console.log(carInfo[2]);
console.log(carInfo[3].Model_Year);
let shopping = {
    Customer: "Mahab",
    Buy: "Grocery",
    products: {
        product1: "Bread",
        price1: 100,
        product2: "Egg",
        price2: 200,
        product3: "Rice",
        price3: 200,
        product4: "Pasta",
        price4: 130,
        product5: "Chips",
        price5: 500,
    }
};
console.log(shopping);
console.log(shopping.products.product5);
