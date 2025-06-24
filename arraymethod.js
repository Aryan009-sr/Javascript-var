// let arr = [1,2,3,4,5];
// console.log(arr.push(23,43,5));
// console.log(arr);

const { jsx, jsxs } = require("react/jsx-runtime");

// console.log(arr.pop());
// console.log(arr);
// console.log(arr.unshift(90, 554,34));
// console.log(arr);

// console.log(arr.shift(65,4543,343));
// console.log(arr);

//Accessing array elements
// let fruits = ['apple', 'guava', 'kiwi'];
// console.log(fruits[0]);
// console.log(fruits[2]);
// console.log(typeof(fruits.length));
// console.log(fruits[3]);

// COMMOON ARRAY METHODS
//THESE METHODS CHANGE THE ORIGINAL ARRAY-INSHORT MODIFY IT

//1. PUSH METHOD
// const colors = ['red', 'blue'];
// colors.push("green", "aqua");
// console.log(colors);
// //2.POP METHOD
// const newColors = colors.pop();
// console.log(newColors);
// console.log(colors);

//3. UNSHIFT METHOD-ADDS ELEMENTS AT THE BEGINNING OF AN Array
// const food = ['pizza', 'burger', 'sandwich', 'tacos'];
// food.unshift("paneer bhurji", "chicken tikka");
// console.log(food);
// console.log(typeof(food));

// //4. SHIFT METHOD - removes the first element from an array
// const bedakhal = food.shift();
// console.log(bedakhal);
// console.log(food);
// console.log(typeof(food));

// 5. SPLICE- A VERSATILE METHOD FOR ADDING OR REMOVING ELEMENTS FROM ANY POSITION

//const number = [1,2,3,4,5];
// number.splice(3, 2)// output 1,2,3
// console.log(number);
// number.splice(1 , 3)// output 1,
// console.log(number);
// number.splice(1,0, 45,54);
// console.log(number);
// number.splice(0,3,4,5,6);
// console.log(number);
// number.splice(2, 3 , 6,7,8);
// console.log(number);

//6.SORT METHOD
// const names = ['prakhar' , 'ajay', 'singh'];
// names.sort();
// console.log(names);

// const numbers = [45,343,23255,22,56];
// numbers.sort();
// console.log(numbers);

//NON-MUTATOR ARRAY - THIS METHODS DOESN'T CHANGE THE ORIGINAL ARRAY, THEY RETURN A NEW ARRAY
// CONCAT
// const array = [2,3];
// const array2 = [4,5];
// const newArr = array.concat(array2, [5,6]);
// console.log(newArr);
// console.log(array);

// 2 . SLICE METHOD-returns a copy of a portion of an array into a new array object

// const fruits = ["apple", "banana", "cherry", "kiwi", "grapes", "Watermelon"];
// console.log(fruits.slice(0, 4));
// console.log(fruits);

// 3. JOIN METHOD
// const words = ["hello", "world"];
// const newWords = (words.join("-"));
// console.log(newWords);

// //4. INDEXOF method
// const numbers = [10, 20, 30, 40, 50];
// console.log(numbers.indexOf(40));
// console.log(numbers.indexOf(20, 2));
// console.log(numbers.indexOf(59));

// HIGHER ORDER FUNCTIONS
// This functions take call back function as an argument
//==============================

//1. FOR EACH METHOD

//Example - 1
// const numbers = [1,2,3];
// numbers.forEach((num, index) => {
//     console.log(`Element at index ${index}: ${num}`);
// });

//Example - 2
// const fruits = ["apple", "banana", "grapes"];
// console.log("--iterating through fruits--");
// fruits.forEach((fruit, index) => {
//     console.log(`Element at index ${index}: ${fruit}`);
// });

//Example - 3
// const numbers = [10, 20, 30];
// console.log("---------doubling numbers and showing original array as well-----------");
// numbers.forEach((num, idx, arr) => {
//     console.log(`Original array element at ${idx} is ${arr[idx]}, Doubled: ${num * 2}`);
// });

//Example - 4
// const scores = [50, 75, 80];
// console.log("========Applying the bonus to scores========");
// scores.forEach((score, index, arr) => {
//     arr[index] = score + 5;
// });
// console.log(scores);

//Example no - 5 - forEach with objects in an array
// const products = [
//     {name : "Laptop", price: 54000},
//     {name : "Mouse", price: 2000},
//     {name : "keyboard", price: 2300}
// ]

// console.log("----------displaying product details=======");
// products.forEach(product => {
//     console.log(`${product.name}: ${product.price}`);
// });


// USE OF MAP METHOD 
// EXAMPLES TO UNDERSTAND

// Example - 1: Simple transformation of doubling the numbers

// const number = [1,2,3,4,5];
// console.log("==doubling numbers with map---");
// const doubledNumbers = number.map(function(num) {
//     return num * 2;
// });
// console.log("original number: ", number);
// console.log("Doubled numbers: ", doubledNumbers);

