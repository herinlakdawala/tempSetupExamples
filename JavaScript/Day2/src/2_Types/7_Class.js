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