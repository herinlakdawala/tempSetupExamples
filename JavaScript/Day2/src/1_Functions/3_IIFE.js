// Immediately Invoked Function Expression

// function hello(name) {
//     console.log("Hello,", name);
// }

// var hello = function (name) {
//     console.log("Hello,", name);
// }

// hello("Herin");

(function (name) {
    console.log("Hello,", name);
})("Herin");