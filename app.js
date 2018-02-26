"use strict";
var Animal = /** @class */ (function () {
    function Animal(animalName) {
        this.name = animalName;
    }
    Animal.prototype.eat = function (portions) {
        if (portions === void 0) { portions = 1; }
        return this.name + " eats " + portions + " portions";
    };
    ;
    return Animal;
}());
var first = new Animal("Dog");
console.log(first.eat(12));
var second = new Animal("Cat");
console.log(second.eat());
