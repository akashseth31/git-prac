// prototype pattern for object creation
// https://youtu.be/xizFJHKHdHw

const personProto = function () {};

// attach method and properties in a shared space called prototype
personProto.prototype.name = "no name";
personProto.prototype.age = 0;
personProto.prototype.address = "no city";

personProto.prototype.print = function() {
    console.log(`${this.name}, ${this.age}, ${this.address}`);
};

const p1 = new personProto();
p1.name = "Akash";
p1.age = 30;
p1.address = "Noida";
const p2 = new personProto();

p1.print();
p2.print();


