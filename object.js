"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "John",
    email: "johan@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "hassaan", isPaid: false, email: "h@h.com" };
createUser(newUser);
//What happens when an objext returns an object
function Courses() {
    return { name: "Reactjs", Price: 999 };
}
function generateUser(user) {
    return { name: "", email: "", isActive: true };
}
generateUser({ name: "", email: "", isActive: true });
