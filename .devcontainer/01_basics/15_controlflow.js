const score = 200
if(score>100){
    const power = "fly"
    console.log(`user power : ${power}`);
}
//console.log(`user power : ${power}`);        this statement gives error because out of scope

const userLoggedIn = true
const debitCard = true
if(userLoggedIn && debitCard && 2 == 3){
    console.log(`allow to buy course`);
}

const loginfromGoogle = false
const loginfromEmail = true
if(loginfromGoogle || loginfromEmail){
    console.log("user logged in");
}