//constructor func
// function abc (){
//     this.age = 20,
//     this.name = "john",
//     this.color = "white";
// }
// var a =  new abc ();
 // another ex of constructor func

//  function circularbutton (color) {
//     this.radius = 2,
//     this.color = red,
//     this.press = true;
//  }
//  var greenbtn = new circularbutton("green");
//  var redbtn = new circularbutton("red");
//normal function 
// function normal (){
//     console.log("this is a normal func");
// }
// normal ();
// //IIFE (immediately invoked function expression)
// ( function (){ //this is a simple iife
//     console.log("this is an iife");
// }) (); 
// //named iife ex
// (function namediife (){
// console.log("this is a named iife");
// }) ();
var me = {
    name: "kaif",
    age: 20,
}
var engg = {
    studies: true,
    passedExam: true,
}
engg.__proto__=me;