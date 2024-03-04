const accountId = 122345
let accountEmail = "akash@gmail.com"
var accountPassword = "12345"
let accountState;

accountCity = "Jaipur"


accountPassword = "2222"
accountCity = "Bengaluru"

/*
prefer not to use var because of issue in block scope and 
functional scope

let is block scoped, visible only for declared block scope while
var is function scoped visible to all function
*/

//accountId = 2
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])