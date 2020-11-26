// import axios from 'axios';

// const API = 'http://localhost:8080';
const API = 'http://78.24.218.44:8080';

const getAPI = {
	orderAPI: 'https://etp-test-b8c18.firebaseio.com/orders.json',
	questionsAPI: 'https://etp-test-b8c18.firebaseio.com/questions.json',
	answersAPI: 'https://etp-test-b8c18.firebaseio.com/answers.json',
	addQuestionAPI: 'https://etp-test-b8c18.firebaseio.com/questions.json',
	

	// Регистрация 'http://localhost:8080/auth/registration/organization'
	newOrganizRegistrAPI: `${API}/auth/registration/organization`,
	// 'http://localhost:8080/auth/registration/individual',
	newIPRegistrAPI: `${API}/auth/registration/individual`,

	// Получение данных о юзере
	aboutUserAPI: `${API}/auth/user?login`,


	// Авторизация
	authUserAPI: `${API}/auth/login`,

	// questionAddAPI: 'http://78.24.218.44/answer/question/add',
}


// Получение данных о юзере
export const getAboutUser = (api, user) => {
    return fetch(`${getAPI[api]}=${user.login}`, {
		method: 'GET',
		headers: {'Content-Type': 'application/json'}
		})
		.then((response) => response.json());
};





export const getDataFromServer = api => {
    return fetch(getAPI[api], {
		method: 'GET',
		headers: {'Content-Type': 'application/json'}
		})
		.then((response) => response.json());
};



export const postUserInServer = (api, data) => {
	return fetch(getAPI[api], {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(data)
		})
		.then(response => response.json())
};




// export const getAxios = (url) => {
// 	return axios.get(url)
// 	.then(res => console.log(res.data))
// 	.catch(err=>console.log(err))
// }


// export const postAxios = (url, user) => {
// 	return axios.post(getAPI[url], {user} )
// 	.then(res => console.log(res.data))
// 	.catch(err=> console.log(err))
// }



// Специально для fireBase
export const postDataInServer = (api, data) => {
	return fetch(getAPI[api], {
		method: 'PUT',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(data)
		})
		.then(response => response.json());
};