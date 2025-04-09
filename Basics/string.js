let sName = "Karan";
let rollNo = 12

console.log( sName + " " + rollNo + " value ")
console.log (`Student name is ${sName} and rollnumber is ${rollNo}`)

let diffTYpeStringDef = new String("Karan"); // diff style of string
console.log(sName[4])
console.log(sName.length)
console.log(sName.charAt(3));
console.log(sName.indexOf('r'));
console.log(sName.toUpperCase());

let newString = sName.substring(0,3);
console.log(newString);
 
let stringSlice = sName.slice(1, 4);
console.log(stringSlice);

let url ="www/gffghjjbmdbxjd%20ghgjg"
console.log(url.replace('%20','-'))
console.log(url.includes('emp'));

let empName ="honey-cd-pd"

console.log(empName.split('-'))
