import React, { useEffect, useState } from 'react';
import './Style/blockInput.css';
import { BlockInput } from './BlockInput';
import { checkInput } from '../../checkInput';
import { useDispatch } from 'react-redux';
import { createPromptArray, openModalHello } from '../../redux/actions';

export const Auth = () => {
	const [user, setUser] = useState({});
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(createPromptArray([]));
		// eslint-disable-next-line
	}, []);

	const authorization = (e) => {
		e.preventDefault();
		const arr = checkInput(user, 'auth');
		dispatch(createPromptArray(arr));
		if (arr.length !== 0) return;

		console.log('данные отправлены');
		dispatch(openModalHello(true, 'Auth'))
	}

	return (
		<form className="auth">
			<div className="container auth-center">
				<div className="auth__content">
					<p className="auth__title">Авторизация</p>
					<BlockInput user={user} setUser={setUser} type={'login'}/>
					<BlockInput user={user} setUser={setUser} type={'password'}/>
					<button
						className="auth_button"
						onClick={authorization}
					>Отправить</button>
					<span className="subtext"><span>* </span>обязательные поля</span>
				</div>
			</div>
		</form>
    );
};