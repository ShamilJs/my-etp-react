import React from 'react';
import './Style/mainMenu.css';
// import { Home } from '../Home/Home';
// import { ForSuppliers } from '../ForSuppliers/ForSuppliers';
// import { Requisition } from '../Requisition/Requisition';
// import { Contact } from '../Contact/Contact';
// import { Home } from '../Home';


import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";


export const MainMenu = () => {
    return (
        <>
        <div className="cryptos-main-menu">
            <div className="classNamey-nav-container breakpoint-off">
                <div className="container">
                    <nav className="classNamey-navbar" id="cryptosNav">
                         {/* <p className="nav-brand">Здесь лого</p>   */}
                        <a className="nav-brand" href="/"><img src="./img/Logo_Supl.png" alt="Logo_Supl"/></a>

                        {/* Burger */}
                        <div className="classNamey-navbar-toggler">
                            <span className="navbarToggler">
                                {/* active */}
                                <span/><span/><span/>
							</span>
                        </div>

                        <div className="classNamey-menu ">
                             {/* menu-on
                            close btn  */}
                            <div className="classNameycloseIcon">
                                <div className="cross-wrap">
									<span className="top"/>
									<span className="bottom"/>
								</div>
                            </div>

                            <div className="classNameynav">
                                <ul>
                                    <li><Link to="/">Главная</Link></li>
                                    <li><Link to="/information_for_suppliers">Поставщикам</Link></li>
                                    <li><Link to="/requisition">Заявки</Link></li>
                                    <li><Link to="/contacts">Контакты</Link></li>
                                </ul>

                                <div className="header-newsletter-form">
                                    <form>
                                        <input type="text"  placeholder="Поиск"/>
                                        <button>Поиск</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        {/* <Switch>
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
        </Switch> */}
        </>
    );

};