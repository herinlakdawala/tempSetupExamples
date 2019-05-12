// var arr = [];
var myMap = new Map();
// console.log(typeof myMap);

var strKey = 'the string';
var objKey = {};
var fnKey = function () { };

myMap.set(strKey, "This is value for string key");
myMap.set(objKey, "This is value for object key");
myMap.set(fnKey, "This is value for function key");

// console.log(myMap.size);
// for (const pair of myMap) {
//     console.log(pair);
// }

// for (const key of myMap.keys()) {
//     console.log(key);
// }

// for (const key of myMap.values()) {
//     console.log(key);
// }

// for (const [key, value] of myMap.entries()) {
//     console.log(key + "\t" + value);
// }

for (const [key, value] of myMap) {
    console.log(key + "\t" + value);
}