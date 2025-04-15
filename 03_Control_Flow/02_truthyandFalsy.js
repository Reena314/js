// falsy values

// false, 0, -0, bigInt on, " ", null, undefined,  NaN

// truthy values

// "0", " ", "false", [], {}, function(){} // empty func

let userEmail = []

 if (userEmail){
    console.log('useremail');   
 }else{
    console.log('dont have email');
    
 }

if (userEmail.length === 0){
    console.log('empty array');
    
}

//  object
 const obj = {}
 if(Object.keys(obj).length=== 0){
    console.log('empty obj');
 }

 //++++++++++++++++++++Nullish colescing operator +++++++++++++++++

 let num;
     num = 5 ?? 10             // ans 5
     console.log(num);
     
     let num1 = null ?? 15        // 15 because null and undefined made by nulllish
     num1 = undefined ?? 30
     num1 = null ?? 10 ?? 20
     console.log(num1);
// +++++++++++++++++++++++++++++++++++ternery operator+++++++++++++++     

  //condition? true: false

  let iceCreamPrice = 100;
iceCreamPrice <= 80 ? console.log('less than 80'): console.log("greater than 80");

