import React from 'react';
import { useDispatch } from 'react-redux';
import { openRequisitionCard } from '../../redux/actions';
import { MainTitle } from '../Header/MainTitle';
import './Style/requisition.css';
import { BrowserRouter as Router, NavLink } from "react-router-dom";

export const Requisition = () => {
    const dispatch = useDispatch();

    return (
        <>
            <MainTitle title={'Заявки'}/>
            <div className="requisition">
                <div className="container requisition__content">
                    <ul className="requisition__list">
                        <li className="requisition__item">
                            <p className="requisition__title">Заявка s?1</p>
                            <button onClick={() => dispatch(openRequisitionCard(true))} className="requisition__button">Подробнее...</button>
                        </li>
                        <li className="requisition__item">
                            <p className="requisition__title">Заявка Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, nemo, soluta sapiente aliquam cumque corporis impedit, tenetur ea quas suscipit distinctio numquam commodi obcaecati rerum deserunt voluptas ipsum id. Quae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur exercitationem ab inventore, voluptate omnis fugit impedit odit explicabo. A necessitatibus sit iure est cumque nesciunt accusamus asperiores expedita, tempore voluptas?1</p>
                            <button onClick={() => dispatch(openRequisitionCard(true))} className="requisition__button">Подробнее...</button>
                        </li>
                        <li className="requisition__item">
                            <p className="requisition__title">Заявка Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur exercitationem ab inventore, voluptate omnis fugit impedit odit explicabo. A necessitatibus sit iure est cumque nesciunt accusamus asperiores expedita, tempore voluptas?1</p>
                            <button onClick={() => dispatch(openRequisitionCard(true))} className="requisition__button">Подробнее...</button>
                        </li>
                        <li className="requisition__item">
                            <p className="requisition__title">Заявка Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur exercitationem ab inventore, voluptate omnis fugit impedit odit explicabo. A necessitatibus sit iure est cumque nesciunt accusamus asperiores expedita, tempore voluptas?1</p>
                            <button onClick={() => dispatch(openRequisitionCard(true))} className="requisition__button">Подробнее...</button>
                        </li>
                        <li className="requisition__item">
                            <p className="requisition__title">Заявка Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur exercitationem ab inventore, voluptate omnis fugit impedit odit explicabo. A necessitatibus sit iure est cumque nesciunt accusamus asperiores expedita, tempore voluptas?1</p>
                            <button onClick={() => dispatch(openRequisitionCard(true))} className="requisition__button">Подробнее...</button>
                        </li>
                    </ul>
                    <Router>
                        <ul className="requisition__pagination pagination">
                            <NavLink activeStyle={{textDecoration: "underline"}} 
                                exact to="/requisition/page_1" 
                                className="pagination_item"
                            >1</NavLink>
                            <NavLink activeStyle={{textDecoration: "underline"}} 
                                to="/requisition/page_2" 
                                className="pagination_item"
                            >2</NavLink>
                            <NavLink activeStyle={{textDecoration: "underline"}} 
                                to="/requisition/page_3" 
                                className="pagination_item"
                            >3</NavLink>
                            <NavLink activeStyle={{textDecoration: "underline"}} 
                                to="/requisition/page_4" 
                                className="pagination_item"
                            >4</NavLink>
                            <NavLink activeStyle={{textDecoration: "underline"}} 
                                to="/requisition/page_5" 
                                className="pagination_item"
                            >5</NavLink>
                            <NavLink activeStyle={{textDecoration: "underline"}} 
                                to="/requisition/page_6" 
                                className="pagination_item"
                            >6</NavLink>
                            <NavLink activeStyle={{textDecoration: "underline"}} 
                                to="/requisition/page_7" 
                                className="pagination_item"
                            >7</NavLink>
                        </ul>
                    </Router>
                </div>
            </div>
        </>
    );
};