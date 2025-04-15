// let a =10;
// let b = 20;

// <, >, <=, >=, ==, ===, !=, !==

// if (a<b){
//     console.log('b is greater');
    
// }
// if (20>15){
//     console.log('20 is greater');
    
// }

const temp = 41
// if (temp === 41){
//     console.log('tempreature is 41');
// }
// console.log('temp is greater 50');

if (temp === 41){
    console.log('tempreature is 41');
}else
console.log('temp is greater 50');


const score =1000
// if (score == '1000'){
//     console.log("executed");
    
// }
if (score === '1000'){           // if 1000 value then show the power value not undefined
    console.log("executed");  
    var power = "fly"
    console.log(`userPower : ${power}`);
     
}else {
console.log("not executed");

}

console.log(`userPower: ${power}`);

//++++++++++++++++++++++++++++++++++++++++++++++++

let balance = 1000;
if (balance < 500){
    console.log('less than 500');
}else if (balance < 900){
    console.log('less than 900');
    
}else {
    console.log('equal to 1000');
    
}
//+++++++++++++++++++++++++++++++++++

if (balance ===1000) console.log('true'); // implicite scope


//++++++++++++++++++++++++++++++++++++

let userLoggedIn = 'true';
let debitCard = 'true'
let loggedInFromFacebook = "true"
let loggedInFromGoogle = "true"
if (userLoggedIn && debitCard && 2== 2){
    console.log('loggedIn');
    
}

if (loggedInFromFacebook || loggedInFromGoogle){                 // any one ture 
    console.log('user loggedIn');
    
}

// +++++++++++++++++++++++++++Switch case +++++++++++++++

let month = 3

switch (month){
    case 1: 
    console.log('january');
    break;
    case 2: 
    console.log('february');
    break;
    case 3: 
    console.log('march');
    break;
    case 4: 
    console.log('April');
    break;
    default:
        console.log('default');
        break;
}