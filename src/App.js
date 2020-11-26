import React, { useEffect } from 'react';
import './style.css';
import { TopHeader } from './Components/Header/TopHeader';
import { MainMenu } from './Components/Header/MainMenu';
import { Preloader } from './Components/Other/Preloader';
import { Home } from './Components/Home/Home';
import { ForSuppliers } from './Components/ForSuppliers/ForSuppliers';
import { AuthOrRegistr } from './Components/Form/AuthOrRegistr';
import { Contact } from './Components/Contact/Contact';
import { Requisition } from './Components/Requisition/Requisition';
import { FAQ } from './Components/FAQ/FAQ';
import { PrivateOffice } from './Components/PrivateOffice/PrivateOffice';
import {
	BrowserRouter as Router,
	Switch,
	Route,
  } from "react-router-dom";
import { RequisitionCard } from './Components/Requisition/RequisitionCard';
import { useDispatch } from 'react-redux';
import { Footer } from './Components/Footer/Footer';
import { PrivacyPolicy } from './Components/Other/PrivacyPolicy';
import { PurchaseRequisition } from './Components/Requisition/PurchaseRequisition';
import { ModalDiscription } from './Components/Other/ModalDiscription';
import { ModalHello } from './Components/Other/ModalHello';
import { ShowRequis } from './Components/Requisition/ShowRequis';
import { getAboutUser } from './server';
import { hideLoader, showLoader, updateUserData } from './redux/actions';
  

const App = () => {
	const localUser = JSON.parse(localStorage.getItem('userObjId'));
	const dispatch = useDispatch();

	useEffect(() => {
		if (localUser) {
			dispatch(showLoader())
			getAboutUser('aboutUserAPI', localUser)
			.then(res => {
				dispatch(updateUserData(res));
				dispatch(hideLoader());
			})
			.catch(err => {
				console.log(err)
				localStorage.removeItem('userObjId');
				dispatch(hideLoader())
			});
		}
		// eslint-disable-next-line
	}, [])


	return (
		<Router>
			<div className="app_body">
				<header className="header-area">
					<TopHeader/>
					<MainMenu/>
				</header>
				<div className="main-body">
					<RequisitionCard/>
					<PurchaseRequisition/>
					<ShowRequis/>
					<Preloader/>
					<PrivacyPolicy/>
					<ModalDiscription/>
					<ModalHello/>
					<Switch>
						<Route exact path="/">
							<Home/>            
						</Route>
						<Route path="/information_for_suppliers">
							<ForSuppliers/>            
						</Route>
						<Route path="/requisition">
							<Requisition/>            
						</Route>
						<Route path="/contacts">
							<Contact/>            
						</Route>
						<Route path="/registration">
							<AuthOrRegistr/>            
						</Route>
						<Route path="/faq">
							<FAQ/>            
						</Route>
						<Route path="/private_office">
							<PrivateOffice/>            
						</Route>
					</Switch>
				</div>
				<Footer/>
			</div>
		</Router>
	);
}

export default App;
