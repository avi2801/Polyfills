function once(callBack) {
	let executed = false;
	return function (...args) {
		if (!executed && callBack) {
			callBack.apply(this, args);
			executed = true
		}
	}
}

function memorize(callBack) {
	let result = {};
	return function (...args) {
		let cachedArgs = JSON.stringify(args)
		if (result[cachedArgs]) {
			return result[cachedArgs]
		}
		const value = callBack.apply(this, args);
		result[cachedArgs] = value;
		return value;
	}
}

const slowFunction = (num) => {
	console.log('Computing...');
	return num * 2;
};

const memoizedFunction = memorize(slowFunction);

// Measure time for the first call
console.time('First call');
console.log(memoizedFunction(5)); // Computing... 10
console.timeEnd('First call'); // Time taken for the first call

// Measure time for the second call (should be cached)
console.time('Second call');
console.log(memoizedFunction(5)); // 10 (c
console.timeEnd('Second call'); // Time taken for the second call

