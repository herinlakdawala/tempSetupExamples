// var employees = new Array();
// var employees = new Array(3);
// var employees = [];

// employees[0] = "Manish";
// employees[1] = "Abhijeet";
// employees[2] = "Ramakant";
// employees[3] = "Subodh";

// // console.log(employees.length);

// for (let i = 0; i < employees.length; i++) {
//     console.log(employees[i]);
// }

var employees = [
    { id: 1, name: "Manish" },
    { id: 2, name: "Abhijeet" },
    { id: 3, name: "Ram" },
    { id: 4, name: "Umar" },
    { id: 5, name: "Malik" },
    { id: 6, name: "Anurag" }
];

// for (let i = 0; i < employees.length; i++) {
//     console.log(employees[i].id + "\t" + employees[i].name);
// }

// for (const key in employees) {
//     console.log(employees[key].id + "\t" + employees[key].name);
// }

// employees.forEach(function (item, index, arr) {
//     console.log(item.id + "\t" + item.name);
// });

// employees.forEach((item, index, arr) => {
//     console.log(item.id + "\t" + item.name);
// });

// for (const item of employees) {
//     console.log(item.id + "\t" + item.name);
// }


// ES6
var result = employees.find((item) => item.id == 3);
console.log(result);

