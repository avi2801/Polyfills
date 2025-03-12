function findMinimum(ar) {
	let low = 0;
	let high = ar.length - 1;
	let ans = Infinity;
	while (low <= high) {
		let mid = low + Math.floor((high - low) / 2);
		if (ar[low] < ar[mid]) {
			ans = Math.min(ar[low], ans);
			low = mid + 1;
		} else {
			ans = Math.min(ans, ar[mid]);
			high = mid - 1;
		}
	}
	return ans;
}

const ar = [3, 4, 5, 6, 7, 1, 2];
console.log(findMinimum(ar));
