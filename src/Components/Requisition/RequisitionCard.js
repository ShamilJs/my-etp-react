import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openRequisitionCard } from '../../redux/actions';
import './Style/requisition.css';


export const RequisitionCard = () => {
    const dispatch = useDispatch();
    const order = useSelector(state => state.app.order);
    return (
        <div  className="requisition-card">
            <div  className="overlay-card">
                <div  className="requisition-card__content">                         
                    <p  className="requisition-card__title">
                        Заявка {order.number}: <span>{order.title}</span>
					</p>
                </div>
                <div onClick={() => dispatch(openRequisitionCard(false))} className="requisition-card__close">X</div>
            </div>
        </div>
    );
};