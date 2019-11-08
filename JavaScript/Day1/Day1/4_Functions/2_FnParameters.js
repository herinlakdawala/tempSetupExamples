// function hello(name) {
//     console.log("Hello,", name);
// }

// hello("Herin");
// hello();
// hello("Abhijeet", "Pune");

// ------------------------------ Handling Less Parameters
// function add(x, y) {
//     x = x || 0;
//     y = y || 0;

//     if ((typeof x == "number") && (typeof y == "number"))
//         return x + y;

//     throw Error("Invalid Parameters");
// }

// ES2015 - Default Parameters
// function add(x = 0, y = 0) {
//     if ((typeof x == "number") && (typeof y == "number"))
//         return x + y;

//     throw Error("Invalid Parameters");
// }

// console.log(add(2, 3));
// console.log(add(2));
// console.log(add());
// console.log(add(2, "ABC"));

// ----------------------------------- Handling Extra Parameters
// function check() {
//     console.log(this);
//     console.log(arguments);
// }

// check();
// check("ABC");;

// function hello() {
//     console.log("Hello World!");
// }

// function hello(name) {
//     console.log("Hello,", name);
//     for (let i = 0; i < arguments.length; i++) {
//         console.log("\t" + arguments[i]);
//     }
// }

// function hello() {
//     if (arguments.length == 0)
//         console.log("Hello World!");
//     else if (arguments.length == 1) {
//         console.log("Hello,", arguments[0]);
//     } else {
//         throw Error("Invalid arguments");
//     }
// }

// function hello(name, ...args) {
//     console.log("Hello,", name);
//     console.log("Extra Parameters----");
//     for (let i = 0; i < args.length; i++) {
//         console.log("\t" + args[i]);
//     }
// }

// // hello();
// hello("Herin");
// hello("Abhijeet", "Pune");
// hello("Abhijeet", "Pune", 411038);

// Rest Parameter
function average(...numbers) {
    // console.log(numbers);
    var sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    if (numbers.length)
        return sum / numbers.length;
    else
        return 0;
}

console.log(average());
console.log(average(1));
console.log(average(1, 2));
console.log(average(1, 2, 3, 4, 5));
console.log(average(1, 2, 3, 4, 5, 6, 7, 8, 9));


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(average(arr));
console.log(average(...arr));      // Spread Operator

// console.log(arr);
// console.log(...arr);