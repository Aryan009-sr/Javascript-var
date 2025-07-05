// Classes are blueprints for creating objects.
// They encapsulate data and behavior in a a single entity.
// Classes can have properties and methods.
// The 'this' keyword refers to the current instance of the class.
// Classes can be instantiated to create objects.
// Classes can also inherit from other classes.
// Classes can have constructors to intialize properties.

const create = require("prompt-sync");

// class car {
//     constructor(name, model, year) {
//         this.name = name;
//         this.model = model;
//         this.year = year;
//     }
//     startengine() {
//         console.log(`${this.name} ${this.model} is starting its engine.`);
//     }
// }

// const myCar = new car ("Toyota", "Corolla", 2020);
// const myCar2 = new car ("Honda", "Civic", 2021);
// myCar.startengine();
// myCar2.startengine();


// classes with private class fields
// class BankAccount {
//     #Balance = 0; // private field
//     constructor(accountNumber, accountHolder, intialBalance) {
//         this.accountNumber = accountNumber 
//         this.accountHolder = accountHolder;
//         this.#Balance = intialBalance;
//     }
//     deposit(amount) {
//         if (amount > 0) {
//             this.#Balance += amount;
//             console.log(`Deposited ${amount}. New balance is ${this.#Balance}`);
//         }
//     }
//     getBalance() {
//         return this.#Balance
//     }
// }
// const myAccount = new BankAccount(10041796143, "Prakhar Ajay Singh", 1000);
// myAccount.deposit(500);
// console.log(myAccount.getBalance());

//Inheritance in classes
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     speak() {
//         console.log(`${this.name} makes a sound.`);
//     }
// }
// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name); // Call the parent class's constructor
//         this.breed = breed;
//     }
//     speak() {
//         console.log(`${this.name} barks.`); // Override parent method
//     }
//     fetch() {
//         console.log(`${this.name} fetches the ball.`);
//     }
// }
// const myDog = new Dog('Buddy', 'Golden Retriever');
// myDog.speak(); // Buddy barks.
// myDog.fetch(); // Buddy fetches the ball.

// Polymorphism in classes
// class Shape {
//     draw() {
//         console.log("Drawaing the generic shape.");
//     }
// }
// class Circle extends Shape {
//     draw(){
//         console.log("Drawing a circle");
//     }
// }

// class Square extends Shape {
//     draw() {
//         console.log("Drawing a square");
//     }
// }
// function renderShape(shape) {
//     shape.draw();
// }

// const circle = new Circle();
// const square = new Square();
// const genericShape = new Shape();

// renderShape(circle);
// renderShape(square);
// renderShape(genericShape);

// Exercises
// class Book {
//     constructor(title, author, year) {
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }
//     getSummary() {
//         return `${this.title} by ${this.author}, published in ${this.year}`;
//     }
// }
// const book1 = new Book("1984", "George Drwell", 1949);
// const book2 = new Book("To kill a Mockingbird", "Harper Lee", 1960);
// console.log(book1.getSummary());
// console.log(book2.getSummary());


// Exercise 2: Create a class called 'Customer' with properties like 'name', 'email', and 'phone'. add a method to display customer details and further add a child class called 'PremiumCustomer' that inherits from the 'Customer' class and adds a property for 'membershipLevel'. The 'PremiumCustomer' Class should override the method to display customer details to include the membership level.
// class Customer {
//     constructor(name, email, phone) {
//         this.name = name;
//         this.email = email;
//         this.phone = phone;
//     }
//     displayDetails() {
//         return `Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}`;
//     }
// }
// class VIPCustomer extends Customer {
//     constructor(name, email, phone, vipLevel) {
//         super(name, email, phone);
//         this.vipLevel = vipLevel;
//     }
//     updatevipLevel(newLevel) {
//         this.vipLevel = newLevel;
//         console.log(`VIP Level updated to: ${this.vipLevel}`);
//     }
//     displayDetails() {
//         return `${super.displayDetails()}, VIP Level: ${this.vipLevel}`;
//     }
// }
// const vipCustomer1 = new VIPCustomer("Prakhar Ajay Singh", "qwerty@gmail.com", "9960288207", "Gold");
// console.log(vipCustomer1.displayDetails());
// console.log(`VIP Level: ${vipCustomer1.vipLevel}`);
// vipCustomer1.updatevipLevel("Platinum");
// console.log(vipCustomer1.displayDetails());

// Exercise 3: Create a class called 'Library' that manages a collection of books. The class should have properties for the library like 'title', 'author', 'year' and should have a method called 'getSummary' to return a summary of the book. Next we have to create a child class called 'Magazine' that inherits from the 'Library' class and adds a property for 'month' and 'issueNumber'. The 'Magazine class should override the 'getSummary' method to include the month and issue number.

// class Library {
//     constructor(title, author, year) {
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }
//     getSummary() {
//         return `${this.title} by ${this.author}, published in Year:  ${this.year}`;
//     }
// }

// class Magazine extends Library {
//     constructor(title, author, year, month, issueNumber) {
//         super(title, author, year);
//         this.month = month;
//         this.issueNumber = issueNumber;
//     }
//     getSummary() {
//         return `${super.getSummary()}, published in the month:  ${this.month}, Issue number ${this.issueNumber}`;
//     }
// }

// const magazine1 = new Magazine("Tech Today", "John Doe", 2023, "January", 5);
// console.log(magazine1.getSummary());

// CALL, APPLY AND BIND METHODS
// The call, apply and bind methods are used to change the context of 'this' in a function.
// The call method calls a function with a given 'this' value and arguments provided individually.
// The apply method calls a function with a given 'this' value and arguments provided as an array.
// The bind method returns a new function with a given 'this' value and arguments provided individually.

