// Modules

// code that u can reuse, buld in to node.js,
//  you have downloaded, 
// that you have created one your own


// module systems in node
/* 1 default module system in node is commonjs
    fs module is file  


    require function to bring in code
    export to make code available
    dont use this
    */

// 2 es6 module system
/*  import  from
    export
    use this
    */


// JSON : JavaScript Object Notation is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate
// the key and value are separated by a colon, and each key-value pair is separated by a comma, and the entire object is enclosed in curly braces, the key must be double quoted string, the value can be a string, number, boolean, null, array, or another object, and the string must be double quoted, the key is always a string, but the value can be any data type that is supported by JSON


import {readFile} from 'fs'; //import the readFile function from the fs module use the es6 module system, 

console.log('start reading a file...'); //output: start reading a file...
readFile('./games.json', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data); //output: <Buffer 7b 22 6e 61 6d 65 22 3a 22 4a 6f 68 6e 22 2c 22 61 67 65 22 3a 33 30 7d> because data is a buffer, we need to convert it to a string
    const s=  data + ''; // because data is a buffer, we need to convert it to a string,buffer is binary data, it is not a string, so we need to convert it to a string
    console.log(s.games); //output: undefined because s is a string, we need to parse it to a json object 
    const obj = JSON.parse(data); //parse the JSON string to a JSON object
    console.log(obj);
    console.log(obj.games); //output: undefined because games is not a key in the JSON object
});
console.log('end')
// asyn io is the main feature of Node.js so the sequence is start, end, and then the callback function is executed when the file is read


// #choose module system for node 
// 1.use .mjs to use ES modules
// 2. or use any extension u want, but in package.json, add "type": "module" to tell node that we are using ES modules

function iterate(array) {
    for(let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

function iterate2(array, action) {
    for(let i = 0; i < array.length; i++) {
        action(array[i]);// pass the element to the action function
    }
}

const odds = [1,3,5,7,9];
iterate(odds);
iterate2(odds, (num)=>{
    console.log(num*2);
}); //output: 1 3 5 7 9 because we passed the console.log function as an argument to the iterate function

const characters = ['a', 'b', 'c'];

// for each is a method on an arr, arg is a function, function is called once per element 
/*higher order function
1 function that takes a function as an argument
2 function that returns a function
3 function that does both*/
//exampe of higher order function: foreach
characters.forEach(ch=>console.log(ch)); //output: a b c because we passed the console.log function as an argument to the forEach method


//map will transform the array every element and  map is called on using some function passed in collect those new elements in a new array,instead of mutating the original array
const shoutedchars =  characters.map((s,i)=>{
    return `${s.toUpperCase()} is at position ${i}!`;
}); //output: ['A!', 'B!', 'C!'] because we passed the toUpperCase function as an argument to the map method
console.log(shoutedchars);

//filter will take an array filter is called on ...., test each element using some function passed in, and return a new array with only the elements that pass the test
const nums = [1,2,3,4,5];
let odds2 = nums.filter((num)=>num%2==0);
console.log(odds); //output: [2,4] because we passed the test function as an argument to the filter method

const squaredOdds = nums.filter((num)=>num%2==0).map((num)=>num*num); // but if dotted is null or undefined, it will throw an error

//we can use optional chaining to avoid the error

const arr = [1,9,10];
let acc= 0;
for(let num of arr){
    acc+= num;
}
console.log(acc); //output: 20 because we used a for loop to iterate through the array and add each element to the acc variable

function myReduce(arr,combine,initValue){
    let acc = initValue;
    for(let num of arr){
        // reducer/ combine should calculate the new value
        acc = combine(acc,num);
    }
    return acc;
}

const product =myReduce([1,3,6],(p,n)=> p*n,1); //output: 18 because we used the myReduce function to calculate the product of the array elements
const names = ['alice','bob','carol'];
//reduce is builtin in arr 
const s = names.reduce((acc,ele,i)=>acc+'-'+ele+i); //output: 'alicebobcarol' because we used the reduce method to concatenate the array elements
console.log(s);
