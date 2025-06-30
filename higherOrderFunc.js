// //A higher order function could be defined as something that accepts another function as its parameters or returns a function as an output

// // Call back function ==== function which is passed as the argument to the other function is called as call back function

// //Example
// //Takes one or more functions as arguments: These functions are often referred to as callback functions. The higher-order function uses these callbacks to perform operations or customize its behavior.


// // function operateOnNums (arr, operation) {
// //     const result = [];
// //     for (let i = 0; i < arr.length; i++) {
// //         result.push(operation(arr[i]));
// //     }
// //     return result;
// // }
// // function square(num) {
// //     return num * num;
// // }

// // const digits  = [1,2,3];
// // const res = operateOnNums(digits, square);
// // console.log(res);
// // const numbers = [1,3,6,9,12,15];
// // const res2 = operateOnNums(numbers, square);
// // console.log(res2);

// // Returns a function as its result: This allows for the creation of function factories or the application of function composition, where functions can be dynamically generated based on certain criteria.

// // function createMultiplier(factor) {
// //     return function (number){
// //         return number * factor;
// //     };
// // }

// // const result = createMultiplier(5);
// // console.log(result(10));

// // Best examples of higher order functions are: Map(), Filter(), reduce() and forEach(); let's study them one by one

// //Practice question
// // Create a higher order function named addFiveToAll that takes an array and element is increased by 5. Then create an another function that takes the addFiveToAll function as its first argument and prints the array - input = [1,2,3,4,5] => [6,7,8,9, 10];

// // function addFiveToAll(array) {
// //     let result = [];
// //     for (let i = 0; i< array.length; i++) {
// //         result.push(array[i] + 5);
// //     }
// //     return result;
// // }
// // function printNumbers(transformfunc, array) {
// //     const transformedArray = transformfunc(array);
// //     for (let i = 0; i < transformedArray.length; i++) {
// //         console.log(transformedArray[i]);
// //     }
// // }
// // const numbers = [1,2,3,4,5];
// // printNumbers(addFiveToAll, numbers);

// //2. Write a set of javascript Functions that can take an array of numbers, double each number, and then only print the numbers that are greater than 10.

// // function doubleNumbers(array) {
// //     let doubleResult = [];
// //     for (let i = 0; i < array.length; i++) {
// //         doubleResult.push(array[i] * 2);
// //     }
// //     return doubleResult;
// // }
// // function greaterThanTen(modifiedfunc, array) {
// //     const modifiedArray = modifiedfunc(array);
// //     for (let i = 0;i < modifiedArray.length; i++){
// //         if (modifiedArray[i] > 10){
// //             console.log(modifiedArray[i]);
// //         }
// //     }
// // }

// // const firstNum = [2,3,5,6,8,9];
// // greaterThanTen(doubleNumbers, firstNum);

// //MAP METHOD-used on array to perform some function and then returns a new transformed array

// // basic syntax
// // arr.map(callback(currentValue, index, array),thisArg);
// //1. Squaring numbers using map method
// const numbers = [1,2,3,4,5];
// const newNumbers = numbers.map(number => number * number);
// console.log(newNumbers);

// const num = [1,2,3,4,5,6,7,8,9,10];
// const plusFfive = num.map (v => v + 55);
// console.log(plusFfive);

// //2. Extracting properties from object
// // const users = [
// //     {id: 1, name: 'John', age: 30},
// //     {id: 2, name: 'Bob', age: 44},
// //     {id: 3, name: 'Alice', age: 20}
// // ];
// // const userNames = users.map(user => user.name);
// // console.log(userNames);


// //3. Doubling and adding an index
// // const rates = [10, 20, 30];
// // const modifiedRates = rates.map((cv, ind) => (cv*2) + ind);
// // console.log(modifiedRates);

// function ary(){
//      a = 100;
//      console.log(a);
//      var a = 10;
//      var a = 200;
//      console.log(a);
// }
// console.log(a);
// var a = 100;
// ary();
// console.log(a);

// function one(){
//     this.name = 'Prakhar singh';
//     this.age = 27,
//     this.email = "Prakharsingh9532@gmail.com"
// }
// let it = new one();
// let its = new one();
// console.log(it);
// console.log(its);

function two(username, age, kaam){
    this.name = username;
    this.age = age;
    this.kaam = kaam;
    this.greet = function() {console.log("Hello")}
}

let write = new two('Prakhar', 27, 'majdoor');
let write2 = new two('Bob',23, 'kaarigar');
console.log(write);
console.log(write2);

// ------------------------------------------

class Person {
    constructor(username, age , kaam) {
        this.name = username;
        this.age = age;
        this.kaam = kaam;
    }
    greeting() {console.log("Welcome to learning classes of javascript.")};
}
let p1 = new Person('Prakhar', 35, 'Architect');
let p2 = new Person("Bob", 34, 'Electrician');
console.log(p1);
console.log(p2);