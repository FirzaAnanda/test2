class Employee{
    constructor(firstName) {
        this.firstName = firstName;
    }
    sayHello(name){
        console.log(`Hallo ${name} namaku ${this.firstName}`)
    }
}

class Manager extends  Employee{
    constructor(firstName, lastName) {
        super(firstName);
        this.lastName = lastName;
    }
    sayHello(name){
        console.log(`Hallo ${name} namaku ${this.firstName} dan nama akhirku ${this.lastName}`)}
}

const employee = new Employee("Nanda", "Ahmad")
employee.sayHello("Bos")

const manager = new Manager("Firza", "Ananda")
manager.sayHello("Bos")
