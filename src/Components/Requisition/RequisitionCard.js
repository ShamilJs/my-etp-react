import React from 'react';
import { useDispatch } from 'react-redux';
import { openRequisitionCard } from '../../redux/actions';
import './Style/requisition.css';


export const RequisitionCard = () => {
    const dispatch = useDispatch();
    return (
        <div  className="requisition-card">
            <div  className="overlay-card">
                <div  className="requisition-card__content">                         
                    <p  className="requisition-card__title">
                        Заявка 000: <span>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt odit quos, harum quis quibusdam ratione provident dolore hic, ea assumenda minus repellat sint iusto dolor nobis voluptatibus, facere et? Voluptatibus!"</span>
					</p>
                </div>
                <div onClick={() => dispatch(openRequisitionCard(false))} className="requisition-card__close">X</div>
            </div>
        </div>
    );
};