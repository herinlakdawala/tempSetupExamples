// let source = { c: 1, d: 2, e: { city: "Pune" } };

// // let obj = source;
// let obj = Object.assign({}, source);
// // obj.c = 10000;
// obj.e.city = "Mumbai";

// console.log(obj);
// console.log(source);

let source = { c: 1, d: 2, e: { city: "Pune" } };

let obj = JSON.parse(JSON.stringify(source));
obj.e.city = "Mumbai";

console.log(obj);
console.log(source);

// ---------------------------------------------------
// let obj = Object.create(Object.prototype);
// console.log(obj);

// function Test() {
//     console.log("Test Ctor");
// }

// // var t1 = new Test();
// // console.log(t1);

// var t1 = Object.create(Test.prototype);
// console.log(t1);

// -----------------------------------------
// let source = { c: 1, d: 2 }

// // Object.freeze(source);
// // Object.preventExtensions(source);

// console.log(source);
// source.e = 3;
// console.log(source);
