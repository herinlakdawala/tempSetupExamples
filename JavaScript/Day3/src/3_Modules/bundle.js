(function () {
    'use strict';

    // Case 1 - Default Export
    // export default function square(x) {
    //     return x * x;
    // }

    // Case 2 - Named Export
    function abc(x) {
        return x * x;
    }

    function square(x) {
        return x * x;
    }

    function check(x) {
        return `${x} is checked`;
    }

    // Case 3  Default and Named
    // export default function square(x) {
    //     return x * x;
    // }

    // export function check(x) {
    //     return `${x} is checked`;
    // }

    // Case 1 - Default Import
    console.log(abc(3)); 
    console.log(square(4));
    console.log(check(4));

    // import s, { check } from './lib.js';
    // console.log(s(4));
    // console.log(check(4));

    // rollup main.js --output.format iife --output.file bundle.js

}());
