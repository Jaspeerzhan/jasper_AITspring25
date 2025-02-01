//可以加分號，也可以不用加分號，asi自動分號插入，但是推薦加分號在結尾

const  vargame = {name: 'bala', genre:'action'};
for (const key in vargame) {
    //for loop iterate the key set of the object
    console.log(key);
}

const nums = [1, 2, 3, 4, 5];
for (const num of nums) {
    //for loop iterate the value set of the array, we should use 'of' instead of 'in'
    console.log(num);
};
// if we use 'in' instead of 'of', it will iterate the index of the array
for (const ind in nums) {
    console.log(ind);
}


const nums2 = [11,1,2,25];
nums2.sort(); //default sort is ascending order and based on comparing the string
console.log(nums2); //output: [1, 11, 2, 25], because it converts the number to string and compare the string


//we need to pass the compare function to sort the number in ascending order
nums2.sort((a,b) => a-b); 
console.log(nums2); //output: [1, 2, 11, 25]

//toSorted() method is used to sort the array and return the new sorted array without modifying the original array
const nums3 = [11,1,2,25];
const sortedNums3 = nums3.toSorted((a,b) => a-b);
console.log(nums3); //output: [11,1,2,25]
console.log(sortedNums3); //output: [1, 2, 11, 25]


//ways to create array in JS
const arr1 = [1,2,3,4,5];
const arr2 = new Array(1,2,3,4,5);


//parseInt() function is used to convert the string to integer
const num1 = parseInt('123', 2); //convert the binary string to integer, the second argument is the radix,default is 10
console.log(num1); //output: 3
const myArgs = ['111',2];
//use ... to spread the array to the arguments, all into the individual elements
const num2 = parseInt(...myArgs);

const fruit1 = ['apple', 'banana'];
const fruit2 = ['orange', 'grape'];
const fruits = [...fruit1, ...fruit2]; //spread the elements of the array to the new array

//it also works for string, string is array-like object, it is not array
const str = 'hello';
const charArr = [...str]; //spread the characters of the string to the new array

const names = ['John', 'Jane', 'Jack'];
const [first, second, third] = names;  //destructure the array to the individual elements, like python unpacking
// can also seprate the rest of the elements to the rest variable
const [f, ...rest] = names; //first = 'John', rest = ['Jane', 'Jack'], cannot redecare the block-scoped variable


//function declaration synta t o create a named function

//if function has no return value, it will return undefined
//example of function declaration with no return value
function greet(name) {
    console.log('Hello ' + name);
}
//show it is undefined
console.log(greet('John')); //output: Hello John, undefined means no return value


const nums4 = [1,2,3,4,5];

//use function keyword but no name to create an anonymous function

nums.forEach(function(num) {
    console.log(num);
}); 

const mydouble =function (num) {
    return num*2;
}
console.log(mydouble()); //if we don't pass the argument, it will return NaN the argument is undefined

/*arrow function syntax, parameter list => expression that will be return value
if only one parameter, we can omit the parentheses
if you want to return ,must have explicit return statement
*/
const double = num => num*2; // it is equivalent to function(num) {return num*2;}

//if no parameter, we need to use the parentheses
//if thre is multiple expression, we need to use the curly braces
const sayHello = () => {
    console.log('Hello');
    console.log('World');
}

//if we want to return object literal, we need to wrap the object literal in parentheses
const getPerson = () => ({name: 'John', age: 30});

//array map() method is used to create a new array by calling the callback function on each element of the array
const nums5 = [1,2,3,4,5];
const doubleNums = nums5.map(num => num*2); //output: [2,4,6,8,10]

//the callbacks function of map() method can take three arguments: element, index, array（you ca choose to use them or not）
const numsWithIndex = nums5.map((num, index) => `${num}-${index}`); //output: ['1-0', '2-1', '3-2', '4-3', '5-4']


//object destructuring
const person = {name: 'John', age: 30};
const {name, age} = person; //destructure the object to the individual elements, the variable name should be the same as the key of the object

// funct({}) means the function is called with an object as an argument
//example {a,b};
function h({a,b}) {
    console.log(a,b);
}
h({a:1,b:2}); //output: 1,2 because the object is passed as an argument and the key is the same as the parameter name



const add = (...args) => {
    console.log(args); //output: [1,2,3,4,5]   ... works as rest parameter when used in function parameter list, it collects the arguments into an array
    total = 0;
    for (const arg of args) {
        total += arg;
    }
    return total;
}

console.log(add(1,2,3,4,5)); //output: 15// the rest parameter collects the all the arguments into an array


//an engine to run js outside of the browser is called Node.js
//Node.js is a runtime environment that allows you to run JavaScript on the server side and build scalable network applications
// asyn io is the main feature of Node.js that makes it different from the browser environment, it is non-blocking, event-driven I/O

//in Node.js, all io is non-blocking, so you don't have to wait for the file to be read before moving on to the next line of code

// import fs from 'fs'; //import the file system module
// console.log('start reading a file...');
// fs.readFile('L1.js', 'utf-8', (err, content) => {
//     if (err) {
//         console.log('error happened during reading the file');
//         return console.log(err);
//     }
//     console.log(content);
// });
// // the function readFile() is asynchronous, it takes a callback function as the last argument, the callback function is called when the file is read
