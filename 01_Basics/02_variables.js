const empId = 301
let empEmail = "rahul@google.com"
var empPwd = "3412"
empCity = "jaipur"
 
//empId = 401   // not allowed and const keyword dontchange value
empEmail = "riya@google.com"
empPwd = "erty"
empCity = "mp"
let empState;   // undefined
/* prefer not to use var
 because of issue in block scope and functional scope
 */
console.log(empId);
console.table([empEmail,empPwd,empCity, empState]);
