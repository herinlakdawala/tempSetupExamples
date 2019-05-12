class Vehicle {
    constructor(m) {
        this._make = m || "Honda";
    }

    start() {
        return `${this._make}, engine started...`;
    }
}

class FourWheeler extends Vehicle {
    constructor(mk, md) {
        super(mk);
        this._model = md || "Civic";
    }

    move() {
        return "Moving like a car...";
    }

    start() {
        var r = super.start();
        return `${r}, model is ${this._model}`;
    }
}

var v = new FourWheeler("Ford", "Mustang");
console.log(v.start());
console.log(v.move());
