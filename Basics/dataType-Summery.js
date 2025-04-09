
//Primitive DataType


// 7 types:-  string, boolean, null, undefined, bigInt, Symbol, number

let name ="Maya";
const id = 301;
const height = 5.6;
const loggedIn = true;
const value = null;
console.log(typeof value)
let loggedOut;   //undefined
let emp_id = Symbol('123')
let stu_id = Symbol('123')

console.log(emp_id == stu_id);
 const anyNumber = 76356548364935643057045n
console.log(typeof anyNumber);


//Non-Premitive DataType
 //Array , function, object

 let employee = ["empName", "empId", "empAge"]

 let MyObj ={
    name : "Krishna",
    age : 30,
    place : "jal"
 }

 const MyFunction = function(){
    console.log("heelo world")
 }

 console.log(typeof MyFunction);
 