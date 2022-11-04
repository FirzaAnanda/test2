class Field{
    //public class
    firstName;
    lastName;
    balance = 0;

    // bisa juga ditambah constructor
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
}

const field = new Field("Nanda", "Sinyo")
console.log(field)

const budi = new Field()
console.log(budi)