// function hello(){
//     console.log("Hello World!");
// }

// hello();
// hello.call()
// hello.apply();

// var e1 = {
//     id: 1,
//     name: "Herin",
//     display: function () {
//         console.log(this);
//     }
// };

// var e2 = {
//     id: 2,
//     name: "Abhijeet",
//     display: function () {
//         console.log(this);
//     }
// };

// e1.display();
// e2.display();

var display = function (x, y) {
    console.log(this);
    console.log(x, y);
}

var e1 = {
    id: 1,
    name: "Herin"
};

var e2 = {
    id: 2,
    name: "Abhijeet"
};

// display(23, 45);
// display.call(e1, 2, 4);
// display.call(e2, 5, 6);

// var arr = [2, 4];
// display.call(e1, ...arr);
// display.apply(e1, arr);

e1.display = display.bind(e1);

e1.display(2,3);