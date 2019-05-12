// // Dev 1
// function getString() {
//     const strArr = ['NodeJS', 'ReactJS', 'AngularJS', 'ExtJS', 'Angular'];
//     let str = strArr[Math.floor(Math.random() * strArr.length)];
//     return str;
// }

// // Dev 2

// window.setInterval(function () {
//     console.log(getString());
// }, 2000);

// Push
// Dev 1
function getString(cb) {
    const strArr = ['NodeJS', 'ReactJS', 'AngularJS', 'ExtJS', 'Angular'];
    window.setInterval(function () {
        let str = strArr[Math.floor(Math.random() * strArr.length)];
        cb(str);
    }, 2000);
}

// Dev 2
// function Display(s) {
//     console.log(s);
// }

// getString(Display);

// getString(function (s) {
//     console.log(s);
// });

// ECMA - Arrow Functions

getString((s) => {
    console.log(s);
});
