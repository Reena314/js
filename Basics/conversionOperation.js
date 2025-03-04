//let score = '83'
// let score = '83abc'
// let score =null
// let score = true
let score = undefined
console.log(typeof score);
console.log(typeof (score))


let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// '83' => 83
// 83abc => NaN
//true => 1
// false => 0

let loggedIn = 1
let booleanConversion = Boolean(loggedIn)
console.log( booleanConversion);

// 1 => true;
// " " => false
// "riya" => true

let conString = 33

let convertString= String(conString);
console.log(convertString);
console.log(typeof convertString);



//--------------------------------operations------------------------------

let value = 3;
let negvalue = -value;

console.log(negvalue);

//console.log(2+2)
//console.log(2-2)
//console.log(2*2)
//console.log(2/2)
//console.log(2%2) 
//console.log(2**2)  // 2 rais the power2 

let str1 = 'riya'
let str2 = 'sharma'

let str3 = str1+str2
// console.log(str3);

// console.log("1" + 2 );
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
console.log(+ "")
console.log(+true)
// console.log(true+)     //error

let temp = 100;
// temp++;       // postfix
console.log(temp);
++temp;              // prefix
console.log(temp);