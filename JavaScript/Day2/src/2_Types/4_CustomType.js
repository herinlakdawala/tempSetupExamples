// Constructor Function - PLease donot use, will increase memory usage, instead use prototype
function Person(name) {
    this._name = name;

    this.getName = function () {
        return this._name.toUpperCase();
    }

    this.setName = function (name) {
        this._name = name;
    }
}

var p1 = new Person("Herin");
console.log(p1.getName());
p1.setName("Abhijeet");
console.log(p1.getName());

var p2 = new Person("Subodh");
console.log(p2.getName());
p2.setName("Ramakant");
console.log(p2.getName());