// function greet(greeting, punctuation) {
//     console.log(`${greeting}, ${this.name}${punctuation}`);
// }
// const person = {
//     name: "Prakhar Ajay Singh"
// };
// greet.call(person, "Hello", "!");
// greet.apply(person, ["Hi", "."]);
// const greetBound = greet.bind(person, "Hey", "?");
// greetBound();

// The call, apply and bind methods are useful for borrowing methods from other objects or for creating functions with a specific context.

// function createGreeting(firstName, LastName) {
//     const person = {
//         firstName: firstName,
//         LastName: LastName,
//     };
//     //Define greet function within createGreeting
//     function greet() {
//         console.log(`Hello, ${this.firstName} ${this.LastName}!`);
//     }
//     function callGreet() {
//         greet.call(person);
//     }
//     function applyGreet() {
//         greet.apply(person);
//     }
//     const boundGreet = greet.bind(person);
//     callGreet();
//     applyGreet();
//     boundGreet();
// };
// createGreeting("Prakhar", "Ajay Singh");

//Use of 'this' in arrow functions
// Arrow functions do not have their own 'this' context. They inherit 'this' from the parent scope.
// This means that 'this' in an arrow function refers to the 'this' value of the enclosing context.

// const obj = {
//     name: "Prakhar Ajay Singh",
//     greet: function() {
//         // Regular function
//         console.log(`Hello, ${this.name}!`);
//         const arrowGreet = () => {
//             // Arrow function
//             console.log(`Hello from arrow function, ${this.name}!`);
//         }
//         arrowGreet();
//     }
// }
// // arrowGreet();
// obj.greet();

// Few more examples of 'this' in different contexts
// function showThis() {
//     console.log(this);
// }
// const obj1 = {
//     name: "Prakhar",
//     show: showThis
// }
// const obj2 = {
//     name: "Ajay",
//     show: showThis
// }
// // showThis();
// obj1.show(); // 'this' refers to obj1
// obj2.show(); // 'this' refers to obj2
// In a regular function, 'this' refers to the global object (window in browsers).
// In a method, 'this' refers to the object that called the method.
// In an arrow function, 'this' refers to the enclosing context, not the object that called the function.

// Write a JavaScript function createCounter that:

// Initializes a property count to 0 within an object counterObj.
// Defines a function increment within createCounter that:
// Increments this.count by 1.
// Logs the current value of this.count.
// Returns the increment arrow function.

// function createCounter() {
//     const counterObj = {
//         count: 0,
//         increment: function() {
//             this.count += 1; // Increment the count property
//             console.log(`Current count: ${this.count}`); // Log the current count
//             return () => {
//                 this.count += 1; // Increment the count property again
//                 console.log(`Current count after arrow function: ${this.count}`); // Log the current count again
//             }
//         }

//     }
//     return counterObj.increment.bind(counterObj);
// }

// const counter = createCounter();
// counter();
// const increment = counter();
// increment();


// const obj = {
//     num: 10,
//     getNum: function() {
//         return this.num;
//     },
// };
// const obj2 = {num : 20};
// const result = obj.getNum.bind(obj2)();
// console.log(result); // 20

// const greet = function () {
//     console.log(`Hello, ${this.name}!`);
// };
// const person = {
//     name: "Prakhar Ajay singh"
// };
// const greetPrakhar = greet.bind(person);
// greetPrakhar();

// const obj = {
//     name: "john",
//     sayHello: () => {
//         console.log(`Hello, ${this.name}!`);
//     },
// };
// obj.sayHello();// This will log "Hello, undefined!" because arrow functions do not have their own 'this' context.
// // To fix this, we can use a regular function instead of an arrow function.
// const obj2 = {
//     name: "john",
//     sayHello: function() {
//         console.log(`Hello, ${this.name}!`);
//     },
// };
// obj2.sayHello();// This will log "Hello, john!" done.

// "use strict";
// function logThis() {
//     console.log(this);
// };
// function myFunction() {
//     logThis();
// }
// const someobj = new myFunction();
// // In strict mode, 'this' will be undefined in a regular function.
// // In non-strict mode, 'this' will refer to the global object (window in browsers).

// const person = {
//     name: "Prakhar Ajay Singh",
//     age: 25,
//     greet: function() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// };

// const student = Object.create(person);
// student.name = "Ajay Singh";
// student.age = 20;
// student.greet();
// student.__proto__.greet(); // This will call the greet method from the person object

//Prototype in javascript
// Every javascript object has a prototype.
// The prototype is an object that is associated with every function and object.
// The prototype is used to add properties and methods to an object.
// The prototype is used to implement inheritance in javscript.
// The prototype is used to share properties and metthods between objects.
// The prototype is used to implement polymorphism in javascript.
// The prototype is used to implement encapsulation in javasccript.
// The prototype is used to implememt abstraction in javascript.
//few examples of prototype in javascript

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// };
// Person.prototype.greet = function() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
// }
// const person1 = new Person("Naina singh", 25);
// const person2 = new Person("Bhavesh Singh", 30);
// const person3 = new Person("Bhaukal singh", 45);
// const person4 = new Person("Adrak singh", 50);
// person1.greet();
// person2.greet();
// person3.greet();
// person4.greet();

// In the above example, we created a constructor function Person that takes name and age as parameters. We then added a method greet to the prototype of the Person function. This allows us to create multiple instances of Person and share the greet method betweent them. When we call the greet method on person1 and person2, it logs the name and age of each person.