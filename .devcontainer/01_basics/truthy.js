/*const userEmail = "ak@gmail.com"       //if we dosent give any condition in if statement then it assume provided value as true
if(userEmail){
    console.log("got user email");
}else{
    console.log("dont got user email");
}
*/
/*
const userEmail = []
if(userEmail){
    console.log("got user email");
}else{
    console.log("dont got user email");
}
*/

//falsy values = false,0,-0,BigInt 0n, "", null, undefined, NaN
//truthy values = "0", 'false', " ", [], {}, function(){}

/*
//break and continue
for (let index = 0; index < 10; index++) {
    if(index == 5){
        console.log(`5 is number`);
        continue;
    }
    
    const element = index;
    console.log(element);
}
*/

//while loop
/*
let myarr = ["flash","batman","superman"]
index=0;
while(index<myarr.length){
    console.log(`value is ${myarr[index]}`);
    index++;
}
*/

//do while loop
let score = 11;
do{
    console.log(`score is ${score}`);
    score++
}while(score<=10)