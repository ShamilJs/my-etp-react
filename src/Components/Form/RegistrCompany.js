import React, { useState } from 'react';
import { MainTitle } from '../Header/MainTitle';
import { BlockInput } from './BlockInput';
import { Checkbox } from './Checkbox';
import './Style/blockInput.css'
import { TextArea } from './TextArea';


export const RegistrCompany = ({ windowRegistr }) => {
	const [newCompany, setNewCompany] = useState({});
	
	if (!windowRegistr) return null;

    return (
		<>
			<MainTitle title={'Аккредитация юр. лиц'}/>
			<div  className="registr">
				<div  className="container  container__form">
					<form  className="registr__form">    
							<p  className="registr__form-title">Уважаемые партнеры!
								Для прохождения процедуры аккредитация на электронной
								торговой площадке "Название площадки" в качестве участника
								необходимо предоставить следующую информацию:
							</p>
						<div  className="block_flex">
							<BlockInput user={newCompany} setUser={setNewCompany} type={'login'}/>
							<BlockInput user={newCompany} setUser={setNewCompany} type={'surname'}/>
							<BlockInput user={newCompany} setUser={setNewCompany} type={'name'}/>
							<BlockInput user={newCompany} setUser={setNewCompany} type={'patronymic'}/>
						</div>
						<div  className="block_flex">
							<BlockInput user={newCompany} setUser={setNewCompany} type={'IP'}/>
							<BlockInput user={newCompany} setUser={setNewCompany} type={'inn'}/>
							<BlockInput user={newCompany} setUser={setNewCompany} type={'orgrnip'}/>
						</div>
						<div  className="block_flex">
							<BlockInput user={newCompany} setUser={setNewCompany} type={'addres'}/>
							<BlockInput user={newCompany} setUser={setNewCompany} type={'phone'}/>
							<BlockInput user={newCompany} setUser={setNewCompany} type={'email'}/>
						</div>

						<div  className="block_flex">
							<TextArea name={"info"} user={newCompany} setUser={setNewCompany} company={true}/>
						</div>
						<Checkbox/>
						<button  className="btn cryptos-btn btn-2 mt-30">Отправить</button>
					</form>
				</div>
			</div>
		</>
    );
};