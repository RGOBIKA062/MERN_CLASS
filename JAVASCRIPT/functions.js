// let userDetails=function(name,password){ //functional parameters or functional arguments
//     console.log("Hello.");
//     console.log(`username :${name},Password: ${password}`); //String Interpolation
// }
// userDetails("Gobika",1234);//actual parameters or actual arguments


//function with return type

// let userDetails=function(name,password){ //functional parameters or functional arguments
//     console.log("Hello.");
//     console.log(`username :${name},Password: ${password}`); //String Interpolation
    
//     return{
//         name:"ABC",
//         password:98765
//     };
//     // return [10,20,30];
//     // return 10;
//     // return "hello";
//     // return null;
//     // return undefined;
//     // return function(){
//     //     console.log("inside return function");
//     // }
// }
// console.log(userDetails("Gobika",1234));//actual parameters or actual arguments

// let returnValues= userDetails("XYS",852);
// console.log(returnValues);



//Named function or normal function

// function getUserDetails(){
//     console.log("This is Normal function");
//     return 'user details get successfully';
    
// }
// console.log(getUserDetails());
// console.log(getUserDetails());
// console.log(getUserDetails());
// console.log(getUserDetails());
// console.log(getUserDetails());

//Immediate Innvoking function - there is no funciton name
//only one time execution

// (
//     function(username,password){
//         console.log(username,password);
//         console.log("This is immediate invoking function");
//     }
// )("admin","admin@123"); 

//Arrrow function

// let arrowFun=()=>console.log("This is arrow function");
// arrowFun();

//rule 1
// let arrowFun=()=>{
//     let a =6;
//     let b=6;
//     console.log(a+b); 
// };
// arrowFun();

//rule 2
// let func=()=>{return "hello arrow function"};

//rule 3
//In Arrow function "this" keyword works differently
//  let arrowFun=()=>{
//     console.log(this);
//     window.console.log("hello");
//  }
//  arrowFun();

//Nested function
//Example 1
// function outerFun(){
//     let a =10;
//     function innerFun(){
//         console.log(a);        
//     }
//     console.log("outer function called");
//     innerFun();
// }
// outerFun();

//Example 2 - closure function
// function outerFun(){
//     let a =10;
//     return function (){
//         console.log(a++);        
//     }
// }
// let result=outerFun();
// result();   
// result(); 
// result(); 

//Higher Order Function
//Any function that will accept another function as a parameter or returns a function is called Higher order function

// function LandignPage(regist,login){
//     console.log("Home Page...");
// }
// function Register(){
//     console.log("User Registered successfully");
    
// }
// function Login(){
//     console.log("User Logged in successfully"); 
// }
// LandignPage(Register(),Login());

//Generator Function
//to pause the execution of function
//example 1
// function* generatorFun(){
//     console.log("Generator function");
// }
// generatorFun().next();

//example 2
// function* generatorFun(){
//     yield a=10;
//     yield b=20;
//     yield c=30;    
//     console.log("Generator function");
// }
// let result=generatorFun();
// console.log(result.next().value);
// console.log(result.next().value);
// console.log(result.next().value);
// result.next();

