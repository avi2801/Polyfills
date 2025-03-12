function isPossible(ar, itemPerHour, target) {
	let hoursTaken = 0;
	for (let i = 0; i < ar.length; i++){
		hoursTaken+=Math.ceil(ar[i]/itemPerHour)
	}
	return hoursTaken <= target;
}

const solve = (ar, h) => {
	let low = 0;
	let high = Math.max(...ar)
	let ans = 0;
	while (low <= high) {
		let mid = low + Math.floor((high - low) / 2);
		if (isPossible(ar, mid, h)) {
			ans = mid;
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}
	return ans;
}


const ar = [3, 6, 7, 11], h = 8
console.log(solve(ar,h))
