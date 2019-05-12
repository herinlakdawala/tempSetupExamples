// var numArr1 = [];
// var numArr2: number[];
// var numArr3: Array<number>;

// Rest Parameters
function Average(...args: number[]) {
    var sum = 0;

    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }

    var length = args.length;
    if (length > 0)
        return sum / length;
    else
        return sum;
}

console.log(Average());
console.log(Average(1));
console.log(Average(1, 2));
console.log(Average(1, 2, 3, 4, 5));
console.log(Average(1, 2, 3, 4, 5, 6, 7, 8, 9));

var nArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(Average(...nArr));         // SPread OPerator
