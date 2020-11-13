
import React from 'react';
import './Style/privateOffice.css';


export const PersonalData = () => {
    return (
        <div className="private__content">
            <p className="private__title">
                Личные данные
            </p>
            <div className="private__data-main">
                <p className="private__subtitle">Основные данные:</p>
                <p className="personal__data">Логин: <span>SHAMA</span></p>
                <p className="personal__data">Имя: <span>Шамиль</span></p>
                <p className="personal__data">Фамилия: <span>Самусенко</span></p>

                <p className="private__subtitle">Дополнительные данные:</p>
                <p className="personal__data">Электронная почта: <span>Shamil@mail.ru</span></p>
                <p className="personal__data">Адрес: <span>Речная 46-2</span></p>
                <p className="personal__data">Телефон: <span>8-952-99999999</span></p>
                <p className="personal__data">ИНН: <span>701777777777</span></p>
                <p className="personal__data">ОРГНИП: <span>701777777777</span></p>
            </div>
            <img src="./User.png" className="private__user" alt="Пользователь"/>
        </div>
    );
};