// Traditional functions

// const numbers = [1,2,3,4,5];
// const doubled = numbers.map(function(num) {
//     return num * 2;
// });
// console.log(doubled);

// Arrow functions
// const numbers = [1,2,3,4,5];
// const doubled = numbers.map (num => num * 2);
// console.log(doubled);

// const sum = numbers.map (num => num + 4);
// console.log(sum);

// Using filter method
// filtering even numbers from an array
// const nums = [1,2,3,4,5,6,7,8,9,10];
// const evenNumbersTraditional = nums.filter(function (num){
//     return num % 2 === 0;
// });
// console.log(evenNumbersTraditional);

// //arrow function
// const evenNumbers = nums.filter(num => num % 2 === 0
// );

// Reduce method
// Calculate the sum of all numbers in an array
// Traditional method

// const prices = [10,20,30,40,50];
// const totalTraditional = prices.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue
// }, 0);
// console.log(totalTraditional);

// Arrow function
// const prices = [10, 20,30,40];
// const totalArrow = prices.reduce((acc, curr) => acc + curr, 0);
// console.log(totalArrow);

// Using .forEach()
// Iterate over an array of names and log a greetng for each

// const names = ["Alice", "Bob", "john Doe"];
// names.forEach(function(name) {
//     console.log("hello, " + name + "!");
// });

// Arrow method
    // const names = ["Alice", "Bob", "John Doe"];
    // names.forEach(name => console.log(`Hello, ${name}`));