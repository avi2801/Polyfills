function throttle(callBack, delay) {
	let lastCall = 0;
	return function (...args) {
		let now = new Date.getTime();
		if (now - lastCall < delay) {
			return;
		}
		lastCall = now;
		callBack.call(this,...args)
	}
}
