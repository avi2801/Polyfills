function search(ar, target) {
	let low = 0;
	let high = ar.length - 1;
	while (low <= high) {
		let mid = low + Math.floor((high - low) / 2);
		if (ar[mid] === target) {
			return mid;
		}
		else if (ar[low] <= ar[mid]) {
			if (ar[mid] >target && ar[low] <= target) {
				high = mid - 1;
			} else {
				low = mid + 1;
			}
		} else {
			if (ar[mid] < target && ar[high] >= target) {
				low = mid + 1;
			} else {
				high = mid - 1;
			}
		}
	}
	return -1;
}



const ar = [4, 5, 6, 7, 0, 1, 2]
const target = 4;

console.log(search(ar,target))
