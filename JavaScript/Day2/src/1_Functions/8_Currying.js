// function greetings(message, name) {
//     console.log(`${message}, ${name}`);
// }

// greetings("Good Morning", "Abhijeet");
// greetings("Good Morning", "Ramakant");
// greetings("Good Morning", "Subodh");

function greetings(message) {
    return function(name){
        console.log(`${message}, ${name}`);
    }
}

// var mGreet = greetings("Good Morning");
// mGreet("Abhijeet")
// mGreet("Ramakant");
// mGreet("Subodh");

function greetings(message, name) {
    console.log(`${message}, ${name}`);
}

var mGreet = greetings.bind(this, "Good Morning");
mGreet("Abhijeet")
mGreet("Ramakant");
mGreet("Subodh");

function Converter(toUnit, factor, offset, input) {
    return ([((offset + input) * factor).toFixed(2), toUnit].join(""));
}

var MilesToKmConverter = Converter.bind(this, ' km', 1.6, 0);
console.log(MilesToKmConverter(10));
console.log(MilesToKmConverter(20));
console.log(MilesToKmConverter(100));

var PoundsToKgConverter = Converter.bind(this,' kg', 0.45460, 0);
console.log(PoundsToKgConverter(10));
console.log(PoundsToKgConverter(5));

// var kms = Converter(' km', 1.6, 0, 10);
// console.log(kms);

// var kms = Converter(' km', 1.6, 0, 20);
// console.log(kms);

// var kgs = Converter(' kg', 0.45460, 0, 5);
// console.log(kgs);

// var c = Converter(' deg C', 0.5556, -32, 98);
// console.log(c);
