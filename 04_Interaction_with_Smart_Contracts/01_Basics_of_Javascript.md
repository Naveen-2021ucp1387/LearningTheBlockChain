# JavaScript Basics

This guide covers the basics of JavaScript, including its syntax, data types, operators, control structures, functions, and more.

## Table of Contents

1. [Introduction](#introduction)
2. [Variables](#variables)
3. [Data Types](#data-types)
4. [Operators](#operators)
5. [Control Structures](#control-structures)
6. [Functions](#functions)
7. [Objects](#objects)
8. [Arrays](#arrays)
9. [ES6 Features](#es6-features)
10. [Conclusion](#conclusion)

## Introduction

JavaScript is a versatile, high-level, interpreted programming language that is widely used for web development. It allows you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.

## Variables

Variables are used to store data values. In JavaScript, you can declare variables using `var`, `let`, or `const`.

```javascript
var x = 5;
let y = 10;
const z = 15;
```

- `var` is function-scoped and can be redeclared and updated.
- `let` is block-scoped and can be updated but not redeclared.
- `const` is block-scoped and cannot be updated or redeclared.

## Data Types

JavaScript supports various data types including:

- **Primitive Data Types**: Number, String, Boolean, Undefined, Null, Symbol (ES6)
- **Non-Primitive Data Types**: Object, Array

### Number

```javascript
let num = 100;
```

### String

```javascript
let str = "Hello, World!";
```

### Boolean

```javascript
let isTrue = true;
let isFalse = false;
```

### Undefined

```javascript
let x;
console.log(x); // Output: undefined
```

### Null

```javascript
let y = null;
```

### Symbol (ES6)

```javascript
let sym = Symbol('unique');
```

### Object

```javascript
let obj = {
  name: "John",
  age: 30
};
```

### Array

```javascript
let arr = [1, 2, 3, 4, 5];
```

## Operators

### Arithmetic Operators

```javascript
let a = 10;
let b = 5;

console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Modulus
console.log(a ** b); // Exponentiation
```

### Comparison Operators

```javascript
console.log(a == b); // Equal to
console.log(a != b); // Not equal to
console.log(a === b); // Strict equal to
console.log(a !== b); // Strict not equal to
console.log(a > b); // Greater than
console.log(a < b); // Less than
console.log(a >= b); // Greater than or equal to
console.log(a <= b); // Less than or equal to
```

### Logical Operators

```javascript
let c = true;
let d = false;

console.log(c && d); // Logical AND
console.log(c || d); // Logical OR
console.log(!c); // Logical NOT
```

## Control Structures

### Conditional Statements

#### if Statement

```javascript
if (a > b) {
  console.log("a is greater than b");
}
```

#### if...else Statement

```javascript
if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is not greater than b");
}
```

#### if...else if...else Statement

```javascript
if (a > b) {
  console.log("a is greater than b");
} else if (a < b) {
  console.log("a is less than b");
} else {
  console.log("a is equal to b");
}
```

#### switch Statement

```javascript
let day = 2;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(dayName);
```

### Looping Statements

#### for Loop

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

#### while Loop

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

#### do...while Loop

```javascript
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);
```

#### for...in Loop

```javascript
let person = {name: "John", age: 30, city: "New York"};
for (let key in person) {
  console.log(key + ": " + person[key]);
}
```

#### for...of Loop (ES6)

```javascript
let numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
  console.log(number);
}
```

## Functions

Functions are blocks of code designed to perform a particular task. They are executed when they are called.

### Function Declaration

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // Output: 5
```

### Function Expression

```javascript
let subtract = function(a, b) {
  return a - b;
};

console.log(subtract(5, 3)); // Output: 2
```

### Arrow Functions (ES6)

```javascript
let multiply = (a, b) => a + b;

console.log(multiply(2, 3)); // Output: 5
```

## Objects

Objects are collections of properties, and a property is an association between a name (or key) and a value.

### Creating an Object

```javascript
let car = {
  make: "Ford",
  model: "Mustang",
  year: 1969
};
```

### Accessing Object Properties

```javascript
console.log(car.make); // Dot notation
console.log(car["model"]); // Bracket notation
```

### Adding and Deleting Properties

```javascript
car.color = "red"; // Add
delete car.year; // Delete
```

### Methods

```javascript
let person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName()); // Output: John Doe
```

## Arrays

Arrays are used to store multiple values in a single variable.

### Creating an Array

```javascript
let fruits = ["Apple", "Banana", "Cherry"];
```

### Accessing Array Elements

```javascript
console.log(fruits[0]); // Output: Apple
```

### Array Methods

```javascript
fruits.push("Orange"); // Add to the end
fruits.pop(); // Remove from the end
fruits.unshift("Strawberry"); // Add to the beginning
fruits.shift(); // Remove from the beginning
console.log(fruits.length); // Get length
```

### Iterating over Arrays

```javascript
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

## ES6 Features

### let and const

`let` and `const` are block-scoped, unlike `var`.

### Template Literals

```javascript
let name = "John";
let greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, John!
```

### Default Parameters

```javascript
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greet()); // Output: Hello, Guest!
```

### Destructuring Assignment

```javascript
let [a, b] = [1, 2];
let {name, age} = {name: "John", age: 30};
```

### Spread and Rest Operators

```javascript
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2); // Output: [1, 2, 3, 4, 5]

function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
```

### Classes

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

let person1 = new Person("John", 30);
console.log(person1.greet()); // Output: Hello, my name is John and I am 30 years old.
```

## Conclusion

This guide covers the basics of JavaScript, including syntax, data types, operators, control structures, functions, objects, arrays, and ES6 features. Understanding these fundamentals is essential for working with JavaScript in web development and other environments.
