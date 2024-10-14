"use strict"; // treat all JS Code as newer version
//alert(3+3) // we are using node js , not browser.

/* 
      PRIMITIVE DATA TYPES
      ********************
   1. number => any number till 2^53
   2. bigint => numbers more than 2^53
   3. string => " ", ' '
   4. boolean => true, false
   5. null => representation of empty value
   6. undefined => data type not defined -> can store any data type
   7. symbol => unique


      NON-PRIMITIVE DATA TYPES
      ************************
   1. object
*/

// typeof operator

console.log(typeof "Aadarsh"); // string
console.log(typeof 200); // number
console.log(typeof 9009199254740992n); // In this case, the value will be treated as a `BigInt`, and no precision will be lost.
console.log(typeof true); // boolean
console.log(typeof null); //object
console.log(typeof undefined); //undefined