//Example no 2: Transforming Objects in an array
// const users = [
//     {id: 1, name: "Alice", email: "abc@gmail.com"},
//     {id: 2, name: "Bob", email: "cde@gmail.com"},
//     {id: 3, name: "John", email: "ghf@gmail.com"}
// ];

// const userName = users.map(user => user.name);
// console.log(users);
// console.log(userName);

// console.log("======creating a new array for simplified user data");
// const simplifiedUsers = users.map(user => ({
//     id: user.id,
//     initial: user.name.charAt(0)
// }));

// console.log("Simplified users: ", simplifiedUsers);


//Example no 3: Using index and array arguments
// const items = ["A", "B", "C"];
// const formattedItems = items.map((item, index) => {
//     return `${index + 1}. ${item}`;
// })
// console.log("Formatted items: ", formattedItems);

// Revision of splice method
// const arr = [1,2,3,4,5];
// arr.splice(0, 3);
// console.log(arr);// output should be [4,5];

// arr.splice(0,4,10,11,12,13, 14);
// console.log(arr)//output: 5 and other added elements

// tospliced
// const months = ["jan", "march", "April", "May"];
// // inserting an element at index 1;
// const months2 = months.toSpliced(1, 0, 'feb');
// console.log(months2);
// // Deleting two element starting from index 2
// const months3 = months2.toSpliced(2,2);
// console.log(months3);
// // Replacing one element at index 1 one with two elements
// const months4 = months3.toSpliced(1,1,'feb', 'mar');
// console.log(months4);
// // Original array is not modified
// console.log(months)


// Write a JavaScript function processArray(arr) that takes an array of numbers as input and performs the following tasks:

// Use sort() to sort the array in ascending order.
// Use reverse() to reverse the sorted array.
// Use Math.max() to find the maximum value in the array.
// Use Math.min() to find the minimum value in the array.
// Use the concept of creating a sorted copy of the array (tosorted()).


// function processArray(arr) {
//     console.log("Original array:", arr);

//     arr.sort((a, b) => a - b);
//     console.log("Sorted array in ascending order:", arr);

//     const reversedArray = [...arr].reverse();
//     console.log("Reversed sorted array:", reversedArray);

//     const maxValue = Math.max(...arr);
//     console.log("Maximum value in the array:", maxValue);

//     const minValue = Math.min(...arr);
//     console.log("Minimum value in the array:", minValue);

//     const sortedCopy = [...arr];
//     console.log("Sorted copy of the original array:", sortedCopy);

//     return {
//         originalArray: arr,
//         sortedArray: arr,
//         reversedArray: reversedArray,
//         maxValue: maxValue,
//         minValue: minValue,
//         sortedCopy: sortedCopy
//     };
// }

// const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
// console.log(processArray(arr));


// const obj = {
//     a: 1,
//     b: 2, 
//     c: 3
// };
// let sum = 0;
// for (let key in obj) {
//     sum += obj[key];// sum = sum + ojb[key]-> 1 + 2-> 3 + 3 -> 6
// }
// console.log(sum);

// const arr = [1,2,3,4,5];
// let sum = 0;
// for (let i = 0; i< arr.length;i++) {
//     sum += arr[i];
// }
// console.log(sum);

// const fruits = ['apple', 'banana', 'cherry'];


// let result = '';
// for (let fruit of fruits) {
//     result = result + fruit + ',';
// }
// console.log(result);

// Few examples of for... of method
//BAsic iteration over array elments 
// const fruits = [ 'apple', 'banana', 'guava', 'kiwi'];
// console.log("Using for...of with fruits");
// for (const fruit of fruits ) {
//     console.log(fruit);
// };

//Iterating over an array of numbers and performing an operation

// const prices = [11.50, 45.05, 56.94];
// let total = 0;

// console.log("\n---Using for... of loop to iterate over the array to find sum of all given prices that is total price------->")
// for (const price of prices ) {
//     total += price;// total = total + price with each iteration
//     console.log(`Current price: ${price}, Running total: ${total}`);
// }
// console.log(`Final total output is : ${total.toFixed(2)}`);

// Getting both index and values using for...of method
// const colors = ['red', 'blue', 'green'];
// console.log("Using for...of loop ");
// for (const [index,color] of colors.entries()) {
//     console.log(`Colors at index ${index}: ${color}`)
// }


// const fruits = ['apple', 'banana', 'grapes', 'kiwi'];
// console.log("Again using for...of method to access index with values.")

// for (const [index, fruit] of fruits.entries()) {
//     console.log(`Fruits at index ${index}: ${fruit}`);
// }
// console.log(typeof(fruits));
// console.log(fruits.length);
// fruits.push("PineApple");
// console.log(fruits);
// // fruits.splice(0, 3);
// // console.log(fruits);
// fruits.forEach((index, value) => {
//     console.log(`${index}: ${value}`);
// })

// FOR IN LOOP IS RECOMMENDED WHERER WE HAVE TO ITERATE THROUGHT AN OBJECT AND AVOIDED FOR USING ON ARRAYS