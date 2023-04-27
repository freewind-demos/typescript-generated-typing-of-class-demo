"use strict";
var User = /** @class */ (function () {
    function User(username) {
        this.username = username;
    }
    return User;
}());
var user = new User("Freewind");
console.log(user.username);
