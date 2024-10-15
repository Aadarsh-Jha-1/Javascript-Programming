let dataValue1 = "33";
let dataValue2 = "Aadarsh";
let dataValue3 = 33;
let dataValue4 = null;
let dataValue5 = true;
let dataValue6 = undefined;

console.log("Initial Data Types : ");
console.log("                                       ");
console.log(dataValue1+" = "+typeof(dataValue1));
console.log(dataValue2+" = "+typeof(dataValue2));
console.log(dataValue3+" = "+typeof(dataValue3));
console.log(dataValue4+" = "+typeof(dataValue4));
console.log(dataValue5+" = "+typeof(dataValue5));
console.log(dataValue6+" = "+typeof(dataValue6));

// Conversion To Number Datatype

let dv1InNum = Number(dataValue1); // string
let dv2InNum = Number(dataValue2); // string
let dv3InNum = Number(dataValue3); // number
let dv4InNum = Number(dataValue4); // object
let dv5InNum = Number(dataValue5); // boolean
let dv6InNum = Number(dataValue6); // undefined

console.log("                                       ");
console.log("Value after Conversion In Number : ");
console.log("                                       ");
console.log(dataValue1+" = "+dv1InNum); //33
console.log(dataValue2+" = "+dv2InNum); //NaN
console.log(dataValue3+" = "+dv3InNum); //33
console.log(dataValue4+" = "+dv4InNum); //0
console.log(dataValue5+" = "+dv5InNum); //1
console.log(dataValue6+" = "+dv6InNum); //true


// Similarly We can Convert To Other Datatypes.



