
function debounce(callBack, delay) {
	let timer;
	return function (...args) {
		clearTimeout(timer);
		timer = setTimeout(() => {
			callBack.call(this, ...args);
		}, delay)
	}
}
