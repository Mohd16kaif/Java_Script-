//➡️➡️ Difference bw async and sync ⬅️⬅️

//sync code

//  var a = function syncAsync() {
// console.log("hey sync 1");
// console.log("hey sync 2");
// console.log("hey sync 3");

// // async code

// setTimeout(function () {
//     console.log("hey Async 1 in 3 sec");
// }, 3000) //3 sec

// setTimeout(function (){
// console.log("hey Async 2 in 1 sec");
// }, 1000) //1 sec

// setTimeout(function (){
// console.log("hey Async 3 in 2 sec");
// }, 2000) //2 sec
// }

// Java Script is not asynchronous 
//(it is single threaded language ) it is asynced with the help of EVENT LOOPS & promises//

// main stack & side stack's functionalitiy 
//main stack holds all the sync code and side stack holds  all the async code

// //exaple:

// console.log("sync 1");
// console.log("sync 2");
// setTimeout(function (){
// console.log("async code in 0 sec ) ");
// }, 0)
// console.log("sync 3");

//we put that peice of code in async js that we don't know how much time will it take or that code is dependent on someone elses server

fetch ('https://www.facebook.com');

//when this ⬆️⬆️ code is completed, then it's answer comes into these : callbacks, then caath & async await

