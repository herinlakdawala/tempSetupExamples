// // Types of Decorators
// // Class Decorator <T extends Function>(target:T) => T | void
// // Property Decorator (target: Object, propertyKey: string | symbol) => void;
// // Method Decorator <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;
// // Parameter Decorator (target: Object, propertyKey: string | symbol, parameterIndex: number) => void;

// function log<T>(target: T, key: string, descriptor: any) {
//     // console.log(descriptor.value);
//     var originalMethod = descriptor.value;

//     descriptor.value = function (...args: any[]) {
//         var a = args.map(a => JSON.stringify(a)).join();
//         console.log(key + " is called with arguments as " + a);
//         var result = originalMethod.apply(this, args);

//         // try {
//         //     var result = originalMethod.apply(this, args);
//         // } catch (e) {
//         //     console.log(e);
//         //     console.log("Some Error Occurred.");
//         // }

//         return result;
//     }

//     return descriptor;
// }

// class Calculate {
//     @log
//     add(x: number, y: number) {
//         // return x + y;
//         throw Error("Just for Fun...");
//     }

//     @log
//     sub(x: number, y: number) {
//         return x - y;
//     }
// }

// var c = new Calculate();
// console.log(c.add(23, 45));
// console.log(c.sub(23, 45));

// --------------------  Class Decorator

function CityDecorator<T extends { new(...args: any[]): {} }>(target: T) {
    return class extends target {
        city = "Pune";
    }
}

@CityDecorator
class MyPerson {
    name: string;

    constructor(n = "NA") {
        this.name = n;
    }
}

var c = new MyPerson("Herin");
console.log(c);
