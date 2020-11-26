import React from 'react';
import './Style/mainMenu.css';
import { Link } from "react-router-dom";
import {  useSelector } from 'react-redux';


export const MainMenu = () => {
	const status = useSelector(state => state.auth.userData.status);
	const link = [
		{
			name: 'Главная',
			to: '/'
		},
		{
			name: 'Поставщикам',
			to: '/information_for_suppliers'
		},
		(status && status !== 'BANNED' && status !== 'CONSIDERATION') ?
			{
				name: 'Закупки',
				to: '/requisition'
			} : null,
		{
			name: 'Контакты',
			to: '/contacts'
		},
	]

	const resultLink = link.filter(item => item !== null)

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
										{resultLink.map((item, i) => (
											<li key={i}>
												<Link to={item.to}>{item.name}</Link>
											</li>
										))}
									</ul>
									{(status && status !== 'BANNED' && status !== 'CONSIDERATION') ?
										<div className="header-newsletter-form">
											<form>
												<input type="text"  placeholder="Поиск"/>
												<button>Поиск</button>
											</form>
										</div> : ''}
								</div>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</>
    );

};