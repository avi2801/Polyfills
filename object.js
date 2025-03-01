// different ways to create an object

// 1. using object literals
const obj = {
	firstName: 'Avinash',
	lastName:'Anand'
}

// using constructor

const person = new Object();
person.firstName = "Anand"
person.lastName = "Avinash"

// Object assisng
const person1 = Object.assign({}, { firstName: 'Rahul', lastName: 'Kumar' })
console.log(person1);

const person2 = Object.create();
person2.firstName="x"
person2.lastName="y"
