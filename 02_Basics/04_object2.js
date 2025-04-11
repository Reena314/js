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


const user = [
    {
        id : 301,
        uName : 'rahul'
    },
    {
        id : 301,
        uName : 'rakul'
    },
    {
        id : 301,
        uName : 'rhul'
    }
]
 
  console.log(user[2].uName);

  console.log(emp);

  const checkKeys = Object.keys(emp);
  
  console.log(checkKeys);
  console.log(Object.values(emp));
  
  console.log( emp.hasOwnProperty('login'));


  const destruct_obj = {
          id : 123,
          name :'asd'
  }
   destruct_obj.id

   console.log(destruct_obj.id);
   const{name} = destruct_obj
  console.log(name);
  const {name:destruct} = destruct_obj;
  console.log(destruct);
  
         //react code
  const nav =({company})=>{
//code

  }
nav(company = "riya")



    //  json

    [
        {
            "name" : "ghhgjj",
            "loc"  : "ghgdw"

        }
    ]
  