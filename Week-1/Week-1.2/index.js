// data types
// var a = 1;
// let a = 1;
// const a = 1; it will throw error here
// a = 2;
// console.log(a);

// let firstname = "priyanshu";
// let age = 18;
// let ismarried = false;
// console.log("this person name is " + firstname + "and their age is " + age + "and priyanshu is marries?" + ismarried);

// let age = 18;
// let married = false;
// let name = "priyanshu ";



/*
// if-elseif Statement
// if (age > 18) {
//     console.log("you can marry ")
// }
// else if (age == 18) {
//     console.log("you are adult but you have to study ")
// }
// else if (age < 18) {
//     console.log("you are small kid")
// }
// else {
//     console.log("you are not human human have age ")
// }
*/


/*
// Loops in java script
 var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for(var i=0;i<arr.length;i++){
//     if(i==2){
//         // break;
//         continue;
//     }
//     console.log(arr[i])
// }

// arr.forEach(function ak (element){
//     console.log(element);
// })
// const ac = 0;
// ac++;
// ac = ac +1;
// let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j ++;
// }

// do{
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);
*/



/*
// ARRAY
// let person1 = "priyanshu";
// let person2 = "akash";
// let person3 = "shubham";

// let personsarray = ["priyanshu", "akash", "shubham"]; //so indexing in programming language start from 0

// console.log(person1)
// console.log(personsarray[0]);//both will work same but in array it is good way of storing large amount of data

// // we can also store int in array
// let age = [19, 20, 21]
*/



/*
//Objects
var marks={
    ravi: 89,
    akash: 50,
    shubham:78 
}
console.log(marks);

const objnew = new Object();
objnew.firstName = "John";  
objnew.lastName = "Doe";    
objnew.age = 50;            
objnew.eyeColor = "blue";  

// If person is an object, the following statement will not create a copy of person:                    
// const x = person;  // Will not create a copy of person.                                              
// The object x is not a copy of person. It is person. Both x and person are the same object.           
// Any changes to x will also change person, because x and person are the same object.                  
// Example        

const person = {                                                                                     
    firstName:"John",
    lastName:"Doe",
    age:50, 
    eyeColor:"blue"
  }
  
  const x = person;
  x.age = 10;      // Will change both x.age and person.age

*/


 //function


 //Simple function
// function clicked(){
//     console.log('The button was clicked')
// }

// Arrow Functions
// function summ(a, b){
//     return a+b;
// }
// summ=(a,b)=>{
//     return a+b;
// }


//callback
  //a function passed as  an argument to another function

  //ensure that function is not going to run before task is compeleted
  //help us devlops asnchronous code

  

  function sum(x,y,call){
      let result=x+y;
      call(result);
  }
 

  function displayconsole(output){
    console.log(output);
  }


  sum(2,3,displayconsole)


// async
async function clicked(){
     await console.log('The button was clicked')
}




























































//Go through later

// callback function 
function sum(num1, num2, callbackfunc) {
    const sum = num1 + num2;
    callbackfunc(sum)
}

function displayresult(data) {
    console.log("The sum is ", data)
}

sum(1, 4, displayresult)


// function arithmeticop(a, b, type) {
//     if (type == "sum") {
//         return a + b;
//     }
//     if (type == "minus") {
//         return a - b;
//     }
// }
// const ans = arithmeticop(4, 6, "sum");
// console.log(ans);
// this is good but i want that - and + should be return in different functions

// function arithmeticop(a, b, type) {
//     if (type == "sum") {
//         const ans = sum(a, b)
//         console.log(ans)

//     }
//     if (type == "sub") {
//         const ans = sub(a, b)
//         console.log(ans)
//     }
// }
// function sum(a, b) {
//     return a + b
// }
// function sub(a, b) {
//     return a - b
// }

// const ans = arithmeticop(5, 2, "sub")this function have no callbacks 

// now we will do it by using callback 

// function arithmeticop(a, b, callback) {
//     const ans = callback(a, b);
//     return ans
// }

// function sum(a, b) {
//     const ans = a + b;
//     return ans;

// }


// const ansers = arithmeticop(30, 50, sum)
// console.log(ansers)

// function hello() {
//     console.log("hello world ")

// }
// setTimeout(hello, 2000);

// function greet() {
//     console.log("hi boys my name is priyanshu bhatt ")
// }
// setInterval(greet, 2000)

// function sum(num1, num2, callbackfunc) {
//     const sum = num1 + num2;

// }

// function displayresult(data) {
//     console.log("The sum is ", data)
// }

// sum(1, 4, displayresult)


// function arithmeticop(a, b, callback) {
//     const ans = callback(a, b);
//     return ans
// }

// function sum(a, b) {
//     const ans = a + b;
//     return ans;

// }


// const ansers = arithmeticop(30, 50, sum)
// console.log(ansers) 



// function greet(){
//   console.log("hi guys welcome ");
// }

  