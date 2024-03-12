// ----------------------- let / const -----------------------

// 1 - we can use before declaration
console.log(number); // undefined

var number = 10;
// 2 - we can recreate variable with the same name
var number = 20; // allow

//console.log(str); // error
let str = "hello ES6";
//let str = 'goodbye var'; // error

// 3 - [var] has function scope / [let] has block/local scope {...}
function TestScope() {

    console.log(varValue);   // undefined
    //console.log(letValue); // error

    if (4 > 2) {
        var varValue = 45;
        let letValue = 55;
    } // end of block

    console.log(varValue);   // 45
    //console.log(letValue); // error
}

TestScope();

// [var] as a loop variable
for (var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(`Current i: ${i}`); // 10, 10, 10...
    }, 1000)
}

// [let] as a loop variable
for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(`Current i: ${i}`); // 1, 2, 3...
    }, 1000)
}

console.log("Continue...");

const koef = {
    low: 0.4,
    high: 2.5
};

koef.low++;         // yes
koef.high = 105;    // yes
//koef = null;      // no

// prevent changing property values or addding new to the object
Object.freeze(koef);

// ----------------------- destructuring -----------------------
// split array / object to a separate variables

let colors = ['white', 'black', 'blue', 'gray', 'yellow'];

// const light = colors[0];
// const dark = colors[1];

const [light, dark, , , accent] = colors;

console.log("Light color:", light);
console.log("Dark color:", dark);
console.log("Accent color:", accent);

function getStudentMarks() {
    return [5, 6, 12, 10, 4, 3, 11];
}

const [firstMark, ...others] = getStudentMarks();
console.log("First student mark:", firstMark);
console.log("Others marks", others);

let rectangle = {
    height: 34.2,
    width: 10.5,
    name: "Black box",
    color: 'red'
    //...
};

// const w = rectangle.width;
// const h = rectangle.height;
// const name = rectangle.name;
const { name, width: w, height: h } = rectangle;

console.log(`${name} rectangle size: ${w}x${h}cm`);

// function parameter destructuring
function showArea({ width, height }, title) {

    // const { width, height } = object;

    console.log(`----- ${title} -----`);
    console.log(`Area = ${width * height}cm^2`);
    console.log(`Perimeter = ${(width + height) * 2}cm`);
}

var door = {
    material: "Wood",
    width: 95,
    height: 230,
    color: "Brown",
    vendor: "BBC"
}

showArea(rectangle, "Rectangle info");
showArea(door, "Bedroom Door info");

// get first object property
const [key, value] = Object.entries(door)[0];
console.log(`Key: ${key} | Value: ${value}`);

function useState() {
    return [120, "hello", () => console.log("Func!")];
}

// destructuring React hook function
const [num, word, func] = useState();

console.log("Number = ", num); // arr[0]
console.log("Word = ", word);  // arr[1]
func();                        // arr[2]()

// ----------------------- spread -----------------------
// spread operator syntax: ...object/array

function showRange(min, max) {

    let result = '';
    for (let i = min; i <= max; ++i) {
        result += i + ' ';
    }
    console.log("Range:", result);
}

let numbers = [33, 44, 55];

showRange(...numbers);  // numbers[0], numbers[1]

const arrayCopy = [...numbers]; // deep copy (copy each element)

numbers.push(123);
console.log("Copy arr:", arrayCopy);

let newArray = [-1, ...numbers, 6, 3];
console.log("Concatenated:", newArray);

let obj = {
    positives: [1, 2, 3],
    negatives: [-1, -4, -120]
};

let combinedArr = [...obj.positives, ...obj.negatives];
console.log("Combined Arr:", combinedArr);

// create array copy with new item at the end
function pushItem(arr, item) {
    return [...arr, item];
}

const larger = pushItem(numbers, 88);
console.log(larger);

//  ----------------------- ...rest operator -----------------------
// ! we can use the rest operator only on the last parameter position
function showMarks(studentName, age, ...marks) {
    console.log(`${studentName} ${age} years old has marks: ${marks}`);
}

showMarks('Bob', 16, 12, 8, 5, 6, 10, 6, 8);

const admin = {
    login: "super_user",
    password: "Qwerty",
    role: 'admin',
    email: 'temp@outlook.com'
};

let manager = {
    // login: admin.login,
    // password: admin.password,
    // role: admin.role,
    ...admin,
    email: 'new@gmail.com',     // overwrite email value
    address: 'Rivne, Ukraine'   // create new property
};

console.log(`Admin 2: ${manager.login}, ${manager.email}`);
console.log(Object.keys(manager));
console.log(Object.values(manager));

// ------------------ Symbol ------------------
const myId = Symbol(3344);
let yourId = Symbol(3344);

console.log("My = Your: ", myId == yourId); // false

yourId = myId;
console.log("My = Your: ", myId == yourId); // true

let order = {
    number: 120,
    total: 3500,
    client: "Bob Super",
    myId: 4345,
    [myId]: "rgaegre-aeg-353-gser"
}

order.number += 2;
order['number']++;

console.log("Code: ", order.myId);          // undefined
console.log("Code: ", order[Symbol(3344)]); // undefined
console.log("Code: ", order[myId]);         // "..."

// get iterator property
let i = numbers[Symbol.iterator];
console.log("Iterator:", i);
