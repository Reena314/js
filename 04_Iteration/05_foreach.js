const course = ["js", "ruby", "py", "java"]

// course.forEach(function (val){
//    console.log(val);
   
// })


// +++++++++++++++++++++++++++++++++++++++++++++++
// course.forEach((item)=>{                         // arrow func
//    console.log(item);
   
// })


//+++++++++++++++++++++++++++++++++++++++++++++++++++
function printVal (value){
    console.log(value);
    
}
course.forEach(printVal)             // refrence diya hai execute ni kiya  () aise

// +++++++++++++++++++++++++++++++++++++++++++

course.forEach((index, item, arr)=>{
    console.log(index, item, arr);
    
})
//+++++++++++++++++++++++++++++++++++++++++++++++


const  coding =[
    {
      languageName : 'js',
      title:"abc"
    } ,
    {
        languageName : 'javs',
        title:"abcd"
      } 
]
coding.forEach((item)=>{
    console.log(item.languageName);
    
})
