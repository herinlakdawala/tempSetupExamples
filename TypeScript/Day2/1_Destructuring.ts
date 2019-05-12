const calculator = (function () {
    function add(x: number, y: number): number {
        return x + y;
    }

    function sub(x: number, y: number): number {
        return x - y;
    }

    function mul(x: number, y: number): number {
        return x * y;
    }

    function div(x: number, y: number): number {
        return x / y;
    }

    // return {
    //     add: add,
    //     sub: sub,
    //     mul: mul
    // };

    // SHorcut - Object Literal
    return {
        add, sub, mul
    };
})();

// console.log(calculator);

// JavaScript
// var add = calculator.add;
// var sub = calculator.sub;

// console.log(add(2, 3));
// console.log(sub(2, 3));

// TypeScript - Object Destructuring
// var { add, sub } = calculator;

// console.log(add(2, 3));
// console.log(sub(2, 3));

// TypeScript - Array Destructuring

var arr = [10, 20, 30, 40, 50];

// var x = arr[0];
// var y = arr[1];
// console.log(x, y);

// var [x, , y] = arr;
// console.log(x, y);

// var [x, , y] = arr;
// console.log("Before: ", x, y);

// [x, y] = [y, x];

// console.log("After: ", x, y);

// Array Spread
// var newArr = [...arr];
// console.log(newArr);

// // Destructuring with Rest
// var [x, ...y] = arr;
// console.log(x, y);
// console.log(arr);

var employees = [
    { id: 1, name: "Manish" },
    { id: 2, name: "Ram" },
    { id: 3, name: "Abhijeet" },
    { id: 4, name: "Pravin" },
    { id: 5, name: "Subodh" }
];

var [e1, ...others] = employees;

e1.id = 100;
console.log(e1);
// console.log(others);
console.log(employees);

