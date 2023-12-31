/*
//callback
function square(n) {
    return n * n
  }
  function cube(n) {
    return n * n * n
  }

  
  function sumOfSomething(a, b, callback) {
    console.log(a);
    console.log(callback);
    const val1 = callback(a)
    const val2 = callback(b)
    return val1 + val2;
  }
  
  const ans = sumOfSomething(2, 2,cube)
  console.log(ans)
  
// "sumOfSomething" is called with three arguments: 2, 2, and "cube".
// Inside "sumOfSomething", a is 2, b is 2, and callback is the "cube" function.
// callback(a) is called, which is equivalent to cube(a). This results in 8 (2 * 2 * 2).
// callback(b) is called, which is equivalent to cube(b). This results in 8 (2 * 2 * 2).
// The function then returns the sum of these two results, which is 16.
*/

/*
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



//Maps

// In JavaScript, a map is a built-in object where each key-value pair is separated by a comma. 
// Here's an example of a map in JavaScript:


let myMap = new Map([
 ["key1", "value1"],
 ["key2", "value2"],
 ["key3", "value3"]
]);

//  You can access the values of a map using their keys. Here's an example


console.log(myMap.get("key1")); // Output: value1

// To add a new key-value pair to a map, you can use the set method. Here's an example:
myMap.set("key4", "value4");
console.log(myMap.get("key4")); // Output: value4

// You can also delete a key-value pair from a map using the delete method. Here's an example:
myMap.delete("key1");
console.log(myMap.get("key1")); // Output: undefined

// Maps in JavaScript are simple and efficient, making them an excellent choice for managing data.

// Question - Convert an array of numbers into a new array with every element
// Multiplied by 2
// Here is an example of how to use the map method:

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
// In the example above, the map method is called on the numbers array.
//  The mapping function takes each element in the numbers array (represented by the parameter number), multiplies it by 2, 
//  and returns the result. The map method then creates a new array called doubledNumbers with these results.


//Pending filters