/*function sayMyname(){
    console.log("A");
    console.log("k");
    console.log("a");
    console.log("s");
    console.log("h");
}
sayMyname()

//() this is used for execution
//sayMyname = for reference

function addNumbers(n1,n2) {
    console.log(n1+n2);
}
addNumbers(3,4)
*/
/*
function addName(num1,num2) {
    return num1 + num2
}
const result = addName(3,5)
console.log("Result:" , result);
*/
/*
function loginUser(username) {
    return `${username} just logged in`
}
console.log(loginUser("Akash"));
*/
/*function calculateCartPrice(...num1) {  //spread or rest operator
    return num1
}
console.log(calculateCartPrice(200,400,500));
*/
const obj = {
    username: "Akash",
    price: 199
}
function handleObj(getAnyObj) {
    console.log(`username is ${getAnyObj.username} and price is ${getAnyObj.price}`);
}
handleObj(obj)

const myArr = [200,400,500]
function returnSecondValue(anyArr) {
    return anyArr[1]
}
console.log(returnSecondValue(myArr));