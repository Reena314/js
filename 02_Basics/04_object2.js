// const emp = new Object(); //singleton object

// const emp1 ={}

// console.log(emp);

// console.log(emp1);

const emp = {}
 
emp.id = 201;
emp.name ="rashmi";
emp.loc ="phag"
console.log(emp);

const stu ={
    name:"kiran",
    age: 20,
    stuname:{
     fullname :{
        fullname: "kiran mehra"
     } 
    }
}

console.log(stu.stuname.fullname.fullname);


const obj1 = { '01':"a", '02':"b"}
const obj2 = { '03':"a", '04':"b"}

const obj3 ={obj1,obj2}

console.log(obj3);

const obj4 = Object.assign({},obj1, obj2)   
//    or
const obj5 = {...obj1,...obj2}   // mostly used

console.log(obj5);



