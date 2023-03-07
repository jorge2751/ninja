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

//Extend the Ninja class and create the Sensei class. A Sensei should have 200 Health, 10 speed, and 10 strength by default. In addition, a Sensei should have a new attribute called wisdom, and the default should be 10. Finally, add the speakWisdom() method. speakWisdom() should call the drinkSake() method from the Ninja class, before console.logging a wise message.

class Sensei extends Ninja {
    constructor(name, health=100, speed=10, strength = 10) {
        super(name, health, speed, strength)
        this.wisdom = 10
    }

    speakWisdom(ninja) {
        super.drinkSake()
        console.log(`The key to happiness is not in having everything ${ninja.name} son, but in finding joy in what you have.`)
    }
}

const ninja1 = new Ninja('Jorge', 50)
const sensei1 = new Sensei('Master Roku')

ninja1.showStats().drinkSake().drinkSake().showStats()
sensei1.drinkSake().speakWisdom(ninja1)