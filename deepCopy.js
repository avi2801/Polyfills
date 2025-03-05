// let us understand the difference between shallow and deep copy

const obj = {
	name: 'Avinash'
}

// const obj2 = obj;
// obj2.name = 'Abhishek'

// here what is happening is that the reference is copied and not the memory so both the object changes
// the solution to this is to use deep and shallow copy

const obj2 = Object.assign({}, obj);
obj2.name = 'Rahul';

const obj3 = { ...obj }
// these two are the way to make shallow copy but the problem with shallow copy is that it can only make differences till one level of code
// it fails to do the same for other nested properties

console.log(obj)

// to resolve this issue what we can do is
const obj4 = JSON.parse(JSON.stringify(obj))

console.log(obj4)


// how to make deep copy
// because in this string approach the function and dates if there are any won't work

const ar = [1, 2, 3, 4, 5]

function deepCopy(obj) {
	if (typeof obj !== 'object' || obj === null) {
		return obj;
	}
	if (Array.isArray(obj)) {
		return obj.map((item)=>deepCopy(item))
	}
	const copy = {}
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			copy[key] = deepCopy(obj[key])
		}
	}
	return copy;
}



