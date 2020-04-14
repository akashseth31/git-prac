interface Person {
    firstName: string;
    lastName: string;
    getFillName(): string;
}

class Programmer implements Person {
    firstName: string;
    lastName: string;
    getFillName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

const aProgrammer = new Programmer();

aProgrammer.firstName = "Akash";
aProgrammer.lastName = "Seth";

console.log(aProgrammer.getFillName());