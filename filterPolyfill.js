Array.prototype.myFilter = function (callBack, argsArray) {
	if (typeof callBack !== 'function') {
		throw new TypeError('Not a callBack')
	}

	let ans = []
	for (let i = 0; i < this.length; i++){
		if (i in this) {
			if (callBack.call(argsArray,this[i], i, this)) {
				ans.push(this[i]);
			}
		}
	}
	return ans;
}

const ar = [1, 2, 3, 4, 5]
const filteredArray = ar.myFilter((ele)=>ele>2)
console.log(filteredArray)
