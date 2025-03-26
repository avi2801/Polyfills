
function reverseString(str){
	let strArr = str.split('')
	let i = 0; j = str.length - 1;
	while (i < j) {
		[strArr[i], strArr[j]] = [strArr[j], strArr[i]];
		i++;
		j--;
	}
	console.log(strArr.join(''))
}

const name = 'Avinash'
reverseString(name)
