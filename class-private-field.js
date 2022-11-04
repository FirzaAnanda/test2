class Counter{
    #counter = 0;

    increment(){
        this.#counter++
    }

    decrement(){
        this.#counter--
    }

    get(){
        return this.#counter
    }
}

const counter = new Counter()

counter.#increment()

console.log(this.get())


console.log(counter)

// gunakan # untuk private