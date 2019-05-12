var calculator = (function () {
    function Add(x, y) {
        return x + y;
    }

    function Sub(x, y) {
        return x - y;
    }

    function Mul(x, y) {
        return x * y;
    }

    function Div(x, y) {
        return x / y;
    }

    // return {
    //     Add: Add,
    //     Sub: Sub,
    //     Mul: Mul
    // };

    // ES2015 - Object Literal
    return {
        Add,
        Sub,
        Mul
    };
})();

// console.log(calculator);
// console.log(calculator.Add(2,3));
// console.log(calculator.Sub(2,3));

// ES5
// var Add = calculator.Add;
// var Sub = calculator.Sub;

// ES 2015 - Object Destructuring
// var { Add, Sub } = calculator;

// console.log(Add(2, 3));
// console.log(Sub(2, 3));

// ES 2015 - Array Destructuring

var arr = [10, 20, 30, 40, 50, 60];

// var x = arr[0];
// var y = arr[1];

// var [x, , y] = arr;
// console.log(x, y);

var [x, , y] = arr;
// console.log("Before, x=" + x + " y=" + y);
console.log(`Before, x=${x}, y=${y}`);
[x, y] = [y, x];
// console.log("After, x=" + x + " y=" + y);
console.log(`After, x=${x}, y=${y}`);
