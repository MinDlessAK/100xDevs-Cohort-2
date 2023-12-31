Week 2.1
========================================================================================================================================
1. Callbacks,
2. Async functions
3. Promises
4. JS functions (map, filter)
========================================================================================================================================
1. Callback function

Step 1 - Can you call one function inside another function?
Ans      Yes

A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.

In JavaScript, functions are first-class objects, which means they can have properties and methods, and can be passed as arguments and returned from other functions. This property of JavaScript allows callback functions to be used in the language.

Here is an example of a callback function in JavaScript:
function greet(name, callback){
 console.log('Hello, ' + name);
 callback();
}

function sayGoodbye(){
 console.log('Goodbye!');
}

greet('John', sayGoodbye);
In this example, sayGoodbye is the callback function. It is passed as an argument to the greet function. Inside the greet function, the callback() function is called. This will execute the sayGoodbye function and print 'Goodbye!' to the console.

It is important to note that callback functions are not always necessary and can lead to "callback hell" if not used correctly. In modern JavaScript, there are alternative ways to handle asynchronous code execution, such as Promises and async/await.
========================================================================================================================================
2. Async functions

Async await is a syntax feature in JavaScript that allows you to write asynchronous code in a way that resembles synchronous or blocking code. This syntax feature is based on Promises, but it provides a more convenient way to handle asynchronous operations.


The async and await keywords in JavaScript are used to work with promises in a more synchronous way.

An async function is a function that returns a promise. This function is designed to perform asynchronous operations. Here is an example of an async function:


async function myAsyncFunction() {
 return 'Hello, world!';
}
In the example above, the myAsyncFunction function is declared with the async keyword. This function returns a promise that resolves to the string 'Hello, world!'.

The await keyword is used to wait for a promise to be resolved or rejected. It can only be used inside an async function. Here is an example of how to use the await keyword:

async function fetchData() {
 const response = await fetch('https://api.example.com/data');
 const data = await response.json();
 console.log(data);
}
In the example above, the fetchData function is declared with the async keyword. The await keyword is used to wait for the promise returned by the fetch function to be resolved. Then, the await keyword is used again to wait for the promise returned by the response.json() method to be resolved. Finally, the data is logged to the console.

The await keyword only works inside an async function. If you try to use the await keyword outside of an async function, you will get a syntax error.

The async and await keywords provide a more synchronous way to work with promises, making it easier to write and read asynchronous code.
=======================================================================================================================================
3. Promises

What even is a promise? 
Whenever u create it, you need to pass in a function as the first argument which has resolve as the  
First argument

 Here’s a simple promise that immediately resolves

let p = new Promise(function(resolve){
      resolve("Hi There")
       console.log(p);
});


Promise
 When a Promise is resolved or rejected, the callbacks registered with then, catch, or finally are placed in the microtask queue.
  The microtask queue is processed after the current script has finished running but before the next frame is rendered. 
  This ensures that microtasks are executed promptly.

   In the context of JavaScript, tasks are divided into two categories:

     Macro tasks: These are tasks that are handled by the event loop and typically include I/O operations, rendering, and script execution. 
     Examples include setTimeout, setInterval, and I/O operations.

     Micro tasks: These are tasks that are executed at the end of each task in the event loop. 
    Microtasks are usually higher-priority tasks and include things like promise callbacks (then, catch, finally), process.nextTick in Node.js, and mutation observer callbacks.

event-loop
 Here's a simplified view of the event loop:

     Execute the current script until the call stack is empty.
     Process microtasks from the microtask queue.
     Render changes to the DOM (if any).
     Check for I/O events and execute corresponding callbacks (macro tasks).
     Repeat.

 This separation into microtasks and macro tasks helps maintain a smooth user experience and ensures that higher-priority tasks,
  like promise callbacks, are handled promptly.
========================================================================================================================================
4. JS functions (map, filter)

Maps

 In JavaScript, a map is a built-in object where each key-value pair is separated by a comma. 
 Here's an example of a map in JavaScript:


let myMap = new Map([
 ["key1", "value1"],
 ["key2", "value2"],
 ["key3", "value3"]
]);



To convert an array of numbers into a new array with every element multiplied by 2, you can use the map method.

The map method is a built-in method in JavaScript that creates a new array with the results of calling a provided function on every element in the calling array. The provided function is called a mapping function.

Here is an example of how to use the map method:

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
In the example above, the map method is called on the numbers array. The mapping function takes each element in the numbers array (represented by the parameter number), multiplies it by 2, and returns the result. The map method then creates a new array called doubledNumbers with these results.

Filter Pending
========================================================================================================================================