class Method{
    say(name){
        if(name){
            this.#sayWithName(name)
        }else{
            this.#sayWithOutName()
        }

        }
    #sayWithName(name){
        console.info(`hello ${name}`)
    }
    #sayWithOutName(){
        this.#sayWithOutName(`halo`)
    }
}

const method = new Method()
method.say("Nanda")
//method.#sayWithName()
