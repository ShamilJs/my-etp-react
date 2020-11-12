import React, { useState } from 'react';
import './Style/blockInput.css';
import { BlockInput } from './BlockInput';

export const Registr = () => {
	const [newUser, setNewUser] = useState({});

    return (
        <form className="auth">
			<div className="container auth-center">
				<div className="registr__content">
					<p className="auth__title">Регистрация</p>
					<BlockInput user={newUser} setUser={setNewUser} type={'login'}/>
                    <BlockInput user={newUser} setUser={setNewUser} type={'name'}/>
                    <BlockInput user={newUser} setUser={setNewUser}type={'surname'}/>
					<BlockInput user={newUser} setUser={setNewUser} type={'password'}/>
					<button  className="auth_button">Отправить</button>
                    <span className="subtext"><span>* </span>обязательные поля</span>
				</div>
			</div>
        </form>
    );

};