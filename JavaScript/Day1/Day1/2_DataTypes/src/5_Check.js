function hello(name, ...args) {
    console.log("Hello,", name);
    console.log("Extra Parameters----");
    for (let i = 0; i < args.length; i++) {
        console.log("\t" + args[i]);
    }
}

// hello();
hello("Manish");
hello("Abhijeet", "Pune");
hello("Abhijeet", "Pune", 411038);