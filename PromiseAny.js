// promise any is just the opposite of promise all, it will return as soon as even one of the promises are resolved
// it will only reject if all the promises are rejected

Promise.myAny = function (promiseArray) {
	let errorList = [];
	let counter = 0;
	return new Promise((resolve, reject) => {
		promiseArray.forEach((promise, index) => {
			return promise.then((data) => {
				resolve(data);
			}).catch((error) => {
				errorList[index] = error;
				counter++;
				if (counter === promiseArray.length) {
					reject(errorList)
				}
			})
		})
	})
}
