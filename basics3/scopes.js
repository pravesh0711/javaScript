//var c = 300
// let c = 300
// if (true) {
//     let a = 10
//     const b = 20
//     console.log("INNER: ", a);
//     console.log(c);
    
// }



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Pravesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))
// addone(5)
function addone(num){
    return num + 1
}



// console.log(addTwo(5))
const addTwo = function(num){
    return num + 2
}