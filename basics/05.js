let score = 100.3
// console.log(score)
score = "Hello"
// console.log(score)

const id = Symbol("123")
const anotherId = Symbol("123")
// console.log(id === anotherId)


let obj ={
    name:"pravesh",
    age:23,
}
// console.log(obj)

const value = null
const BigNum = 238383747828278478728728n


const fn = function(){
    console.log("Hello pravesh")
}
// console.log(typeof fn)
// fn()


// console.table([typeof id, typeof anotherId, typeof fn, typeof score,typeof obj, typeof  value,typeof BigNum])


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\\\
// stack(primitive), Heap (Non primitive)

let Name = "pravesh"

// let nName = Name
// console.log(nName);
// nName = "Ram Ram"

// console.log(Name)
// console.log(nName)

let user = {
    name:"pravesh",
    email:"pravesh@gmail.com"
}

let user1 = user
console.log(user1.email);
user1.email = "ram@gmail.com"
console.log(user1.email);
console.log(user.email);



