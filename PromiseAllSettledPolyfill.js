Promise.myAllSettled = function (promisesArray) {
	const result = [];
	let counter = 0
	return new Promise((resolve, reject) => {
		promisesArray.forEach((promise, index) => {
			return promise.then((res) => {
				result[index] = { status: 'success', data: res }
			}).catch((error) => {
				result[index] = { status: 'failure', error }
			}).finally(() => {
				counter++;
				if (counter === promisesArray.length) {
					resolve(result)
				}
			})
		})
	})
}

// Promise all settled behaves in the manner that it will return all the promises results whether they are resolved or rejected

// Promise race is similiar but the difference is it will resolve the promise which ever comes first whether it is resolve or reject


const promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Promise 1 resolved")
	},3000)

})

const promise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Promise 2 resolved")
	},2000)
})
const promise3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject("Promise 3 resolved")
	},1000)
})

Promise.myRace = function (promiseArray) {
	let result = [];
	return new Promise((resolve, reject) => {
		promiseArray.forEach((promise, index) => {
			return promise.then((data) => {
				resolve(data)
			})
		})
	})
}

Promise.myAllSettled([promise1,promise2,promise3]).then(console.log)
