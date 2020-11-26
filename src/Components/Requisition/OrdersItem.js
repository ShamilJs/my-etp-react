import React from 'react';
import { useDispatch } from 'react-redux';
import { openRequisitionCard } from '../../redux/actions';
import './Style/requisition.css';


export const OrdersItem = ({ orders, keyObj = 'user' }) => {
	const dispatch = useDispatch();

	const adminOfficce = {
		user: <div className="requisition__butget">Условный бютжет: 200 тыс.руб.</div>,
		admin: <div className="requisition__requisitions">Всего заявок: <span>10</span></div>
	}

    return (
		<>
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
							{adminOfficce[keyObj]}
						</div>
					</div>
				</li>
			))}
		</>
    );
};