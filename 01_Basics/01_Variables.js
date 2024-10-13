const accountId = 145625;// cant be chnaged in future
let email = "xyz@abc.com";// used to generally declear no constant variables as it is based on scope
var password="Abc@123#";// used to declear varriable but does not know scope.
city = "Jaipur";// this is "any" variable which automatically allocates memnory space without any variable keyword 
let accState; // value will be undefined.
// accountId=55; //not allowed as const cant be altered

//console.log(accountId);

email = "lkj@hjg.com";//value will successfully change
password="654545";//value will successfully change
city="Delhi";//value will successfully change

console.table([accountId,email,password,city,accState]);// will print a table output. 
