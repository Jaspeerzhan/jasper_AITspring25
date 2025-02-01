// mjs means that the file is a mymodule


function myFunction() {
    console.log('Hello');
}

function myFunction2() {
    console.log('World');
}

export {myFunction, myFunction2}; 
// export  myFunction and myFunction2 so that they can be used in other file

/*import {myFunction, myFunction2} from './myModule.mjs'; //import myFunction and myFunction2 from myModule.mjs
or import * as myModule from './myModule.mjs'; //import all the functions from myModule.mjs*/
