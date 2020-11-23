import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openRequisitionCard } from '../../redux/actions';
import { MainTitle } from '../Header/MainTitle';
import './Style/requisition.css';
import { BrowserRouter as Router, NavLink, useRouteMatch } from "react-router-dom";
import { getDataFromServer } from '../../server';
import { getOrdersFromServer, hideLoader, showLoader } from '../../redux/actions';


export const Requisition = () => {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders.orders);

    let { path, url } = useRouteMatch();
    
    useEffect(() => {
        dispatch(showLoader());
        getDataFromServer('orderAPI')
        .then(response => {
            let arr = [];
            for (let key in response) arr.push(response[key])
            dispatch(getOrdersFromServer(arr));
            dispatch(hideLoader());
        })
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <MainTitle title={'Закупки'}/>
            <div className="requisition">
                <div className="container requisition__content">
                    <ul className="requisition__list">
                        {orders.map((order, i) => (
                            <li key={i} className="requisition__item">
								<p className="requisition__title">{order.orderName}</p>
                                <div className="requisition__control">
                                    <button 
                                        onClick={() => dispatch(openRequisitionCard(true, order))}
                                        className="requisition__button">Подробнее...
                                    </button>
									<div className="requisition__info">
										<div className="requisition__status status-new">Прием заявок</div>
										<div className="requisition__date">Дата окончания приема заявок: 26.12.2020г</div>
										<div className="requisition__butget">Условный бютжет: 200 тыс.руб.</div>
									</div>
                                </div>
							</li>
                        ))}
                    </ul>
                    {/* <Router> */}
                        <ul className="requisition__pagination pagination">
                            <NavLink 
                                exact to={`${url}/page_1`}
                                // exact to="/requisition/page_1" 
                                className="pagination_item"
                            >1</NavLink>
                            <NavLink 
                                to={`${url}/page_2`}
                                // to="/requisition/page_2" 
                                className="pagination_item"
                            >2</NavLink>
                            <NavLink 
                                to={`${url}/page_3`}
                                // to="/requisition/page_3" 
                                className="pagination_item"
                            >3</NavLink>
                            <NavLink 
                                to={`${url}/page_4`}
                                // to="/requisition/page_4" 
                                className="pagination_item"
                            >4</NavLink>
                            <NavLink  
                                to={`${url}/page_5`}
                                // to="/requisition/page_5" 
                                className="pagination_item"
                            >5</NavLink>
                            <NavLink  
                                to={`${url}/page_6`}
                                // to="/requisition/page_6" 
                                className="pagination_item"
                            >6</NavLink>
                            <NavLink 
                                to={`${url}/page_7`}
                                // to="/requisition/page_7" 
                                className="pagination_item"
                            >7</NavLink>
                        </ul>
                    {/* </Router> */}
                </div>
            </div>
        </>
    );
};