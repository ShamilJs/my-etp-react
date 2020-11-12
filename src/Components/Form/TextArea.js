import React from 'react';
import './Style/blockInput.css';

export const TextArea = ({ name, user, setUser, company = false }) => {

	return (
        <div  className="block_input">
			<label htmlFor="info">{company ? 'Информация об организации/ИП (компетенции, опыт и вид деятельности, сайт)' :
				'Расскажите о себе (компетенции, опыт, сайт (если имеется))'} 
				<span  className="label">*</span>
			</label>
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