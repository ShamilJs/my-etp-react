import React, { useState } from 'react';
import { MainTitle } from '../Header/MainTitle';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
  } from "react-router-dom";
import { RegistrIndividual } from './RegistrIndividual';
import { RegistrCompany } from './RegistrCompany';

export const Registration = () => {
	const [open, setOpen] = useState('0');

    return (
		<Router>
			<MainTitle title={'Регистрация'}/>
			<div  className="container h-100  mt-50 mb-50">
				<select 
					defaultValue="0"
					className="custom-select"
					onChange={(e) => setOpen(e.target.value)}
				>
					<option value="0">Выберите субъекта РФ</option>
					<option value="1">Физическое лицо</option>
					<option value="2">Юридическое лицо</option>
				</select>
					<Link className="btn cryptos-btn btn-2 mt-30 " to={`/registration/${(open === '1') ? 'individual' : (open === '2') ? 'company' : ''}`}> Далее </Link>
			</div>
			<Switch>
				<Route path="/registration/individual">
					<RegistrIndividual/>            
				</Route>
				<Route path="/registration/company">
					<RegistrCompany/>            
				</Route>
			</Switch>
		</Router>
    );
};