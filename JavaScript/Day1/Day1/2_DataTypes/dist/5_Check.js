"use strict";

function hello(name) {
  console.log("Hello,", name);
  console.log("Extra Parameters----");

  for (var i = 0; i < (arguments.length <= 1 ? 0 : arguments.length - 1); i++) {
    console.log("\t" + (i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]));
  }
} // hello();


hello("Manish");
hello("Abhijeet", "Pune");
hello("Abhijeet", "Pune", 411038);