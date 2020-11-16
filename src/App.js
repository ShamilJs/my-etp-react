import React from 'react';
import './style.css';
import { TopHeader } from './Components/Header/TopHeader';
import { MainMenu } from './Components/Header/MainMenu';
import { Preloader } from './Components/Other/Preloader';
import { ModalReference } from './Components/Other/ModalReference';
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
import { useSelector } from 'react-redux';
import { Footer } from './Components/Footer/Footer';
import { Accreditation } from './Components/Form/Accreditation';


  

const App = () => {

	const requisitionCard = useSelector(state => state.app.requisitionCard);

	return (
		<>
		<Router>
			
			<header className="header-area">
				<TopHeader/>
				<MainMenu/>
			</header>
			{requisitionCard && <RequisitionCard/>}
			{false && <ModalReference/>}
			<Preloader/>
			
				<Switch>
					<Route exact path="/">
						<Home/>            
					</Route>
					<Route path="/information_for_suppliers">
						<ForSuppliers/>            
					</Route>
					<Route path="/accreditation">
						<Accreditation/>            
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
			<Footer/>
		</Router>
		
		</>
	);
}

export default App;
