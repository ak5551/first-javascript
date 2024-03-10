//for-of loop hum array or strings ke liye use karte hai

//for-of loop me na initialize or na hi updation ki jaroorat hai

//this is for array
/*
let arr = [1,2,3,4,5]
for (const num of arr) {
//    console.log(num);
}

//this is for string

const greeting = "Hello World!"
for (const greet of greeting) {
    console.log(`Each char is ${greeting}`);
}
*/

//Maps = It holds key value Pairs and original insertion order
/*
const map = new Map()
map.set('IN', "India")
map.set('Rus', "Russia")
map.set('Fr', "France")

console.log(map);
*/

//forin loop used for Objects
/*
const myobj = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}
for (const key in myobj) {
    console.log(`${key} shortcut is for ${myobj[key]}`);
}
*/

//foreach
/*
const coding = ["js","ruby","java","python"]

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
} )
*/
/*
const myCoding = [
    {
        languageName: "javasript",
        languagefileName: "js"
    },
    {
        languageName: "java",
        languagefileName: "java"
    },
    {
        languageName: "python",
        languagefileName: "py"
    },
]
myCoding.forEach( (item) => {
    console.log(item.languageName);
} )
*/
//foreach loop cannot return values
//filter function return values
/*
const myNums =[1,2,3,4,5,6,7,8]
const newNums = myNums.filter( (number) => number > 4 )
console.log(newNums);
*/

//const myNumbers =[1,2,3,4,5,6,7,8]
//const newNumbers = myNumbers.map( (num) => {return num +10} )
//console.log(newNumbers);
//Map chaining
/*
const newNums = myNumbers
                .map( (num) => num*10 )
                .map( (num) => num + 1 )
                .filter( (num) => num >= 40 )
console.log(newNums);
*/

//Reduce method
//this is lengthy
/*
const myNums = [1,2,3]
const myTotal = myNums.reduce(function (acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
},0)
console.log(myTotal);
*/

//this is short
// const myNums = [1,2,3]
// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const priceTopay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceTopay);