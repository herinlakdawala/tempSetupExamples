interface IPerson {
    name: string;
    age: number;
    greet: (msg: string) => string;
}

interface IJob {
    doWork(): string;
}

class Person implements IPerson, IJob {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(msg: string): string {
        return "Hello";
    }

    doWork(): string {
        return "I am working...";
    }
}

interface ICustomer extends IPerson {
    doShopping(): void;
}

var customer: ICustomer = {
    name: "Abhijeet",
    age: 34,
    greet: function (m) {
        return "Hi";
    },
    doShopping: function () {
        console.log("Let us go to a Mall");
    }
};

class Customer implements ICustomer, IJob {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(msg: string): string {
        return "Hello";
    }

    doWork(): string {
        return "I am working...";
    }

    doShopping() {
        console.log("Let us go to a Mall");
    }
}

// let c1: ICustomer = new Customer("ABC", 25);

// let p1: IPerson = new Customer("ABC", 25);
