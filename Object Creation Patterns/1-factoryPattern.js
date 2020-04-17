// factory pattern for object creation
// https://youtu.be/xizFJHKHdHw

const peopleFactory = function (name, age, address) {
    const temp = {};

    temp.name = name;
    temp.age = age;
    temp.address = address;

    temp.printPerson = function () {
        console.log(temp);
    }

    return temp;
}

// note that not using 'new' keyword here
const person1 = peopleFactory("Akash", 30, "Delhi");
person1.justCheck = function() { console.log('just checking') }; // will not attach to person2 object 
const person2 = peopleFactory("Vikas", 28, "Jaunpur");

person1.printPerson();
person2.printPerson();

