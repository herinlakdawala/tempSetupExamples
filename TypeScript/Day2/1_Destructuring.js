var calculator = (function () {
    function add(x, y) {
        return x + y;
    }
    function sub(x, y) {
        return x - y;
    }
    function mul(x, y) {
        return x * y;
    }
    function div(x, y) {
        return x / y;
    }
    return {
        add: add, sub: sub, mul: mul
    };
})();
var arr = [10, 20, 30, 40, 50];
var employees = [
    { id: 1, name: "Herin" },
    { id: 2, name: "Ram" },
    { id: 3, name: "Abhijeet" },
    { id: 4, name: "Pravin" },
    { id: 5, name: "Subodh" }
];
var e1 = employees[0], others = employees.slice(1);
e1.id = 100;
console.log(e1);
console.log(employees);
//# sourceMappingURL=1_Destructuring.js.map