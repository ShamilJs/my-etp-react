import React from 'react';
import './style.css';
import { TopHeader } from './Components/Header/TopHeader';
import { MainMenu } from './Components/Header/MainMenu';
import { Preloader } from './Components/Other/Preloader';
import { RegistrIndividual } from './Components/Form/RegistrIndividual';
import { RegistrCompany } from './Components/Form/RegistrCompany';
import { ModalReference } from './Components/Other/ModalReference';
import { Home } from './Components/Home/Home';
import { ForSuppliers } from './Components/ForSuppliers/ForSuppliers';
import { Registration } from './Components/Form/Registration';
import { Contact } from './Components/Contact/Contact';
import { Requisition } from './Components/Requisition/Requisition';
import { FAQ } from './Components/FAQ/FAQ';
import { PrivateOffice } from './Components/PrivateOffice/PrivateOffice';
import {
	BrowserRouter as Router,
	Switch,
	Route,
  } from "react-router-dom";
import { Footer } from './Components/Footer/Footer';
import { useSelector } from 'react-redux';


  

const App = () => {

	const windowRegistr = useSelector(state => state.app.windowRegistr);

	return (
		<>
		<Router>
			
			<header className="header-area">
				<TopHeader/>
				<MainMenu/>
			</header>
			{(windowRegistr === '1') && <RegistrIndividual/>}
			{(windowRegistr === '2') && <RegistrCompany/>}
			{false && <ModalReference/>}
				{false && <Preloader/>}
			
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
						<Registration/>            
					</Route>
					<Route path="/faq">
						<FAQ/>            
					</Route>
					<Route path="/private_office">
						<PrivateOffice/>            
					</Route>
					<Route path="/registration/individual">
						<PrivateOffice/>            
					</Route>
				</Switch>
			{/* <Footer/> */}
		</Router>
		
		</>
	);
}

export default App;
