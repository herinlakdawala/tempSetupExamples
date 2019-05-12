// Case 1 - Default Export
// export default function square(x) {
//     return x * x;
// }

// Case 2 - Named Export
export default function abc(x) {
    return x * x;
}

export function square(x) {
    return x * x;
}

export function check(x) {
    return `${x} is checked`;
}

// Case 3  Default and Named
// export default function square(x) {
//     return x * x;
// }

// export function check(x) {
//     return `${x} is checked`;
// }
