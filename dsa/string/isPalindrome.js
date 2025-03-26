function isPalindrome(strValue) {
	let i = 0;
	let j = strValue.length - 1;
	while (i < j) {
		if (strValue[i] !== strValue[j]) {
			return false;
		}
		i++;
		j--;
	}
	return true;
}

console.log(isPalindrome('mom'))
console.log(isPalindrome('madam'))
console.log(isPalindrome('avinash'))
