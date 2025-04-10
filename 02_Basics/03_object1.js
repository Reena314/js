// singleton  // make in constructor
// object literal // not singleton make in object literal
   const mysym = Symbol("key")
const user= {
    name : "rajni",
    "full Name": "rajni sharma",
    [mysym] : "my Symbol",
    age : 30,
    place :" jal",
    email : 'rajni123@gmail.com',
}
console.log(user.email);
console.log(user["email"]);
console.log(user["full Name"]);
console.log(typeof user[mysym]);

console.log(user[mysym]);

user.email = "ragni@gmail.com"
// Object.freeze(user)

user.email ="asd@gmail.com"// not change after freeze
//console.log(user);

user.greeting = function(){
    console.log("hello sir");    // run when freeze comment
    
}
user.greetingTwo = function(){
    console.log(`hello ${this.name}`);   
    
}
console.log(user.greetingTwo());

