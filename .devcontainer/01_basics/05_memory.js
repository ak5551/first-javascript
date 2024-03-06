//Stack(Primitive datatypes store karta hai)
//Heap(Non Primitive datatype store karta hai)


//Stack
let youTube = "Akash"
let anotherTube = youTube

anotherTube = "Tundare"


console.log(youTube);
console.log(anotherTube);

//Heap

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "akash@google.com"
console.log(userOne.email);
console.log(userTwo.email);