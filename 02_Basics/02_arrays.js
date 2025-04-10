const student = ['s1', 's2', 's3', 's4'];
const employee = ['e1', 'e2', 'e3', 'e4'];

// student.push(employee);
// console.log(student);
// console.log(student[4][2]);

 student.concat(employee);
 console.log(student);
 
const arraysConcat = student.concat(employee);
console.log(arraysConcat);

const spreadMethod = [...student, ...employee];
console.log(spreadMethod);


const new_NewArrays = [1, 2, 3, 4, [1,4,6,8], 4, 5, [7, 4, 5, [4, 5], 7]]
  
console.log(new_NewArrays.flat(1));
console.log(new_NewArrays.flat(Infinity));


console.log(Array.isArray('s7'));
console.log(Array.from('s7'));
console.log(Array.from({name : 'riya'}));


let num = 100;
let num1 =200;
let num2 = 300;

console.log(Array.of(num, num1, num2));
