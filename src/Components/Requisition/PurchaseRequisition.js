import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkInput } from '../../checkInput';
import { createPromptArray, openModalDiscription, openPurchaseRequisition } from '../../redux/actions';
import { BlockInput } from '../Form/BlockInput';
import { TextArea } from '../Form/TextArea';

export const PurchaseRequisition = () => {
	const dispatch = useDispatch();
	const [purchase, setPurchase] = useState({})
	const order = useSelector(state => state.app.order);
	const purchaseRequisition = useSelector(state => state.app.purchaseRequisition);
	
	useEffect(() => {
		dispatch(createPromptArray([]));
		// eslint-disable-next-line
	}, []);

	if (!purchaseRequisition) return null;



	const sendAnRequest = () => {
		const arr = checkInput(purchase,'Purchase');
		dispatch(createPromptArray(arr));
		if (arr.length !== 0) return;
		console.log('данные отправлены', purchase);
		dispatch(openModalDiscription(true, 'Purchase'));
		setPurchase({});
	}

	const closeModal = () => {
		dispatch(createPromptArray([]));
		dispatch(openPurchaseRequisition(false));
		setPurchase({});
	}

    return (
		<div  className="requisition-card">
			<div  className="overlay-card">
				<div  className="requisition-card__content">
					<div className="modal__text">                        
						<p className="requisition-card__title">
							Заявка на закупку: <span>{order.orderName} Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut architecto excepturi iusto natus fugiat odit sit accusantium? Rerum, nam. Non fuga, dicta vitae aspernatur aperiam consectetur neque vero minus repudiandae?</span>
						</p>
						<p  className="requisition-card__company">
							Наименование участника: <span>OOO "Siber IT"</span>
						</p>
						<div  className="block_flex">
							<BlockInput user={purchase} setUser={setPurchase} type={'responsiblePerson'}/>
							<BlockInput user={purchase} setUser={setPurchase} type={'phone'}/>
							<BlockInput user={purchase} setUser={setPurchase} type={'offerAmount'}/>
						</div>
						<BlockInput user={purchase} setUser={setPurchase} type={'termsOfCooperation'}/>
						<TextArea name={"offerDescription"} user={purchase} setUser={setPurchase} required={false}/>
					</div> 
				</div>
				<div 
					onClick={closeModal}
					className="requisition-card__close">X
				</div>
				
				<div className="requisition-card__control purchase-control">
					<div 
						className="requisition-card__cancel"
						onClick={closeModal}
						>Отмена</div>
					<div 
						className="requisition-card__response"
						onClick={sendAnRequest}
					>Отправить заявку</div>
				</div>
			</div>
		</div>
    );
};