function Hello(): void;
function Hello(n: string): void;

function Hello(...args: Array<string>) {
    if (args.length == 0)
        console.log("Hello World!");
    else if (args.length == 1)
        console.log("Hello,", arguments[0]);
    else
        throw Error("Invalid Arguments..");
}

Hello

Hello();
Hello("Manish");
// Hello("Manish", "Sharma");

