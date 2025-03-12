function findFirstOccurance(ar, target) {
	let low = 0;
	let high = ar.length - 1;
	let ans = Infinity;
	while (low <= high) {
		let mid = low + Math.floor((high - low) / 2);
		if (ar[mid] === target) {
			ans = mid;
			high = mid-1
		} else if (ar[low] < target) {
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}
	return ans;
}

function findLastOccurance(ar, target) {
	let low = 0;
	let high = ar.length - 1;
	let ans = -Infinity;
	while (low <= high) {
		let mid = low + Math.floor((high - low) / 2);
		if (ar[mid] === target) {
			ans = mid;
			low = mid +1
		} else if (ar[mid] < target) {
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}
	return ans;
}


function solve(ar, target) {
	let firstOccurance = findFirstOccurance(ar, target)
	 let lastOccurance = findLastOccurance(ar, target)
	return [firstOccurance,lastOccurance];
}

const ar = [7, 8, 8, 8, 8, 10]
const target = 8;
console.log(solve(ar,target))


