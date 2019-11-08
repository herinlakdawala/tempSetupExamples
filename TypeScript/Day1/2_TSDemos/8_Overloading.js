function Hello() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.length == 0)
        console.log("Hello World!");
    else if (args.length == 1)
        console.log("Hello,", arguments[0]);
    else
        throw Error("Invalid Arguments..");
}
Hello;
Hello();
Hello("Herin");
