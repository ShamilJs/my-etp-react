import React from 'react';
import './Style/blockInput.css'


export const BlockInput = ({ type }) => {
    let title = (type === 'login') ? 'Логин' :
        (type === 'login') ? 'Логин' :
        (type === 'surname') ? 'Фамилия' :
        (type === 'name') ? 'Имя' :
        (type === 'patronymic') ? 'Отчество' :
        (type === 'addres') ? 'Адрес' :
        (type === 'email') ? 'Электронная почта' :
        (type === 'phone') ? 'Телефон' :
        (type === 'IP') ? 'Наименование организации/ИП ' :
        (type === 'inn') ? 'ИНН' :
        'ОГРН (ОГРНИП)';

    return (
        <div  className="block_input">
			<label htmlFor={type}>{title}<span  className="label">*</span></label>
			<input name={type} type="text"  className="form-control"/>
		</div>
    );
};