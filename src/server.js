export const getOrders = () => {
    return fetch('https://etp-test-b8c18.firebaseio.com/orders.json', {
		method: 'GET',
		headers: {'Content-Type': 'application/json'}
		})
		.then((response) => response.json());
};


export const postQuestion = question => {
    return fetch('https://etp-test-b8c18.firebaseio.com/questions.json', {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(question)
		})
		.then((response) => response.json());
};

export const postAnswer = answer => {
    return fetch('https://etp-test-b8c18.firebaseio.com/answers.json', {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(answer)
		})
		.then((response) => response.json());
};


export const getQuestion = () => {
    return fetch('https://etp-test-b8c18.firebaseio.com/questions.json', {
		method: 'GET',
		headers: {'Content-Type': 'application/json'}
		})
		.then((response) => response.json());
};

export const getAnswer = () => {
    return fetch('https://etp-test-b8c18.firebaseio.com/answers.json', {
		method: 'GET',
		headers: {'Content-Type': 'application/json'}
		})
		.then((response) => response.json());
};