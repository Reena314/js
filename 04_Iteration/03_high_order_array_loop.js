// for of


// let arr = [1, 2, 3, 4];

// for (const num of arr) {     // object like any type string array etc
// console.log('value of', num);   // and num is any type of variable    
// }


// const greeting = ["welcome to js"]

// for (const greet of greeting) {
//     console.log(greet);
    
// }



//+++++++++++++++++Maps++++++++++++++++++++++++
// Map is an object that store the keys and values
// const map = new Map()
// map.set("name", "abc")
// map.set("age", "twenty")
// map.set("loc", "jal")
// console.log(map);


// // for (const key of map) {
// //     console.log(key);
    
// // }


// for (const [key, value] of map) {
//    // console.log(key);
//     console.log(key, '->', value);
    
// }

const sweets = {
    halwa : "very sweet",
    gulabjamun : "tasty"
}

// for (const key of sweets) {
//     console.log(key);                            // error because sweets object is not iterable
    
// }


// soooooooooooooooo
//++++++++++++++for in ++++++++++++++++

// const language ={
//     js : "java script",
//     ruby : "ruby",
//     swift : "swift by apple"
// }

// for (const key in language) {
// console.log(`${key} shorcut is for ${language[key]}`);
   

// }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++

// const programming = ["js", "react","py", ".net"]

// for (const key in programming) {
// //    console.log(key);
//    console.log(`${key}, ${programming[key]}`);
   
//}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



const map = new Map()
map.set("name", "abc")
map.set("age", "twenty")
map.set("loc", "jal")



for (const key in map) {
    console.log(key);         // not showing any value because iteration on map is not possible
    
}