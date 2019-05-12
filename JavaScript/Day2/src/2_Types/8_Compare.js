function CL_Counter(by) {
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

function FN_Counter(by) {
    this._count = 0;
    this._by = by;

    this.next = function () {
        return this._count += this._by;
    }

    this.prev = function () {
        return this._count -= this._by;
    }
};

var PT_Counter = (function () {
    function Counter(by) {
        this._count = 0;
        this._by = by;
    };

    Counter.prototype.next = function () {
        return this._count += this._by;
    }

    Counter.prototype.prev = function () {
        return this._count -= this._by;
    }

    return Counter;
})();

class Counter {
    constructor(by) {
        this._count = 0;
        this._by = by;
    };

    next() {
        return this._count += this._by;
    }

    prev() {
        return this._count -= this._by;
    }
}

(function () {
    var clStTime = new Date();
    for (let i = 0; i < 200000; i++) {
        var obj = CL_Counter(i);
    }
    var clEnTime = new Date();

    var fnStTime = new Date();
    for (let i = 0; i < 200000; i++) {
        var obj = new FN_Counter(i);
    }
    var fnEnTime = new Date();

    var ptStTime = new Date();
    for (let i = 0; i < 200000; i++) {
        var obj = new PT_Counter(i);
    }
    var ptEnTime = new Date();

    var cStTime = new Date();
    for (let i = 0; i < 200000; i++) {
        var obj = new Counter(i);
    }
    var cEnTime = new Date();

    var clTime = clEnTime.getTime() - clStTime.getTime();
    var fnTime = fnEnTime.getTime() - fnStTime.getTime();
    var ptTime = ptEnTime.getTime() - ptStTime.getTime();
    var cTime = cEnTime.getTime() - cStTime.getTime();

    console.log("Closure: ", clTime);
    console.log("Function: ", fnTime);
    console.log("Prototype: ", ptTime);
    console.log("Class: ", cTime);
})();
