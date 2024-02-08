// -------------- console --------------
console.log("Some information message!");
console.warn("Some warning message!");
console.error("Some error message!");

// -------------- data types --------------
// const/let/var name = value;

let price = 1200;       // number
let koef = 1.89;        // number

let length = 10000000000000n;        // BigInt

// escape sequences: \n \t \\ \' \"
let email = "example@gmail.com";    // string
let letter = 'A';                   // string

let isValid = true;                 // boolean (true/false)

let coord = { x: 2, y: -10, z: 0 }; // object
let arr = [1, 2, 3];                // object
let today = new Date();             // object

let emptyObject = null;             // null
let undefinedObject = undefined;    // undefined (bad practice)

console.log(arr[10]); // undefined
console.log(coord.j); // undefined

let averageMark = null;
coord.z = null;
console.log(coord.z);

let id = Symbol("453425");          // Symbol

// ----- const 
const count = 23355; // const can be initialized only
//count = 30; // error

// ----- dynamic/weak/duck typing
price = "4360$"; // change number type to string
price = [4, "A", [1, 2, 3]];
price = () => console.log("Hello JS!");

// ----------- check data type -----------
// typeof(expression) - returns type name
console.log(typeof (price));
console.log(typeof (koef));
console.log(typeof (length));
console.log(typeof (email));
console.log(typeof (letter));
console.log(typeof (isValid));
console.log(typeof (coord));
console.log(typeof (arr));
console.log(typeof (today));

console.log(typeof (emptyObject));
console.log(typeof (undefinedObject));

// ----------- browser dialogs -----------
alert("Some alert message!");

const login = prompt("Enter your login:");

// string concatenation: str + str
console.log("Hello dear, " + login + "!");
// string interpolation: `...${expression}...`
console.log(`Hello dear, ${login}!`);

// TASK: ask user for current year
// convert string to number: Number(str) / +str
const year = +prompt("Enter current year:");

console.log(`Current year is ${year}`);
console.log(`Next year is ${year + 1}`); // 2024 + 1

let like = confirm("Do you like JavaScript?");

if (like) {
    console.log("You are superman!");
}
else console.log("Please try again!");

// ----- thernary operator: (condition ? value_true : value_false)
console.log(`You ${like ? "like" : "dislike"} JavaScript!`);
