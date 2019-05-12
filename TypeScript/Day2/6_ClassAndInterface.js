var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function (msg) {
        return "Hello";
    };
    Person.prototype.doWork = function () {
        return "I am working...";
    };
    return Person;
}());
var customer = {
    name: "Abhijeet",
    age: 34,
    greet: function (m) {
        return "Hi";
    },
    doShopping: function () {
        console.log("Let us go to a Mall");
    }
};
var Customer = (function () {
    function Customer(name, age) {
        this.name = name;
        this.age = age;
    }
    Customer.prototype.greet = function (msg) {
        return "Hello";
    };
    Customer.prototype.doWork = function () {
        return "I am working...";
    };
    Customer.prototype.doShopping = function () {
        console.log("Let us go to a Mall");
    };
    return Customer;
}());
//# sourceMappingURL=6_ClassAndInterface.js.map