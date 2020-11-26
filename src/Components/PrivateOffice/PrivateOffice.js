
import React from 'react';
import { MainTitle } from '../Header/MainTitle';
import './Style/privateOffice.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
	useRouteMatch,
  } from "react-router-dom";
import { PersonalData } from './PersonalData';
import { AddOrder } from './AddOrder';
import { MessageFromUser } from './MessageFromUser';
import { OrderList } from './OrderList';
import { Accreditations } from './Accreditations';
import { SuppliersList } from './SuppliersList';
import { useSelector } from 'react-redux';
import { NoAccess } from '../Other/NoAccess';


export const PrivateOffice = () => {
	const { url } = useRouteMatch();
	const role = useSelector(state => state.auth.userData.role);
	const userData = useSelector(state => state.auth.userData);

	if (!userData.status) return <NoAccess/>

	const link = [
		{
			name: 'Личные данные',
			to: `${url}`,
		},
		(role === 'ADMIN') ? 
			{
				name: 'Создание закупки',
				to: `${url}/create_an_order`,
			} : null,
			(role === 'ADMIN') ? 
			{
				name: 'Список всех закупок',
				to: `${url}/order_list`,
			} : null,
			(role === 'ADMIN') ? 
			{
				name: 'Заявки на аккредитацию',
				to: `${url}/acreditation_reguisition`,
			} : null,
			(role === 'ADMIN') ? 
			{
				name: 'Список поставщиков',
				to: `${url}/suppliers_list`,
			} : null,
			(role === 'ADMIN') ? 
			{
				name: 'Сообщения от пользователей',
				to: `${url}/messages_from_users`,
			} : null
	]

	const resultLink = link.filter(item => item !== null)

    return (
		<>
    		<MainTitle title={'Личный кабинет'} login={true}/>
			<div className="private">
				<div className="container container_block">
					<Router>
						<div className="private__block">
							<ul className="private__menu">
								{resultLink.map((item, i) => (
									<NavLink key={i}
										exact activeClassName="private__menu-active"
										className="private__item"
										to={item.to}>{item.name}
									</NavLink>
								))}
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