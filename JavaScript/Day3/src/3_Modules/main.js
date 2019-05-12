// Case 1 - Default Import
// import square from './lib.js';
// console.log(square(4));

// Case 2 - Named Imports
// import { square, check } from './lib.js';
// console.log(square(4));
// console.log(check(4));

import * as lib from './lib.js';
console.log(lib.default(3)); 
console.log(lib.square(4));
console.log(lib.check(4));

// import s, { check } from './lib.js';
// console.log(s(4));
// console.log(check(4));

// rollup main.js --output.format iife --output.file bundle.js