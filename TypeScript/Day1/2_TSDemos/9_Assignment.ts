// function Reverse(str: string): Array<string>;
// function Reverse(strArr: string[]): Array<string>;

// function Reverse(strOrarr: any) {
//     if (typeof strOrarr == "string")
//         return strOrarr.split("").reverse();
//     else
//         return strOrarr.slice().reverse();
// }

// console.log(Reverse("Manish"));
// console.log(Reverse(["PQR", "XYZ", "ABC"]));
// console.log(Reverse(10));

// ------------------------------------------- TypeGuards

// var data: (number | string);
// data = 10;
// data = "Manish";

function Reverse(str: string): Array<string>;
function Reverse(strArr: string[]): Array<string>;

function Reverse(strOrarr: (string | string[])) {
    if (typeof strOrarr == "string")
        return strOrarr.split("").reverse();
    else
        return strOrarr.slice().reverse();
}

console.log(Reverse("Manish"));
console.log(Reverse(["PQR", "XYZ", "ABC"]));