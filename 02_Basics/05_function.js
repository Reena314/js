function user(){
    console.log("r")
    console.log("i")
    console.log("y")
    console.log("a")
}
user()
//

const MyFunction = function(){
    //console.log("hello");      //  show undefined
    return 'hello';
    
}
 console.log(MyFunction());

 //
//  function addnumbers(num1 , num2){
//     console.log(num1+num2);
//  }
//  addnumbers(3, 5)


function addnumbers(num1 , num2){
    return (num1+num2);
    console.log("test");       // after return not work 
 }
 const result = addnumbers(3, 5)

 console.log(result);



//  function logginUser(username ){
//     return `${username} is logged in`
//  }
// console.log(logginUser("raja"))
 
function logginUser(username ){
    if(!username){
       console.log("plz enter a username")
       return
    }
    return `${username} is logged in`
 }
console.log(logginUser())
 
 
