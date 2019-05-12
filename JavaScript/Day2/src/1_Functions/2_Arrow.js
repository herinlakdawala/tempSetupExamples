function Add1(x, y) {
    return x + y;
}

var Add2 = function (x, y) {
    return x + y;
}

var Add3 = (x, y) => {
    return x + y;
}

var Add4 = (x, y) => x + y;

console.log(Add1(2, 3));
console.log(Add2(2, 3));
console.log(Add3(2, 3));
console.log(Add4(2, 3));