// dynamic prototype pattern for object creation
// https://youtu.be/xizFJHKHdHw

const personDynProto = function (name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;

    if(typeof this.print !== 'function') {
        personDynProto.prototype.print = function () {
            console.log(`${this.name}, ${this.age}, ${this.address}`);
        };
    } 
};

const p1 = new personDynProto("Akash", 30, "Noida");
const p2 = new personDynProto();

p1.print();
p2.print();


