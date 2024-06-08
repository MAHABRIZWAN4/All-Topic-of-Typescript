// Type Alias
//Example 1
type BrilliantStudent = string
type GoodStudent = string
let student1:BrilliantStudent = "Rashida";
let student2:GoodStudent = "Dua";
console.log(student1);
console.log(student2);

//Type Alias in Array
type BreakFast = string
type Dinner = string
let food3:BreakFast[] = ["Paratha","Omelette","Cereal with milk","Toast with butter"]
let food4:Dinner[] = ["Biryani","Mutton karahi","Burger","Chinese Pulao"]
console.log(food3);
console.log(food4);

//Type Alias in Object
// Example 2
type StudentList = [{name:string;Roll_No:number;Class:string},{ name: string; Roll_No: number; class: string; }, { name: string; Roll_No: number; class: string; }, { name: string; Roll_No: number; class: string; }, { name: string; Roll_No: number;Class:() => string; }]
let studentList:StudentList= ([{
    name:"Misbah",
    Roll_No:22,
    Class:"10th"
},{
    name:"Dua",
    Roll_No:2,
    class:"5th"
},{
    name:"Ayesha",
    Roll_No:7,
    class:"4th"
},{
    name:"Mehak",
    Roll_No:3,
    class:"12th"
},{
    name:"Alishba",
    Roll_No:8,
    Class:() => "10th"
}])
console.log(studentList);

// Example 3
type MyCar ={model:string;maxspeed:() => string}
let mycar:MyCar={
      model:"2024",
      maxspeed: () => "500bc"
}
console.log(mycar.maxspeed());







