import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import './Style/header.css';

export const TopHeader = () => {
    const userData = useSelector(state => state.auth.userData);
    const [view, setView] = useState(false)
    const localUser = JSON.parse(localStorage.getItem('userObjId'));

    useEffect(() => {
        if (!localUser) setView(false)
        else setView(true)
        // eslint-disable-next-line 
    }, [userData])

    return (
        <div className="top-header">
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-12 h-100">
                        <div className="top-header-content h-100 d-flex align-items-center justify-content-between">
                            <div className="top-headline">
                                <p>Добро пожаловать на <span>ЭТП</span></p>
                            </div>
                            <div className="login-faq-earn-money">
								{!view && <Link 
                                    to="/registration" 
								>Авторизация | Регистрация
								</Link>}
                                {view && <Link to="/private_office">
									<div className="login">
										<img className="login__img" src="./pngegg.png" alt=""/>
									</div>
                                </Link>}
                                <Link 
                                to="/faq">FAQ</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};