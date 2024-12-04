const accountId = 25415
let accountEmail = "manish@gmail.com"
var accountPassword = "27461"
accountCity = "varanasi"
let accountState;

// accountId = 2  // not Allowed

accountEmail = "a@aa.com"
accountPassword = "56662"
accountCity = "ballia"

/*
prefer not to use var
because of issue in block scope and function scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
