/*
// Lets introduce an asynchronous function (setTimeout)

function findSum(n) {
    let ans = 0;
    for (let i = 0; i<n; i++) {
      ans += i;
    }
    return ans;
  }
  
  function findSumTill100() {
    return findSum(100);
  }
  
  setTimeout(findSumTill100, 1000)
  console.log("hello world");

//   What are common async functions? 
// setTimeout 
// fs.readFile - to read a file from your filesystem 
// Fetch - to fetch some data from an API endpoint 

// Lets try fs to read a file 
// const fs = require('fs');
// fs.readFile("./a.txt", "utf-8", function(err, data) {
//   console.log(data);
// });

*/


/*
//Promise
const fs = require('fs');

// my own asynchronous function
 function kiratsReadFile() {
  return new Promise( function(resolve) {
    fs.readFile('a.txt', "utf-8", function(err, data) {
      resolve(data);
    });
  })
}

// callback function to call
function onDone(data) {
  console.log(data)
}

function hi(){
    console.log("hello")
}

kiratsReadFile().then(onDone);
hi()
*/


/*
// What even is a promise? 
// Whenever u create it, you need to pass in a function as the first argument which has resolve as the  
// First argument


// Here’s a simple promise that immediately resolves

let p = new Promise(function(resolve){
      resolve("Hi There")
       console.log(p);
});

// p.then(function(){
//    console.log(p);
// })

console.log("hiiii")

// When you attach a then callback to a Promise, the callback is registered to be executed when the Promise is resolved. 
// However, it doesn't execute immediately; it's scheduled to run in the next iteration of the event loop. 
// JavaScript is single-threaded and uses an event-driven, non-blocking I/O model.

// Here's a step-by-step explanation of what happens:

//     The Promise p is created and resolved immediately with the value "Hi There."
//     The then callback is attached to the Promise, but it is not executed immediately; it's added to the microtask queue.
//     The console.log("hiiii") statement outside the Promise is encountered and executed immediately.
//     The event loop moves to the microtask queue and finds the then callback. It executes the callback with the resolved value, logging "Hi There."

// This behavior ensures that synchronous code (like the console.log("hiiii") statement) is executed before microtasks, such as then callbacks.

// If you want to see the "Hi There" log immediately after the Promise is resolved, you can use setTimeout to create a minimal delay and allow the event loop to move to the microtask queue:

// The microtask queue is not part of the Web API; rather, it's a part of the JavaScript runtime environment. 
// It's a queue for tasks that need to be executed after the current script has finished but before the browser renders the next frame.
//  Microtasks are used for tasks that are more immediate and higher priority than the regular macro tasks (like rendering updates).

// In the context of JavaScript, tasks are divided into two categories:

//     Macro tasks: These are tasks that are handled by the event loop and typically include I/O operations, rendering, and script execution. 
//     Examples include setTimeout, setInterval, and I/O operations.

//     Micro tasks: These are tasks that are executed at the end of each task in the event loop. 
//     Microtasks are usually higher-priority tasks and include things like promise callbacks (then, catch, finally), process.nextTick in Node.js, and mutation observer callbacks.

//Promise
// When a Promise is resolved or rejected, the callbacks registered with then, catch, or finally are placed in the microtask queue.
//  The microtask queue is processed after the current script has finished running but before the next frame is rendered. 
//  This ensures that microtasks are executed promptly.

//event-loop
// Here's a simplified view of the event loop:

//     Execute the current script until the call stack is empty.
//     Process microtasks from the microtask queue.
//     Render changes to the DOM (if any).
//     Check for I/O events and execute corresponding callbacks (macro tasks).
//     Repeat.

// This separation into microtasks and macro tasks helps maintain a smooth user experience and ensures that higher-priority tasks,
//  like promise callbacks, are handled promptly.

*/

//Async await
function kiratsAsyncFunction() {
  let p = new Promise(function(resolve) {
    // do some async logic here
    resolve("hi there!")
  });
  return p;
}

async function main() {
  const value = await kiratsAsyncFunction();
  console.log(value);
}

main();

// Aynsc await syntax 
// Again, it is just syntactic sugar. Still uses callbacks/Promises under the hood 
// Makes code much more readable than callbacks/Promises 
// Usually used on the caller side, not on the side where you define an async function