//Primitive

//7 Types : String , Number, Boolean, null, undefined, symbol, Bigint

//reference (Non primitive)

//Array , Objects, Functions

const Id = Symbol('123')
const anotherId = Symbol('123')

console.log(Id === anotherId);

const bigNumber =33244455855n;

const heros = ["shaktimaan", "hanuman", "ironman"];  //Arrays

let myobj = {
    name : "akash",    //Object
    age : 22,
}

const myFunction = function(){
    console.log("hello world");  //function
}

//Non primitive datatype ke typeof ko object bola jata hai
//function ko function object kaha jata hai 