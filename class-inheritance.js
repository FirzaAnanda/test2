class Human{
    sayHello(name){
console.log(`Hallo ${name}, namaku ${this.name}`)
    }
}

class Copy extends Human{

}

const nanda = new Human()
nanda.name = "Nanda"
nanda.sayHello("Kai")

const mason = new Copy()
mason.name = "Mason"
mason.sayHello("Mount")
