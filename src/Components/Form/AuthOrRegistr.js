import React from 'react';
import './Style/blockInput.css';
import { MainTitle } from '../Header/MainTitle';
import {
	Switch,
	Route,
	NavLink,
	useRouteMatch,
  } from "react-router-dom";
import { Auth } from './Auth';
import { Registr } from './Registr';

export const AuthOrRegistr = () => {
	let { path, url } = useRouteMatch();

    return (
		<>
			<MainTitle title={'Авторизация | Регистрация'}/>
			<div className="col-12 col-lg-6 custom-tabs">
				<div className="container">
					<div className="custom-tabs__content">
						<ul className="nav nav-tabs">
							<NavLink 
								exact to={url}
								className="nav-item"
								>Авторизация</NavLink>
							<NavLink
								to={`${url}/reg`}
								className="nav-item"
							>Регистрация</NavLink>
						</ul>
					</div>
				</div>
			</div>
			<Switch>
				<Route  exact path={path}>
					<Auth/>            
				</Route>
				<Route path={path}>
					<Registr/>            
				</Route>
			</Switch>
		</>
    );
};