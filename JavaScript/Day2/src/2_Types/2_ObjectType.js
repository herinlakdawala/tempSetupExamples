// var toy1 = new Object();
// console.log(toy1);
// // console.log(typeof toy1);

// toy1.color = "red";
// console.log(toy1);

// var toy2 = new Object();
// console.log(toy2);

var toy1 = new Object();
var toy2 = new Object();

// toy1.color = "red";
Object.prototype.color = "red";
toy1.color = "blue";
console.log(toy1.color);
console.log(toy2.color);

