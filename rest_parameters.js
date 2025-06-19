// function sumOfAllNumbers(...args) {
//     let sum = 0;
//     for (let value of args) {
//         sum = sum + value;
//     }

//     return sum;
// }
// const result = sumOfAllNumbers(1,2,3,4,5);
// console.log(result);

//exmaple number : 2
//Mixing with named parameters:

// function greetPeople(greetings, ...names) {
//     if (names.length === 0) {
//         return `${greetings} everyone!`;
//     } else {
//         return `${greetings} ${names} !`;
//     }
// }

// console.log(greetPeople("Goodmoring"));
// console.log(greetPeople("hello", "Alice", "bob"));