const user = {
    userName :'Riya',
    userAge : 30,

    userMessage : function(){
        console.log(`welcome ${this.userName}`)        //this used for current object value
        console.log(this);
        
    }
}

//  console.log(user.userMessage())
//  user.userName = "rahi"
//  console.log(user.userMessage());
 
 //console.log(this);      // empty because not any object in global



//  function employee (){
//    let  empName = "rajni"
//     console.log(this.empName)       // undefined because this access the value only object
//  }
//  employee()

//                 or

const employee = function(){
   
        let  empName = "rajni"
         console.log(this.empName)       // undefined because this access the value only from object
      }
      employee()





 //+++++++++++++++Arrow Func ++++++++++++++
 

//  const addTwo = (num1, num2) =>{
//      return num1 + num2;                // explicit return
//  }
// console.log(addTwo(3,8))




// const addTwo = (num1, num2) => num1+num2           //implicit return
// console.log(addTwo(3,8))




const addTwo = (num1, num2) => (num1+num2)           //when use curly braces then use return must
console.log(addTwo(3,8))


const addTw = (num1, num2) => ({userName : "kiran"})           //when we return an object then use parenthses because curly braces not return obj
console.log(addTw(3,8))