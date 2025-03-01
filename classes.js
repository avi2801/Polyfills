class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName,
			this.lastName = lastName
	}
	introduce() {
		return console.log(`The name of the person is ${this.firstName} ${this.lastName}`)
	}
}
class PersonAge extends Person {
	constructor(firstName, lastName, age) {
		super(firstName, lastName)
		this.age = age;
	}
	introduceAgain() {
		return console.log(`The name of the person is ${this.firstName} ${this.lastName} and age is ${this.age}`)
	}
}

const newPerson = new Person('Avinash', 'Anand');
const newPersonWithAge = new PersonAge('Avinash', 'Anand', 20);
newPersonWithAge.introduceAgain();
newPersonWithAge.introduce()
