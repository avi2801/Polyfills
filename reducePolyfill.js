Array.prototype.myReduce = function (callBack, initialValue) {
	if (typeof callBack !== 'function') {
		throw new TypeError('Not a callabale function')
	}

	let acc = initialValue;
	let startIndex = 0;
	if (initialValue === undefined) {
		if (this.length === 0) {
			throw new Error('Not an array which was use to call this')
		}
		acc = this[0];
		startIndex= 1
	}
	for (let i = startIndex; i < this.length; i++){
		acc = callBack(acc,this[i],i,this)
	}
	return acc;
}
