// function Show() {
//     console.log("Show Completed...");
// }

// Show();
// var r = Show();

// var d1: void;
// d1 = 10;

// function Show(): void {
//     console.log("Show Completed...");
// }

// Fn Declarartion
function add1(x: number, y: number): number {
    return x + y;
}

// Fn Expression
const add2 = function (x: number, y: number): number {
    return x + y;
}

// let add3: () => void;
let add3: (x: number, y: number) => number;
add3 = function (x: number, y: number): number {
    return x + y;
}

let age: number;
age = 10;

let add4: (x: number, y: number) => number;
add4 = function (x, y) {
    return x + y;
}

let add5: (x: number, y: number) => number;
add5 = (x, y) => {
    return x + y;
}

let add6: (x: number, y: number) => number;
add6 = (x, y) => x + y;

// console.log(add1(2, 3));
// console.log(add2(2, 3));
// console.log(add3(2, 3));
// console.log(add4(2, 3));
// console.log(add5(2, 3));
// console.log(add6(2, 3));

var arr = [
    { id: 1, name: "ABC", city: "Pune" },
    { id: 2, name: "XYZ", city: "Mumbai" },
    { id: 3, name: "PQR", city: "Pune" }
];

// var filterFn = function (item: any, index: number, arr: any[]) {
//     return item.city === "Pune";
// }

// var results = arr.filter(filterFn);

// Anonymous
// var results = arr.filter(function (item, index, arr) {
//     return item.city === "Pune";
// });
// console.log(results);

// Multiline Lambda
// var results = arr.filter((item, index, arr) => {
//     return item.city === "Pune";
// });
// console.log(results);

// Singleline Lambda
// var results = arr.filter((item, index, arr) => item.city === "Pune");
// console.log(results);

var j = 10;
console.log(j)
console.log(typeof j)

console.log(add1)
console.log(typeof add1)