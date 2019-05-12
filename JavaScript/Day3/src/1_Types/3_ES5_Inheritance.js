var Vehicle = (function () {
    function Vehicle(m) {
        this._make = m || "Honda";
    }

    Vehicle.prototype.start = function () {
        return `${this._make}, engine started...`;
    }

    return Vehicle;
})();

var FourWheeler = (function () {
    function FourWheeler(mk, md) {
        Vehicle.call(this, mk);
        this._model = md || "Civic";
    }

    return FourWheeler;
})();

FourWheeler.prototype = Object.create(Vehicle.prototype);
FourWheeler.prototype.constructor = FourWheeler;

FourWheeler.prototype.start = function () {
    var r = Vehicle.prototype.start.call(this);
    return `${r}, model is ${this._model}`;
}

FourWheeler.prototype.move = function(){
    return "Moving like a car...";
}

var v = new FourWheeler("Ford", "Mustang");
console.log(v.start());
console.log(v.move());
