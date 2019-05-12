var person = { age: 28 };

var validator = {
    set: function (target, key, value) {
        if (key === 'age') {
            if (typeof value !== "number" || Number.isNaN(value)) {
                throw ('Age must be a number');
            }
        }

        target[key] = value;
    }
};

var personProxy = new Proxy(person, validator);
// personProxy.age = "hi";
personProxy.age = 30;

console.log(person);
console.log(personProxy);


// class Person{

// }

// var p = new Person();