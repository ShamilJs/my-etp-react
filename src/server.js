import axios from 'axios';

const getAPI = {
	orderAPI: 'https://etp-test-b8c18.firebaseio.com/orders.json',
	questionsAPI: 'https://etp-test-b8c18.firebaseio.com/questions.json',
	answersAPI: 'https://etp-test-b8c18.firebaseio.com/answers.json',
	addQuestionAPI: 'https://etp-test-b8c18.firebaseio.com/questions.json',
	


	newOrganizRegistrAPI: 'http://localhost:8080/auth/registration/organization',
	// newOrganizRegistrAPI: 'http://localhost:8080/auth/registration/organization',
	newIPRegistrAPI: 'http://localhost:8080/auth/registration/individual',

	questionAddAPI: 'http://78.24.218.44/answer/question/add',
}


export const getAxios = (url) => {
	return axios.get(url)
	.then(res => console.log(res.data))
	.catch(err=>console.log(err))
}


export const postAxios = (url, user) => {
	return axios.post(getAPI[url], {user} )
	.then(res => console.log(res.data))
	.catch(err=>console.log(err))
}



export const getDataFromServer = api => {
    return fetch(getAPI[api], {
		method: 'GET',
		headers: {'Content-Type': 'application/json'}
		})
		.then((response) => response.json());
};


export const postDataInServer = (api, data) => {
	return fetch(getAPI[api], {
		method: 'PUT',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(data)
		})
		.then(response => response.json());
};


export const postUserInServer = (api, data) => {
	return fetch(getAPI[api], {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(data)
		})
		.then(response => response.json());
};



// export const postregistrInServer = (api, data) => {
// 	return fetch(getAPI[api], {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 		body: JSON.stringify(data),
// 		// mode: 'no-cors',
// 		})
// 		.then(response => {
// 			response.json()
// 		});
// };



// export const postDataInServer = (api, data) => {
// 	return fetch('http://78.24.218.44:8080/list/', {
//     // return fetch(getAPI[api], {
// 		// method: 'POST',
// 		method: 'GET',
// 		mode: 'no-cors',
// 		// headers: {'Content-Type': 'multipart/form-data'},
// 		// headers: {'Content-Type': 'application/json'},
// 		// body: JSON.stringify(data)
// 		})
// 		.then((response) => {
// 			console.log(response);
// 			response.json()
// 		});
// };




// 'http://localhost:8080/auth/registration/individual.json'

// export const postOrder = (order) => {
//     return fetch('https://etp-test-b8c18.firebaseio.com/orders.json', {
// 		method: 'POST',
// 		headers: {'Content-Type': 'application/json'},
// 		body: JSON.stringify(order)
// 		})
// 		.then((response) => response.json());
// };


// export const postQuestion = question => {
//     return fetch('https://etp-test-b8c18.firebaseio.com/questions.json', {
// 		method: 'POST',
// 		headers: {'Content-Type': 'application/json'},
// 		body: JSON.stringify(question)
// 		})
// 		.then((response) => response.json());
// };

// export const postAnswer = answer => {
// 	console.log('answer: ', answer);

// 	answer.key = `cmr${(+ new Date()).toString(16)}`;
//     return fetch('https://etp-test-b8c18.firebaseio.com/answers.json', {
// 		method: 'POST',
// 		headers: {'Content-Type': 'application/json'},
// 		body: JSON.stringify(answer)
// 		})
// 		.then((response) => response.json());
// };


// export const getQuestion = () => {
//     return fetch('https://etp-test-b8c18.firebaseio.com/questions.json', {
// 		method: 'GET',
// 		headers: {'Content-Type': 'application/json'}
// 		})
// 		.then((response) => response.json());
// };

// export const getAnswer = () => {
//     return fetch('https://etp-test-b8c18.firebaseio.com/answers.json', {
// 		method: 'GET',
// 		headers: {'Content-Type': 'application/json'}
// 		})
// 		.then((response) => response.json());
// };


