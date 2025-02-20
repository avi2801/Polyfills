Array.prototype.myMap = function (callBack, args) {
	if (typeof callBack !== 'function') {
		throw new TypeError('This is not a callable function')
	}
	const ans = []
	for (let i = 0; i < this.length; i++){
		if (i in this) {
			ans.push(callBack.call(args,this[i],i,this))
		}
	}
	return ans;
}

const ar = [1, 2, 3, 4, 5]
const ans = ar.myMap((ele) => ele * 2);
console.log(ans)
