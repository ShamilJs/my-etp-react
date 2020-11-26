import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openRequisitionExecuitor } from '../../redux/actions';
import './Style/requisition.css';

export const ShowRequis = () => {
	const dispatch = useDispatch();
	const order = useSelector(state => state.app.order);
	const requisitionExecuitor = useSelector(state => state.app.requisitionExecutor);

	const [view, setView] = useState(false);
	
	if (!requisitionExecuitor) return null;



	const closeModal = () => {
		dispatch(openRequisitionExecuitor(false, order));
	}

    return (
		<div  className="requisition-card">
			<div  className="overlay-card">
				<div  className="requisition-card__content">
					<div className="modal__text">                        
						<p className="requisition-card__title">
							Список заявок на закупку: <span>{order.orderName} </span>
						</p>
						<ul className="execuitor__list">
							<li className={view ? "execuitor__item execuitor-view" : "execuitor__item"}>
								<div className={view ? "execuitor__main execuitor-view" : "execuitor__main"}>
									<p className="requisition-card__item execuitor-text"><span>Поставщик:</span> SiberIT</p>
									<p className="requisition-card__item execuitor-text"><span>Телефон:</span> +79888858888</p>
									<p className="requisition-card__item execuitor-text"><span>Сумма предложения:</span> 200 тыс.руб.</p>
									<p className="requisition-card__item execuitor-text"><span>Условия сотрудничества:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
										Necessitatibus voluptas sint doloribus adipisci accusantium! Delectus explicabo ducimus voluptatem debitis, 
										nostrum aperiam nobis quod pariatur, perferendis, dignissimos est nulla iure consequatur!
									</p>
									<p  className="requisition-card__item execuitor-text"><span>Описание предложения:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
										Necessitatibus voluptas sint doloribus adipisci accusantium! Delectus explicabo ducimus voluptatem debitis, 
										nostrum aperiam nobis quod pariatur, perferendis, dignissimos est nulla iure consequatur!
									</p>
								</div>
								<div className="requisition__control">
									<button 
										onClick={() => {
											setView(!view);
										}}
										className="requisition__button">{view ? 'Скрыть' : 'Подробнее...'}
									</button>
								</div>
							</li>
							<li className={view ? "execuitor__item execuitor-view" : "execuitor__item"}>
								<div className={view ? "execuitor__main execuitor-view" : "execuitor__main"}>
									<p className="requisition-card__item execuitor-text"><span>Поставщик:</span> SiberIT</p>
									<p className="requisition-card__item execuitor-text"><span>Телефон:</span> +79888858888</p>
									<p className="requisition-card__item execuitor-text"><span>Сумма предложения:</span> 200 тыс.руб.</p>
									<p className="requisition-card__item execuitor-text"><span>Условия сотрудничества:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
										Necessitatibus voluptas sint doloribus adipisci accusantium! Delectus explicabo ducimus voluptatem debitis, 
										nostrum aperiam nobis quod pariatur, perferendis, dignissimos est nulla iure consequatur!
									</p>
									<p  className="requisition-card__item execuitor-text"><span>Описание предложения:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
										Necessitatibus voluptas sint doloribus adipisci accusantium! Delectus explicabo ducimus voluptatem debitis, 
										nostrum aperiam nobis quod pariatur, perferendis, dignissimos est nulla iure consequatur!
									</p>
								</div>
								<div className="requisition__control">
									<button 
										onClick={() => {
											setView(!view);
										}}
										className="requisition__button">{view ? 'Скрыть' : 'Подробнее...'}
									</button>
								</div>
							</li>
							<li className={view ? "execuitor__item execuitor-view" : "execuitor__item"}>
								<div className={view ? "execuitor__main execuitor-view" : "execuitor__main"}>
									<p className="requisition-card__item execuitor-text"><span>Поставщик:</span> SiberIT</p>
									<p className="requisition-card__item execuitor-text"><span>Телефон:</span> +79888858888</p>
									<p className="requisition-card__item execuitor-text"><span>Сумма предложения:</span> 200 тыс.руб.</p>
									<p className="requisition-card__item execuitor-text"><span>Условия сотрудничества:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
										Necessitatibus voluptas sint doloribus adipisci accusantium! Delectus explicabo ducimus voluptatem debitis, 
										nostrum aperiam nobis quod pariatur, perferendis, dignissimos est nulla iure consequatur!
									</p>
									<p  className="requisition-card__item execuitor-text"><span>Описание предложения:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
										Necessitatibus voluptas sint doloribus adipisci accusantium! Delectus explicabo ducimus voluptatem debitis, 
										nostrum aperiam nobis quod pariatur, perferendis, dignissimos est nulla iure consequatur!
									</p>
								</div>
								<div className="requisition__control">
									<button 
										onClick={() => setView(!view)}
										className="requisition__button">{view ? 'Скрыть' : 'Подробнее...'}
									</button>
								</div>
							</li>
						</ul>
					</div> 

				</div>
				<div 
					onClick={closeModal}
					className="requisition-card__close">X
				</div>
				
			</div>
		</div>
    );
};