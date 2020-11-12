import React, { useState } from 'react';
import './Style/blockInput.css';
import { MainTitle } from '../Header/MainTitle';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	NavLink,
  } from "react-router-dom";
import { RegistrIndividual } from './RegistrIndividual';
import { RegistrCompany } from './RegistrCompany';
import { Auth } from './Auth';
import { Registr } from './Registr';

export const AuthOrRegistr = () => {
	// const [tab, setTab] = useState(false);
	// const [open, setOpen] = useState('0');

    return (
		<Router>
			<MainTitle title={'Авторизация | Регистрация'}/>
			<div className="col-12 col-lg-6 custom-tabs">
				<div className="container">
					<div className="custom-tabs__content">
						<ul className="nav nav-tabs">
							<NavLink  exact to="/registration" className="nav-item">Авторизация</NavLink>
							<NavLink to="/registration/reg" className="nav-item">Регистрация</NavLink>
						</ul>
					</div>
				</div>
			</div>
			<Switch>
				<Route  exact path="/registration">
					<Auth/>            
				</Route>
				<Route path="/registration/reg">
					<Registr/>            
				</Route>
			</Switch>
		</Router>
    );
};