import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrdersFromServer, hideLoader, showLoader } from '../../redux/actions';
import { getDataFromServer } from '../../server';
import { OrdersItem } from '../Requisition/OrdersItem';
import './Style/privateOffice.css';


export const OrderList = () => {

	const dispatch = useDispatch();
    const orders = useSelector(state => state.orders.orders);
    
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
        <div className="private__content">
            <p className="private__title">
                Список всех закупок
            </p>
			<ul className="requisition__list">
				<OrdersItem orders={orders} keyObj={'admin'}/>
            </ul>
        </div>
    );
};