// const insta = new Object()
// const insta = {}


// insta.id = "123"
// insta.age = 34

// console.log(insta);

const user = {
    email:"Pravesh@gmail.com",
    NAme: "Pravesh",
    first:{
        f:"Pravesh",
        l:"ram"
    }
}
// console.log(user);

const obj1 = {1:"A",2:"B",5:{a:"A",b:"B"}}
const obj2 = {3:"B",4:"C"}
// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2);

const obj3 = {...obj1,...obj2}
// console.log(obj1)
// console.log(obj3)

const user2 = [
    {
        id:1,
        email:"pravesh"
    },
    {
        id:1,
        email:"pravesh"
    },
    {
        id:1,
        email:"pravesh"
    },

]

// console.log(user2[0])


// console.log(user);
// console.log(Object.entries(user))
console.log(user.hasOwnProperty('email'))
