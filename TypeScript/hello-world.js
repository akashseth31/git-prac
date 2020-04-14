var Programmer = /** @class */ (function () {
    function Programmer() {
    }
    Programmer.prototype.getFillName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Programmer;
}());
var aProgrammer = new Programmer();
aProgrammer.firstName = "Akash";
aProgrammer.lastName = "Seth";
console.log(aProgrammer.getFillName());
