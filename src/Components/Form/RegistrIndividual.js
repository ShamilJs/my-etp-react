import React, { useState } from 'react';
import { MainTitle } from '../Header/MainTitle';
import { BlockInput } from './BlockInput';
import { Checkbox } from './Checkbox';
import './Style/blockInput.css'
import { TextArea } from './TextArea';


export const RegistrIndividual = ({ windowRegistr }) => {
	const [newIndividual, setNewIndividual] = useState({});
	if (!windowRegistr) return null;

    return (
      	<>
			<MainTitle title={'Аккредитация физ. лиц'}/>
			<div  className="registr">
				<div  className="container  container__form">
					<form  className="registr__form">    
						<p  className="registr__form-title">Уважаемые партнеры!
							Для прохождения процедуры аккредитации на электронной
							торговой площадке "Название площадки" в качестве участника
							необходимо предоставить следующую информацию:
						</p>
						<div  className="block_flex">
							<BlockInput user={newIndividual} setUser={setNewIndividual} type={'login'}/>
							<BlockInput user={newIndividual} setUser={setNewIndividual} type={'surname'}/>
							<BlockInput user={newIndividual} setUser={setNewIndividual} type={'name'}/>
							<BlockInput user={newIndividual} setUser={setNewIndividual} type={'patronymic'}/>
						</div>
						<div  className="block_flex">
							<BlockInput user={newIndividual} setUser={setNewIndividual} type={'addres'}/>
							<BlockInput user={newIndividual} setUser={setNewIndividual} type={'phone'}/>
							<BlockInput user={newIndividual} setUser={setNewIndividual} type={'email'}/>
						</div>

						<div  className="block_flex">
							<TextArea name={"info"} user={newIndividual} setUser={setNewIndividual}/>
						</div>
						<Checkbox/>
						<button  className="btn cryptos-btn btn-2 mt-30">Отправить</button>
					</form>
				</div>
			</div>
		</>
    );
};