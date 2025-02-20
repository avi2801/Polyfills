function getWeather(weatherType) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(weatherType)
		}, 1000)
	})
}

function getWeatherIcon(weather) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			switch (weather) {
				case 'Sunny': {
					resolve('Sunny Weather is there ☀️')
					break;
				};
				case 'Rainy': {
					resolve('Weather is rainy 🌦️')
					break;
				}
				default: reject('No Icons Found!')
			}

		}, 1000)
	})
}


getWeather('Rainy').then(getWeatherIcon).then((data) => {
	console.log('Weather:', data)
}).catch((error) => {
	console.log(error)
})
