const score = 400;
console.log(score);

const numValue= new Number(200); // value like object
console.log(numValue);
console.log(numValue.toString().length);
const convString = String(numValue)// convert to number to string
console.log(typeof convString);
console.log(convString);

console.log(numValue.toFixed(1))



const newNum = 145687.78;
console.log(newNum.toPrecision(6));

const otheNumber = 1000000000;
console.log(otheNumber.toLocaleString('en-IN'));

// -----------------------------------Math ----------------------------


console.log(Math);
console.log(Math.abs(-6));
console.log(Math.SQRT2);
console.log(Math.max(6,9,4,3));
console.log(Math.min(8,6,9,2));
console.log(Math.floor(5.6));
console.log(Math.ceil(7.6));
console.log(Math.round(123.678));
console.log(Math.random());

console.log(Math.random()*10 +1);
console.log(Math.floor(Math.random()*10+1));


let min =10;
let max = 20;

console.log(Math.floor(Math.random()* (max - min + 1)+ min));







