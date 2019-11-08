var Person = (function () {
    function Person(name) {
        this._name = name;
        this._age = 0;
    }

    Object.defineProperty(Person.prototype, "Name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true
    });

    Object.defineProperty(Person.prototype, "Age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false
    })

    return Person;
})();

var p1 = new Person("Herin");
// console.log(p1.Name);
// p1.Name = "Abhijeet";
// console.log(p1.Name);

for (const key in p1) {
    console.log(key);
}