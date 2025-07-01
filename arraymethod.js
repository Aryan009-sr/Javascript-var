// function greet(name){
//     console.log(`Hello, ${name}`);
// };
// const greetings = greet('Prakhar');
// console.log(greetings);


//Using filter and reduce method to filter out even numbers from the array and summing up that even numbers using reduce method.

// Filteing out even numbers from the array of numbers

// const numbers  =[1,2,3,4,5,6,7,8,9,10];
// const evenNumbers = numbers.filter (num => num % 2 === 0);
// console.log(evenNumbers);

// // Reducing the sum of elements into the single output

// const sumArrays = evenNumbers.reduce ((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sumArrays);

// // Chained version of the same problem

// const chainedResult = numbers.filter(num => num % 2 === 0).reduce((acc, curr) => acc + curr, 0);
// console.log(`The chained result would be:  ${chainedResult}`);

// Example no 2 - Similar problem with odd numbers and multiplication of odd numbers 

//first use filter to odd man out odd numbers
//then use reduce method to reduce product of odd numbers in the filtered array

// const digits = [1,2,3,4,5,6,7,8,9,10];
// const oddNumbers = digits.filter(digit => digit % 3 === 0);
// console.log(oddNumbers);

// const multiplyDigits = oddNumbers.reduce((acc, curr)=> acc * curr, 1);
// console.log(multiplyDigits);

// const chainedMultiple = digits.filter(digit => digit % 3 === 0).reduce((acc, curr)=> acc * curr, 1);
// console.log(chainedMultiple);


//Example no - 3: Calculate Total sales for products in stock

// const products = [
//     {id: 1, name:'Laptop', price: 1200, inStock:true },
//     {id: 2, name: "Mouse", price: 30, inStock: false},
//     {id: 3, name: "keyboard", price:50 , inStock:true },
//     {id: 4, name: "Monitor", price: 500, inStock: true},
//     {id: 5, name: "Webcam", price: 600, inStock: false},
// ];

// //filter stocked products
// const stockedItems = products.filter (product => product.inStock);
// console.log("Products available in stock: ",stockedItems);
// // Reduce the in Stock products to their total price
// const reducedItems = stockedItems.reduce((acc , product)=> acc + product.price, 0);
// console.log('The total items are priced at :' ,reducedItems);
// //Chained version

// const totalStockValueChained = products.filter (product => product.inStock).reduce((acc, product)=> acc + product.price, 0);
// console.log(totalStockValueChained);


// // module test 
// const numbers = [5,2,8,1,9];
// const doubledNumbers = numbers.map(num => num * 2);
// const sortedNumbers = doubledNumbers.sort();
// console.log(sortedNumbers);

// const numbers = [1,2,3,4,5];
// const doubledNumbers = numbers.map(num => num * 2);
// const evenDoubledNumbes = doubledNumbers.filter(num => num % 2 === 0);
// console.log(evenDoubledNumbes);


// function add(a,b) {
//     return a + b;
// }
// function multiply(a, b){
//     return a * b;
// }
// const result = multiply(add(2,3), 4);
// console.log(result);


// const numbers = [1,2,3,4,5];
// const [first, second, ... rest] = numbers;
// console.log(first, second , rest);

// const str  = 'hello';
// const chars = [...str];
// console.log(chars);

// function greet(name) {
//     return "Hello, "+ name + "!";
// }
// const result = greet();
// console.log(result);


// const array = ['apple', 'banana', 'orange'];
// const firstFruit = array.shift();
// console.log(array, firstFruit);

// const numbers  = [1,2,3,4];
// function sum(... args){
//     return args.reduce((acc, num) => acc+ num , 0);
// }
// const result = sum(... numbers);
// console.log(result);

// const people = [
//     {name: 'Alice',age: 25},    
//     {name: 'Bob',age: 30},    
//     {name: 'Charlie',age: 35},    
// ];
// const oldestPerson = people.reduce((oldest, person) => 
//     person.age > oldest.age ? person : oldest
// );
// console.log(oldestPerson);

// const greeting = (name) => `Hello , ${name}!`;
// console.log(greeting("Alice"));

// var x = 5;
// (function() {
//     var x = 10;
//     console.log(x);
// })();
// console.log(x);

// const products = [
//     { name: 'Apple', price:0.5 , inStock:true },
//     { name: 'Banana', price: 0.25, inStock: false },
//     { name: 'Orange', price: 0.75, inStock:true }
// ];
// const availableProducts = products.filter((product)=> product.inStock);
// console.log(availableProducts);


// const arr = ["apple", "banana", "cherry"];
// const capitalizedArr = arr.map((str) => str.toUpperCase());
// console.log(capitalizedArr);

// const number = [1,2,3,4,5];
// const [first, ... rest] = number;
// console.log(first,rest);

const fruits = ['apple', 'banana', 'cherry'];
for (const fruit of fruits){
    console.log(fruit);
}