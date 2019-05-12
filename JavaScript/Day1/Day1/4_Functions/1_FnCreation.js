// Declartion Syntax
// hello();

// function hello() {
//     console.log("Hello World!");
// }

// hello();

// Expression Syntax
// var i = 10;
// console.log(i);
// console.log(typeof i);

// hello();

// var hello = function () {
//     console.log("Hello World!");
// }

// console.log(hello);
// console.log(typeof hello);

// hello();

// Constructor Syntax

var hello = new Function('console.log("Hello World!");');
hello();