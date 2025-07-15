let score = 100.3
// console.log(score)
score = "Hello"
// console.log(score)

const id = Symbol("123")
// const anotherId = Symbol("123") 
// always return unique Symbol

// console.log(id === anotherId)


let obj ={
    name:"pravesh",
    age:23,
}
// console.log(obj)

const value = null
const f = null
const BigNum = 2383837478282784787287282n

// console.log(BigNum)


const fn = function(){
    // console.log("Hello pravesh")
    // console.log("131")
}
// console.log(typeof fn)
fn()


// console.table([typeof id, typeof anotherId, typeof fn, typeof score,typeof obj, typeof  value,typeof  f,typeof BigNum])


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\\\
// stack(primitive), Heap (Non primitive)

let Name = "pravesh"

let nName = Name
// console.log(nName);
nName = "Ram Ram"

// console.log(Name)
// console.log(nName)

let user = {
    name:"pravesh",
    email:"pravesh@gmail.com"
}

let user1 = user
console.log(user1.email);
console.log(user.email);
user1.email = "ram@gmail.com"
//  This modifies the shared object — now both user and user1 have email: "ram@gmail.com".
user1 = {
    name:"ram",

    phone:98789
}
console.log(user1)
console.log(user1.email);
console.log(user.email);



