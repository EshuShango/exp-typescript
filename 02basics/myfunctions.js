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
