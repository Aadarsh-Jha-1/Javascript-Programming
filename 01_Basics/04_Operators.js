// Arithmetic Operators
let a = 10;
let b = 3;

console.log("Arithmetic Operators:");
console.log("Addition (a + b):", a + b);   // 13
console.log("Subtraction (a - b):", a - b); // 7
console.log("Multiplication (a * b):", a * b); // 30
console.log("Division (a / b):", a / b); // 3.33
console.log("Modulus (a % b):", a % b); // 1
console.log("Exponentiation (a ** b):", a ** b); // 1000

// Increment and Decrement Operators
console.log("\nIncrement and Decrement:");
a++;
console.log("Increment (a++):", a);  // 11
a--;
console.log("Decrement (a--):", a);  // 10

// Assignment Operators
console.log("\nAssignment Operators:");
let c = 5;
console.log("Assignment (c = 5):", c);  // 5
c += 3; // c = c + 3
console.log("Add and assign (c += 3):", c);  // 8
c -= 2; // c = c - 2
console.log("Subtract and assign (c -= 2):", c);  // 6
c *= 2; // c = c * 2
console.log("Multiply and assign (c *= 2):", c);  // 12
c /= 3; // c = c / 3
console.log("Divide and assign (c /= 3):", c);  // 4
c %= 3; // c = c % 3
console.log("Modulus and assign (c %= 3):", c);  // 1

// Comparison Operators
console.log("\nComparison Operators:");
console.log("Equal (a == 10):", a == 10);   // true
console.log("Not equal (a != 5):", a != 5);  // true
console.log("Strict equal (a === 10):", a === 10);  // true
console.log("Strict not equal (a !== '10'):", a !== '10');  // true
console.log("Greater than (a > 5):", a > 5);  // true
console.log("Less than (a < 20):", a < 20);  // true
console.log("Greater or equal (a >= 10):", a >= 10);  // true
console.log("Less or equal (a <= 5):", a <= 5);  // false

// Logical Operators
console.log("\nLogical Operators:");
let x = true;
let y = false;
console.log("AND (x && y):", x && y);  // false
console.log("OR (x || y):", x || y);  // true
console.log("NOT (!x):", !x);  // false

// Bitwise Operators
console.log("\nBitwise Operators:");
let m = 5;  // 0101 in binary
let n = 3;  // 0011 in binary
console.log("AND (m & n):", m & n);  // 0001 (1)
console.log("OR (m | n):", m | n);  // 0111 (7)
console.log("XOR (m ^ n):", m ^ n);  // 0110 (6)
console.log("NOT (~m):", ~m);  // -6
console.log("Left Shift (m << 1):", m << 1);  // 1010 (10)
console.log("Right Shift (m >> 1):", m >> 1);  // 0010 (2)

// Ternary Operator
console.log("\nTernary Operator:");
let result = a > 5 ? "a is greater than 5" : "a is less than or equal to 5";
console.log("Ternary (a > 5 ? 'greater' : 'less or equal'):", result);  // a is greater than 5

// Typeof Operator
console.log("\nTypeof Operator:");
console.log("typeof a:", typeof a);  // number
console.log("typeof 'hello':", typeof 'hello');  // string
console.log("typeof true:", typeof true);  // boolean

// Nullish Coalescing Operator
console.log("\nNullish Coalescing Operator:");
let foo = null;
let bar = foo ?? "default value";
console.log("foo ?? 'default value':", bar);  // "default value"
