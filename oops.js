// Classes are blueprints for creating objects.
// They encapsulate data and behavior in a a single entity.
// Classes can have properties and methods.
// The 'this' keyword refers to the current instance of the class.
// Classes can be instantiated to create objects.
// Classes can also inherit from other classes.
// Classes can have constructors to intialize properties.

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