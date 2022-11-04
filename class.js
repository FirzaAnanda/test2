class Player{
    constructor(name) {
        this.name = name;
    }
    sayHello(name){
        console.log(`Halo ${name}, my name is ${this.name}`)
    }
}

const mendy = new Player("Mendy")
//console.log(mendy)
mendy.sayHello("Kepa")

const fofana = new Player("fofana")
//console.log(fofana)
fofana.sayHello("Koulibaly")