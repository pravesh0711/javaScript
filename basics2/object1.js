// singleten
// Object.create

// object literate 


const my =  Symbol("123")
const jsUser = {
    name:"pravesh",
    "Full Name":"ram",
    [my]:"key1",
    age:45,
    location:"jaipur",
    email:"pravesh.google.com",
    islogin:true,
    lastlogin:["monday","staurday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["Full Name"])
// console.log(jsUser."Full Name") error
// console.log(jsUser[my])
// jsUser.email = "ram@gmail.com"
// Object.freeze(jsUser); nothing will going to change
// jsUser.email = "p@gmail.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log(`Hello user ${this.email}`);
}

console.log(jsUser.greeting());



