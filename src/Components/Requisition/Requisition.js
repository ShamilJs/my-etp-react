import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MainTitle } from '../Header/MainTitle';
import './Style/requisition.css';
import { NavLink, useRouteMatch } from "react-router-dom";
import { getDataFromServer } from '../../server';
import { getOrdersFromServer, hideLoader, showLoader } from '../../redux/actions';
import { OrdersItem } from './OrdersItem';
import { NoAccess } from '../Other/NoAccess';


export const Requisition = () => {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders.orders);
    const userData = useSelector(state => state.auth.userData);
        

    let { url } = useRouteMatch();
    
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

	if (!userData.status ||
		userData.status === 'CONSIDERATION' ||
		userData.status === 'BANNED')	return <NoAccess/>

    return (
        <>
            <MainTitle title={'Закупки'}/>
            <div className="requisition">
                <div className="container requisition__content">
                    <ul className="requisition__list">
						<OrdersItem orders={orders}/>
                    </ul>
                        <ul className="requisition__pagination pagination">
                            <NavLink 
                                exact to={`${url}/page_1`}
                                className="pagination_item"
                            >1</NavLink>
                            <NavLink 
                                to={`${url}/page_2`}
                                className="pagination_item"
                            >2</NavLink>
                            <NavLink 
                                to={`${url}/page_3`}
                                className="pagination_item"
                            >3</NavLink>
                            <NavLink 
                                to={`${url}/page_4`}
                                className="pagination_item"
                            >4</NavLink>
                            <NavLink  
                                to={`${url}/page_5`}
                                className="pagination_item"
                            >5</NavLink>
                            <NavLink  
                                to={`${url}/page_6`}
                                className="pagination_item"
                            >6</NavLink>
                            <NavLink 
                                to={`${url}/page_7`}
                                className="pagination_item"
                            >7</NavLink>
                        </ul>
                </div>
            </div>
        </>
	);
};