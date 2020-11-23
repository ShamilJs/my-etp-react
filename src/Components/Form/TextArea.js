import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './Style/blockInput.css';

export const TextArea = ({ name, user, setUser, company = false, answer = false, required = true }) => {
    const promptArr = useSelector(state => state.app.promptArray);
	const [showPrompt, setShowPrompt] = useState(false)

	useEffect(() => {
		let value = false;
		if (!promptArr || promptArr.length === 0) {
			setShowPrompt(value);
			return;
		} else {
			promptArr.forEach(item => {
				if (item === name) value = true;
			});
		}
        setShowPrompt(value);
        // eslint-disable-next-line
    }, [promptArr]);
    

    let title = 
        (company && !answer && (name === 'about')) ? 'Информация об организации (компетенции, опыт и вид деятельности, сайт)' :
        (answer) ? 'Пожалуйста, ответьте на вопрос пользователя. Ваш ответ будет виден на основной странице FAQ' :
        (name === 'demands') ? 'Обязательные требования' :
        (name === 'demandsCommand') ? 'Требования к участникам команды' :
        (name === 'workingConditions') ? 'Условия работы' :
        (name === 'offerDescription') ? 'Описание предложения' :
        (!company && !answer && (name === 'about')) ? 'Расскажите о себе (компетенции, опыт, портфолио (если есть))' :
        'Описание закупки'
        
	return (
        <div  className="block_input mt-30">
            <label htmlFor="info"> 
				{title} {required && <span  className="label">*</span>}
			    </label>
            <textarea 
                name="info"
				type="textarea"
				required
                className={showPrompt ? "form-control border" : "form-control"}
                value={user[name] ? user[name] : ''}
                onChange={(e) => {
                    if (required) {
						if (e.target.value.trim() === '') setShowPrompt(true)
						else setShowPrompt(false)
                    }
                    setUser(user =>
                    ({...user, [name]: e.target.value}))}}>
            </textarea>
			{showPrompt && <div className="block__input-disrcr">
				Данное поле не может быть пустым
			</div>}
		</div>
    );
};