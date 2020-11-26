import React from 'react';
import { useSelector } from 'react-redux';

import './Style/privateOffice.css';


export const PersonalData = () => {
    const userData = useSelector(state => state.auth.userData);

    const status = 
        (userData.status === 'ADMIN') ? 
            {status:'Админ', color: 'green'} :
        (userData.status === 'ACCREDITED') ?
            {status: 'Аккредитован', color: 'green'} :
        (userData.status === 'CONSIDERATION') ?
            {status: 'Не аккредитован', color: '#e1aa00'} :
        (userData.status === 'BANNED') ?
            {status: 'Черный список', color: 'black'} : '';


    return (
        <div className="private__content">
            <p className="private__title">
                Личные данные <span style={{backgroundColor: status.color}}>{status.status}</span>
            </p>
            <div className="private__data-main">
                <p className="private__subtitle">Основные данные:</p>
                <p className="personal__data">Логин: <span>{userData.login}</span></p>
                <p className="personal__data">Имя: <span>{userData.first_name}</span></p>
                <p className="personal__data">Фамилия: <span>{userData.last_name}</span></p>

                <p className="private__subtitle">Дополнительные данные:</p>
				{userData.data &&
					<>
					{(userData.role === 'ORGANIZATION') &&
                    	<p className="personal__data">Наименование организации: <span>{userData.data.organization_name}</span> </p>}
					{(userData.role === 'INDIVIDUAL') &&
						<p className="personal__data">ИП: <span>{userData.last_name}</span> </p>}
					</>
               	}

                <p className="personal__data">Электронная почта: <span>{userData.email}</span></p>

                {userData.data &&
                    <>
						{(userData.role === 'ORGANIZATION') &&
							<>
								<p className="personal__data">Физический адрес: <span>{userData.data.actual_address}</span></p>
								<p className="personal__data">Юридический адрес: <span>{userData.data.legal_address}</span></p>
							</>}
						{(userData.role === 'ORGANIZATION') &&
							<p className="personal__data">ОГРН: <span>{userData.data.ogrn}</span></p>}
						{(userData.role === 'INDIVIDUAL') &&
							<p className="personal__data">ОГРНИП: <span>{userData.data.ogrnip}</span></p>}
						{(userData.role !== 'ADMIN') &&
							<>
								<p className="personal__data">ИНН: <span>{userData.data.inn}</span></p>
								<p className="personal__data">Об организации: <span>{userData.data.about}</span></p>
							</>}
					</>}
            </div>
            <img src="./User.png" className="private__user" alt="Пользователь"/>
        </div>
    );
};