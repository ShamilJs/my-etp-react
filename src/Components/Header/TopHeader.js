import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { openWindowRegistration } from '../../redux/actions';

// import './Style/header.css';

export const TopHeader = () => {
    const dispatch = useDispatch();

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
                                <Link to="/registration" onClick={() => {dispatch(openWindowRegistration('0'))}}>Авторизация | Регистрация</Link>
                                <Link to="/faq">FAQ</Link>
                            </div>
                                <div className="auth__menu">
                                    <li><Link to="/private_office">Личный кабинет</Link></li>
                                    <li><Link to="/exit">Выход</Link></li>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};