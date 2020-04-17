// constructor pattern for object creation
// https://youtu.be/xizFJHKHdHw

const peopleContructor = function(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
    
    // this = {};

    this.printPerson = function() {
        console.log(`${this.name}, ${this.age}, ${this.address}`);
    }

}

// note: using 'new' keyword to create object
const p1 = new peopleContructor("Akash", 30, "Noida");
const p2 = new peopleContructor("Vikas", 28, "Varanasi");

p1.printPerson();
p2.printPerson();