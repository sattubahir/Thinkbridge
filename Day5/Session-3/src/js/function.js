
// Function Practice

// Simple function declaration
function sayHello(name) {
  return "Hi " + name + "!";
}
console.log(sayHello("Rohit"));

// Function expression stored in a variable
const sum = function(a, b) {
  return a + b;
};
console.log(sum(10, 15));

// Arrow function, shorter syntax
const divide = (x, y) => x / y;
console.log(divide(20, 4));

// Block scope example with let and const
function testScope() {
  if (true) {
    let message = "Inside if block";
    const number = 100;
    console.log(message);
    console.log(number);
  }
  // Variables are not accessible here, outside the block
  // console.log(message); // error
  // console.log(number);  // error
}
testScope();

// Function with default parameters
function greet(name = "Guest", greeting = "Hello") {
  return `${greeting}, ${name}!`;
}
console.log(greet());
console.log(greet("Yug"));
console.log(greet("Yug", "Welcome"));

// Function that returns another function (closure example)
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}
const twice = multiplier(2);
const thrice = multiplier(3);
console.log(twice(5)); // 10
console.log(thrice(5)); // 15

// Function with rest parameters to accept any number of arguments
function sumAll(...numbers) {
  return numbers.reduce((total, current) => total + current, 0);
}
console.log(sumAll(1, 2, 3));
console.log(sumAll(10, 20, 30, 40));

// Immediately Invoked Function Expression (IIFE) example
(function() {
  console.log("IIFE runs right away!");
})();

// Function scope with var (function-scoped variable)
function varScopeTest() {
  if (true) {
    var testVar = "visible outside block";
  }
  console.log(testVar); // works because var ignores block scope
}
varScopeTest();
