function calculateCartPrice(val1, val2, ...num1){        // rest operator
    return num1
}
console.log(calculateCartPrice(300, 500, 600))

const user = {
    id : 201,
    name :"shanu"
}

function handleObject(anyobject){
    return `${anyobject.name} is helper`
}
console.log(handleObject(user)) // in this we can create object also instead object name use.like:-
// console.log(handleObject(

// {
//     id : 201,
//     name :"shanu"
// }
// ))

// ---------------function with array ----------

  const marks =[200, 300, 150, 250];

  function arrayWithfunction (getArrays){
    return `${getArrays[1]}`

  }
 console.log (arrayWithfunction(marks))