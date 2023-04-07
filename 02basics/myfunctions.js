"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
    //^ above is a number, below is a string
    //^ we can make it stricter by adding : number after the closing parenthesis of an argument.-
    // return "hello";
}
function getUpper(val) {
    return val.toUpperCase();
}
var signUpUser = function (name, email, password, isPaid) { };
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var myValue = addTwo(5);
getUpper("hello");
signUpUser("Olu", "olutakinyemi@gmail.com", "123456", true);
loginUser("O", "h@gmail.com");
//^ below has multi types, theres a way to get around that
// function getValue(myVal: number){
//   if (myVal > 5){
//     return true;
//   }
//   return "200 OK";
// }
var getHello = function (s) {
    return "Hello World !";
};
//^below: TS will infer the type of the return value within the function
//^ if we dont specify the return type, TS will infer it for us
var heros = ["Batman", "Spiderman", "Ironman"];
// const heros = [1,2,3];
// heros.map(hero => {
//   return `hero is ${hero}`
// });
//^below: but this is stated as a better practice
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
//^below: we can also use void to specify that a function doesnt return anything
function consoleError(errmsg) {
    // console.error(errmsg);
    console.log(errmsg);
}
//^below: we can also use never to specify that a function 
//^ throws an exception or terminates execution of the program
function handleError(errmsg) {
    throw new Error(errmsg);
}
