import React from 'react';
import './Style/mainMenu.css';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { openWindowRegistration} from '../../redux/actions';


export const MainMenu = () => {
    const dispatch = useDispatch();
    return (
        <>
        <div className="cryptos-main-menu">
            <div className="classNamey-nav-container breakpoint-off">
                <div className="container">
                    <nav className="classNamey-navbar" id="cryptosNav">
                         <p className="nav-brand">Здесь лого</p>  
                        {/* <a className="nav-brand" href="/"><img src="./img/Logo_Supl.png" alt="Logo_Supl"/></a> */}

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
                                    <li>
										<Link 
											onClick={() => dispatch(openWindowRegistration(false))}
											to="/">Главная
										</Link>
									</li>
                                    <li><Link onClick={() => dispatch(openWindowRegistration(false))} to="/information_for_suppliers">Поставщикам</Link></li>
									<li>
										<Link 
											onClick={() => dispatch(openWindowRegistration(false))}
											to="/accreditation">Аккредитация
										</Link>
									</li>
                                    <li>
										<Link 
                                            onClick={() => dispatch(openWindowRegistration(false))} 
                                            to="/requisition">Заявки
                                        </Link>
                                    </li>
                                    <li>
										<Link 
											onClick={() => dispatch(openWindowRegistration(false))}
											to="/contacts">Контакты
										</Link>
									</li>
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
        </>
    );

};