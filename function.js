"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addtwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function SignupUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addtwo(5);
getUpper("hassaan");
SignupUser("hassaan", "hassan@gam.com", false);
loginUser("Hassaan", "hassan@gmail.com");
///Better way to write function
var getHello = function (myval) {
    return "";
};
getHello("Hassan");
//Map
var heroes = ["thor", "spidey"];
heroes.map(function (hero) {
    return "hero is ".concat(hero);
});
//When to use void
function consoleERR(errMsg) {
    console.log(errMsg);
}
//When to use Never
function handleErr(errMsg) {
    throw new Error(errMsg);
}
