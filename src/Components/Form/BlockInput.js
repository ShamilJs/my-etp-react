import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './Style/blockInput.css'


export const BlockInput = ({ type, user, setUser, required = true}) => {
	const promptArr = useSelector(state => state.app.promptArray);
	const [showPrompt, setShowPrompt] = useState(false)

	useEffect(() => {
		let value = false;
		if (!promptArr || promptArr.length === 0) {
			setShowPrompt(value);
			return;
		} else {
			promptArr.forEach(item => {
				if (item === type) value = true;
			});
		}
		setShowPrompt(value);
		// eslint-disable-next-line
	}, [promptArr]);
  

    let title = 
        (type === 'login') ? 'Логин' :
        (type === 'last_name') ? 'Фамилия' :
        (type === 'first_name') ? 'Имя' :
        (type === 'addres') ? 'Адрес' :
        (type === 'actual_address') ? 'Физический адрес' :
        (type === 'password_repeat') ? 'Повторите пароль' :
        (type === 'email') ? 'Электронная почта' :
        (type === 'phone') ? 'Телефон' :
		(type === 'organization_name') ? 'Наименование организации/ИП ' :
        (type === 'inn') ? 'ИНН' :
        (type === 'password') ? 'Пароль' :
        (type === 'orderName') ? 'Название закупки' :
        (type === 'technologies') ? 'Стек технологий' :
        (type === 'command') ? 'Совтав команды' :
        (type === 'butget') ? 'Условный бюджет (руб.)' :
        (type === 'dateCreate') ? 'Дата окончания подачи заявок' :
        (type === 'dateContract') ? 'Срок заключения договора' :
        (type === 'termsOfCooperation') ? 'Условия сотрудничества' :
        (type === 'responsiblePerson') ? 'Ответственное лицо' :
        (type === 'offerAmount') ? 'Сумма предложения (руб.)' :
        'ОГРН (ОГРНИП)';     
		     
    return (
        <div className="block_input">
			<label htmlFor={type}>{title}
                {required && <span  className="label">*</span>}
				
            </label>
            <input 
                name={type} 
				type={(type === 'password' || type === 'password_repeat') ? 'password' :
                    (type === 'dateCreate' || type === 'dateContract') ? 'date' : 
                    (type === 'butget' || type === 'offerAmount') ? 'number' : "text"}
                className={showPrompt ? "form-control border" : "form-control"}
                value={user[type] ? user[type] : ''}
				onChange={(e) => {
                    if (required) {
                        if (e.target.value.trim() === '') setShowPrompt(true)
						else setShowPrompt(false);
                    }
					setUser(user => ({...user, [e.target.name]: e.target.value}))}
				}
            />
            {showPrompt && <div className="block__input-disrcr">
					Данное поле не может быть пустым
				</div>}
		</div>
    );
};