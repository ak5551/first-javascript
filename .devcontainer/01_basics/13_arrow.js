/*
const chai= {
    username : "Akash",
    price : 199,

    welcomeMessage: function(){
        console.log(`${this.username}, user logged in `);
        console.log(this)   //this = current context
    }
}
chai.welcomeMessage()
// chai.username = "sam"
// chai.welcomeMessage()
//console.log(this);
*/
/*
function chai(){
    let username = "Akash"
    console.log(this);
}
chai()
*/

/*
const chai = () => {
    let username = "Akash"
    console.log(this);
}
chai()
*/

//Basic arrowfunction
/*
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3,4));
*/
/*
const addTwo = (num1,num2) => (num1 + num2)   //Implicit return example
console.log(addTwo(3,4));
*/
const addTwo = (num1,num2) => ({username: "Akash"})

console.log(addTwo(3,4));
