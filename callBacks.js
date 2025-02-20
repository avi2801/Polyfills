
let pizza;
function orderPizza(callBack) {
	setTimeout(() => {
		pizza = 'Pizza';
		console.log(`We have ordered ${pizza}`)
		callBack();

	}, 2000)
}

function orderCame() {
	console.log('Pizza is here');
}
orderPizza(orderCame);


function callPizzaShop(callBack) {
	console.log('Calling Pizza Shop')
	callBack()
}

function orderPizza(callBack) {
	console.log('Selecting the pizza')
	callBack();
}

function pizzaArrived() {
	console.log('Pizza Arrived');
}

callPizzaShop(() => {
	orderPizza(() => {
		pizzaArrived()
	})
})



