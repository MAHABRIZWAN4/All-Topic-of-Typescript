// UNION DATATYPE
// Example 1
let fruit3:string | number = "mango";
console.log(fruit3);

// Example 2
let Union:string | number 
Union = "Hello" // THIS OS VALID 
Union = 43      // THIS IS ALSO VALID

// Type Intersection 

type Student1 = {student1_name:string,Class:string,Subject:[string,string,string,string]}
type Student2 = {student2_name:string,Class:string,Subject:[string,string,string,string]}
type Student3 = {student3_name:string,Class:string,Subject:[string,string,string,string]}
type All_students = Student1 | Student2 | Student3 

let StudentInformation :All_students[] = [{
      student1_name: "Mariam",
      Class:"B.Com part 2",
      Subject:["Math","English","Urdu","Economic"]

},{
    student2_name: "Misbah",
    Class:"B.Sc part 1",
    Subject:["Math","English","Urdu","Phisics"]

},{
    student1_name: "Hina",
    Class:"10th",
    Subject:["Math","English","Urdu","Chemistry"]

}]

// Type Literal => Isy ham type literals kehty hy jis me ham variable me specific values dy dety hy
let trafficLights1:string ="green";
let trafficLights: "red" | "green" | "yellow" 
trafficLights = "red"
trafficLights = "green"
trafficLights = "yellow"
console.log(trafficLights);

let Shirt:"Large"|"Medium"|"Small"
Shirt = "Large"
console.log(Shirt);



