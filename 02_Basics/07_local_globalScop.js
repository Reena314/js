// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);
var c = 300;   //  global
let a =400;
if(true)
{
    let a = 10;
    const b = 20;               //local scop
    var c = 30; // not right
    console.log("local", a);
    
}

console.log(a);
// console.log(b);
console.log(c);


// ------------ in  nestedfunction local and global------

function one (){
    const userName = "karan"

    function two(){
        const age = 30
        console.log(userName);
        
    }
 //   console.log(age)
    // two()
    two()
}
one()


if(true){
    const userloc ="jal"
    if(userloc === "jal"){
        const userage = 30
        console.log(userloc+userage);
        
    }
//console.log(userage);
    

}
//console.log(userloc);



// +++++++++++++++hoistring +++++++++++++++
 console.log(onenum(5))
function onenum(num){
      return num+1
}
// onenum(5)


//or



 // console.log(twonum(7))    // Cannot access 'twonum' before initialization
const twonum = function(num1){    // use variable as expression function
      return num1+2;
}
 twonum(7)