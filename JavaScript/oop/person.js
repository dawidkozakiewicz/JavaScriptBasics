// Prototypal Inheritance

const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age}.`

    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`
    })

    return bio
}

Person.prototype.setName = function (fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}

const me = new Person('Andrew', 'Mead', 27, ['Teaching', 'Biking'])
// me.setName('Alexis Turner')
console.log(me.getBio())


const person2 = new Person('Clancey', 'Turner', 51, ['Smoking pipe', 'Drinking vodka', 'Sleep all day'])
console.log(person2.getBio())
person2.setName('Józef Stalin')
console.log(person2.getBio())