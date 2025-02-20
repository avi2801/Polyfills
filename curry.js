function curry(callBack) {
	return function curriedFunction(...args){
		if (args.length >= callBack.length) {
			return callBack(...args)
		}
		return function (...nextArgs) {
			return curriedFunction(...args,...nextArgs)
		}
	}
}

const add = (a, b) => a + b;

const newAdd = curry(add);
console.log(newAdd(2)(3))


function infiniteSum(a) {
	return function (b) {
		if (b) {
			return infiniteSum(a + b);
		}
		return a;

	}
}

const result = infiniteSum(2)(3)(2)(3)();
console.log(result)
