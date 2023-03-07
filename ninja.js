class Ninja {
    constructor(name, health) {
        this.name = name
        this.health = health
        this.speed = 3
        this.strength = 3
    }

    sayName() {
        console.log(`My name is ${this.name}`)
        return this
    }

    showStats() {
        console.log(`${this.name}'s stats; strength: ${this.strength}, speed: ${this.speed}, health: ${this.health}`)
        return this
    }

    drinkSake() {
        this.health += 10
        return this
    }
}

const ninja = new Ninja('Jorge', 50)

ninja.showStats().drinkSake().drinkSake().showStats()