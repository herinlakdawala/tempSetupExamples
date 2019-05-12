// var obj1 = null;
// console.log(obj1);
// console.log(typeof obj1);

// var obj2 = new Object();
// console.log(obj2);
// console.log(typeof obj2);

// // JavaScript Object Literal
// var obj3 = {};
// console.log(obj3);
// console.log(typeof obj3);

var person = {
    id: 1,
    name: "Manish",
    city: "Pune",
    display: function () {
        console.log(this);
    }
}

// person.display();

console.log(person);
console.log(JSON.stringify(person));