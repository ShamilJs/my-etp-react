import React, { useState } from 'react';
import './Style/blockInput.css';
import { BlockInput } from './BlockInput';

export const Auth = () => {
	const [user, setUser] = useState({});

	return (
        <form className="auth">
			<div className="container auth-center">
				<div className="auth__content">
					<p className="auth__title">Авторизация</p>
					<BlockInput user={user} setUser={setUser} type={'login'}/>
					<BlockInput user={user} setUser={setUser} type={'password'}/>
					<button className="auth_button">Отправить</button>
					<span className="subtext"><span>* </span>обязательные поля</span>
				</div>
			</div>
        </form>
    );
};