
//const books = ["hindi", "eng", "maths"]

//  const values = books.forEach((item)=>{
//     console.log(item);
    
// })
// console.log(values);                             // undefined because not return value


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const books = ["hindi", "eng", "maths"]

 const values = books.forEach((item)=>{
    console.log(item);
    return item;
})
console.log(values);            // but after using return same problem undefined so we use filter


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const value = books.filter((item)=>{
         return item;
           
})
console.log(value);
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

