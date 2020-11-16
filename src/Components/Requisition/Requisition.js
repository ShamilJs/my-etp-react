import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openRequisitionCard } from '../../redux/actions';
import { MainTitle } from '../Header/MainTitle';
import './Style/requisition.css';
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { getOrders } from '../../server';
import { getOrdersFromServer, hideLoader, showLoader } from '../../redux/actions';


export const Requisition = () => {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders.orders);
    
    useEffect(() => {
        dispatch(showLoader());
        getOrders()
        .then(response => {
            dispatch(getOrdersFromServer(response));
            dispatch(hideLoader());
        })
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <MainTitle title={'Заявки'}/>
            <div className="requisition">
                <div className="container requisition__content">
                    <ul className="requisition__list">
                        {orders.map((order, i) => (
                            <li key={i} className="requisition__item">
								<p className="requisition__title">{order.title}</p>
								<button 
									onClick={() => dispatch(openRequisitionCard(true, order))}
									className="requisition__button">Подробнее...
								</button>
							</li>
                        ))}
                    </ul>
                    <Router>
                        <ul className="requisition__pagination pagination">
                            <NavLink 
                                exact to="/requisition/page_1" 
                                className="pagination_item"
                            >1</NavLink>
                            <NavLink 
                                to="/requisition/page_2" 
                                className="pagination_item"
                            >2</NavLink>
                            <NavLink 
                                to="/requisition/page_3" 
                                className="pagination_item"
                            >3</NavLink>
                            <NavLink 
                                to="/requisition/page_4" 
                                className="pagination_item"
                            >4</NavLink>
                            <NavLink  
                                to="/requisition/page_5" 
                                className="pagination_item"
                            >5</NavLink>
                            <NavLink  
                                to="/requisition/page_6" 
                                className="pagination_item"
                            >6</NavLink>
                            <NavLink 
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