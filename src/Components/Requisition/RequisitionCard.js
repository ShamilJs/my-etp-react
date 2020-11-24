import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openPurchaseRequisition, openRequisitionCard } from '../../redux/actions';
import './Style/requisition.css';
import { Link } from "react-router-dom";

export const RequisitionCard = () => {
    const dispatch = useDispatch();
    const order = useSelector(state => state.app.order);

    return (
        <div  className="requisition-card">
            <div  className="overlay-card">
                <div  className="requisition-card__content">
					<div className="modal__text">                        
                    <p  className="requisition-card__title">
                        Закупка: <span>{order.orderName}</span>
					</p>
					<p  className="requisition-card__item">
                        Описание закупки: <span>{order.description}</span>
					</p>
					<p  className="requisition-card__item">
						Стек технологии: <span>{order.technologies}</span>
					</p>
					<p  className="requisition-card__item">
						Обязательные требования: <span>{order.demands}</span>
					</p>
					<p  className="requisition-card__item">
						Состав команды: <span>{order.command}</span>
					</p>
					<p  className="requisition-card__item">
						Требования к участникам команды: <span>{order.demandsCommand}</span>
					</p>
					<p  className="requisition-card__item">
						Условный бюджет (руб.): <span>{order.butget}</span>
					</p>
					<p  className="requisition-card__item">
						Срок подачи заявок: <span>{order.dateCreate}</span>
					</p>
					<p  className="requisition-card__item">
						Условия работы: <span>{order.workingConditions}</span>
					</p>
					<p  className="requisition-card__item">
						Срок заключения договора: <span>{order.dateContract}</span>
					</p>
					</div> 
                </div>
                <div onClick={() => dispatch(openRequisitionCard(false))} className="requisition-card__close">X</div>
				<div className="requisition-card__control">
					<Link
						className="requisition-card__ref"
						to="/information_for_suppliers"
						onClick={() => dispatch(openRequisitionCard(false))}
					>К сожалению, Вы не можете участвовать в закупках,
						т.к. Ваша аккредитация еще не одобрена...</Link>
					<div 
						className="requisition-card__response"
						onClick={() => dispatch(openPurchaseRequisition(true))}
					>Подать заявку</div>
				</div>
            </div>
        </div>
    );
};