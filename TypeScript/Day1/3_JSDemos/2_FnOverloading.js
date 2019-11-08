// function Hello() {
//     console.log("Hello World!");
// }

// function Hello(name) {
//     console.log("Hello,", name);
// }

function Hello() {
    // console.log(arguments);
    if (arguments.length == 0)
        console.log("Hello World!");
    else if (arguments.length == 1)
        console.log("Hello,", arguments[0]);
    else
        throw Error("Invalid Arguments..");
}

Hello();
Hello("Herin");