Function.prototype.myCall = function (context = {}, ...args) {
	if (typeof this !== 'function') {
		throw new Error('Not callabled', this)
	}
	const fn = Symbol()
	context[fn] = this
	const result = context[fn](...args)
	delete context[fn]
	return result
}

Function.prototype.myApply = function (context = {}, args = []) {
	if (typeof this !== 'function') {
		throw new Error('Not callabled', this)
	}
	const fn = Symbol()
	context[fn] = this;
	const result = context[fn](...args)
	delete context[fn]
	return result
}

Function.prototype.myBind = function (context = {}, ...args) {
	if (typeof this !== 'function') {
		throw new Error('Not a callabale function')
	}
	const fn = Symbol();
	context[fn] = this

	return function (...nextArgs) {
		const result = context[fn](...args, ...nextArgs);
		delete context[fn]
		return result
	}
}

function printAge(age) {
	console.log(`The name is ${this.name} and age is ${age}`)
}

const person1 = {
	name: 'Avinash'
}

const bindAge = printAge.myBind(person1, 24)
bindAge()
