var Counter = (function () {
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

var counter5 = new Counter(5);
console.log(counter5.next());
console.log(counter5.next());
console.log(counter5.prev());
console.log(counter5.next());

var counter10 = new Counter(10);
console.log(counter10.next());
console.log(counter10.next());
console.log(counter10.prev());
console.log(counter10.next());