'use strict'
// var count = 0;

// function Next() {
//     return count += 1;
// }

// console.log(Next());
// console.log(Next());
// count = "ABC";
// console.log(Next());

// // -----------------------------------

// function Next() {
//     var count = 0;
//     return count += 1;
// }

// console.log(Next());
// console.log(Next());
// console.log(Next());

// -----------------------------------

// var Next = (function(){
//     var count = 0;

//     return function () {
//         return count += 1;
//     }
// })();

// console.log(Next());
// console.log(Next());
// console.log(Next());

// ------------------------------------

// var counter = (function () {
//     var count = 0;

//     return {
//         next: function () {
//             return count += 1;
//         },
//         prev: function () {
//             return count -= 1;
//         }
//     };
// })();

// console.log(counter.next());
// console.log(counter.next());
// console.log(counter.prev());
// console.log(counter.next());

// ------------------------------------------

function Counter(by) {
    var count = 0;

    return {
        next: function () {
            return count += by;
        },
        prev: function () {
            return count -= by;
        }
    };
};

var counter5 = Counter(5);
console.log(counter5.next());
console.log(counter5.next());
console.log(counter5.prev());
console.log(counter5.next());

var counter10 = Counter(10);
console.log(counter10.next());
console.log(counter10.next());
console.log(counter10.prev());
console.log(counter10.next());