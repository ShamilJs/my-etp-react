
import React from 'react';
import { MainTitle } from '../Header/MainTitle';
import './Style/privateOffice.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
  } from "react-router-dom";
import { PersonalData } from './PersonalData';
import { AddOrder } from './AddOrder';
import { MessageFromUser } from './MessageFromUser';
import { OrderList } from './OrderList';
import { Accreditations } from './Accreditations';
import { SuppliersList } from './SuppliersList';

export const PrivateOffice = () => {
    return (
		<>
    		<MainTitle title={'Личный кабинет'} login={true}/>
			<div className="private">
				<div className="container container_block">
					<Router>
						<div className="private__block">
							<ul className="private__menu">
								<NavLink 
									exact activeClassName="private__menu-active"
									className="private__item"
									to="/private_office">Личные данные
								</NavLink>
								<NavLink 
									activeClassName="private__menu-active"
									className="private__item"
									to="/private_office/create_an_order">Создание заявки
								</NavLink>
								<NavLink 
									activeClassName="private__menu-active"
									className="private__item"
									to="/private_office/order_list">Список всех заявок
								</NavLink>
								<NavLink 
									activeClassName="private__menu-active"
									className="private__item"
									to="/private_office/acreditation_reguisition">Заявки на аккредитацию
								</NavLink>
								<NavLink 
									activeClassName="private__menu-active"
									className="private__item"
									to="/private_office/suppliers_list">Список поставщиков
								</NavLink>
								<NavLink 
									activeClassName="private__menu-active"
									className="private__item"
									to="/private_office/messages_from_users">Сообщения от пользователей
								</NavLink>
							</ul>
						</div>
						<Switch>
							<Route exact path="/private_office">
								<PersonalData/>            
							</Route>
							<Route path="/private_office/create_an_order">
								<AddOrder/>            
							</Route>
							<Route path="/private_office/order_list">
								<OrderList/>            
							</Route>
							<Route path="/private_office/acreditation_reguisition">
								<Accreditations/>            
							</Route>
							<Route path="/private_office/suppliers_list">
								<SuppliersList/>            
							</Route>
							<Route path="/private_office/messages_from_users">
								<MessageFromUser/>            
							</Route>
						</Switch>
					</Router>
				</div>
			</div>
		</>
    );
};