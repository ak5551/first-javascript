/*let a = 300
if(true){
    let a = 10
    const b = 20
    //var c = 30
    console.log( "Inner :",a);
}

console.log(a);
//console.log(b);
//console.log(c);
*/
/*
function one(){
    const username = "Akash"

    function two(){
        const website = " youtube"
        console.log(username + website);
    }
    //console.log(website);
    two()
    console.log(username);
}
one()
*/

//for loops scopes declaration
/*
if(true){
    const username = "Akash"
    if(username === "Akash"){
        const website = " youtube"
        console.log(username + website);
    }
    //console.log(website);      first error because out of scope
}
//console.log(username);         second error because out of scope
*/

//console.log(addone(5));    //hum functions ko scope ke baher bhi declare kar sakte hai
/*
function addone(num1){
    return num1 +1
}
//addone(5)


//we used variable to store function
const addTwo = function(num) {
    return num + 2
    
}
console.log(addTwo(5));
*/

