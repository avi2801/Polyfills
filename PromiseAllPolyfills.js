//creating polyfill for promises


// promises combinators are used when there is a sequences or n number of promises that you have to hadle
// promises combinators are -> Promise.all, Promise.allSettled, Promise.race and Promise.any

// let's understand them one by one

// Promise.all
// how it works is it will resolve all the promises in the sequential order but even if a single promise is failed then
// it will reject that promise

Promise.myAll = function (promisesArray) {
	let result = [];
	let counter = 0;
	return new Promise((resolve, reject) => {
		promisesArray.forEach((promise, index) => {
			return promise.then((data) => {
				result[index] = data;
				counter++;
				if (counter === promisesArray.length) {
					resolve(result)
				}
			}).catch((error) => {
				reject(`Reason for the failure: ${error}`)
			})
		})
	})
}

const promise1 = new Promise((resolve, reject) => {
	resolve("Promise 1 resolved")
})

const promise2 = new Promise((resolve, reject) => {
	reject("Promise 2 failed")
})
const promise3 = new Promise((resolve, reject) => {
	resolve("Promise 3 resolved")
})


Promise.myAll([promise1, promise2, promise3]).then((data) => {
	console.log(data)
}).catch((error) => {
	console.log('Error', error)
})
