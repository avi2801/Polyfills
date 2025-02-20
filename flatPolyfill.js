Array.prototype.myFlat = function (depth) {
	if (typeof this !== 'object' || !Array.isArray(this)) {
		throw new TypeError('Not an array')
	}
	let ans = []
	this.forEach((ele) => {
		if (Array.isArray(ele) && depth > 0) {
			ans.push(...ele.myFlat(depth-1))
		} else {
			ans.push(ele)
		}
	})
	return ans;
}


const ar = [1,2,3,[[4,5]]]
const flatArray = ar.myFlat(2)
console.log(flatArray)
