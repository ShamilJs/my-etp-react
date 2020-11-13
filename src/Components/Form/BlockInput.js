import React from 'react';
import './Style/blockInput.css'


export const BlockInput = ({ type, user, setUser}) => {
    let title = 
        (type === 'login') ? 'Логин' :
        (type === 'surname') ? 'Фамилия' :
        (type === 'name') ? 'Имя' :
        (type === 'patronymic') ? 'Отчество' :
        (type === 'addres') ? 'Адрес' :
        (type === 'email') ? 'Электронная почта' :
        (type === 'phone') ? 'Телефон' :
        (type === 'IP') ? 'Наименование организации/ИП ' :
        (type === 'inn') ? 'ИНН' :
        (type === 'password') ? 'Пароль' :
        (type === 'orderName') ? 'Название заявки' :
        'ОГРН (ОГРНИП)';

    return (
        <div  className="block_input">
			<label htmlFor={type}>{title}<span  className="label">*</span></label>
            <input 
                name={type} 
                type={(type === 'password') ? type : "text"}
                required
                className="form-control"
                value={user[type] ? user[type] : ''}
                onChange={(e) => setUser(user => ({...user, [e.target.name]: e.target.value}))}
            />
		</div>
    );
};