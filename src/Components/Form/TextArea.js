import React from 'react';
import './Style/blockInput.css';

export const TextArea = ({ name, user, setUser, company = false, answer = false }) => {

	return (
        <div  className="block_input">
			{!answer &&<label htmlFor="info">{company ? 'Информация об организации/ИП (компетенции, опыт и вид деятельности, сайт)' :
				'Расскажите о себе (компетенции, опыт, сайт (если имеется))'} 
				<span  className="label">*</span>
			</label>}
            {answer &&<label htmlFor="info"> 
				Пожалуйста, ответьте на вопрос пользователя. Ваш ответ будет виден на основной странице FAQ
			    </label>
            }
            <textarea 
                name="info"
				type="textarea"
				required
                className="form-control"
                value={user[name]}
                onChange={(e) => {setUser(user =>
                    ({...user, [name]: e.target.value}))}}>
            </textarea>
		</div>
    );
};