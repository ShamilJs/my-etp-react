export const getOrders = () => {
    return fetch('https://etp-test-b8c18.firebaseio.com/orders.json', {
		method: 'GET',
		headers: {'Content-Type': 'application/json'}
		})
		.then((response) => response.json());
};