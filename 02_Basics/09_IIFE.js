// Immediately Invoked function Expression


(function mall(){                              //(       iffe used for remove the global pollution
    let clothsPrice = 5000    
    console.log(clothsPrice);                     //
                                                 //
}) () ;                                          //)  (); semicolon must for end  




( () => {
    let clothsPrice2 = 15000    
    console.log(clothsPrice2);  
} ) ();


( (name) => {
     console.log(`hello ${name}`);
     
})("pri")