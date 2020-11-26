import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModalDiscription, openPurchaseRequisition, openRequisitionCard } from '../../redux/actions';
import './Style/modal.css';


export const ModalDiscription = () => {
    const open = useSelector(state => state.app.modalDiscription);
    const place = useSelector(state => state.app.place);
    const dispatch = useDispatch();

	if(!open) return null;
	
	let title = 
		(place === 'ErrorMessage') ?{
			title: 'Произошла ошибка!',
			subtitle: 'Пожалуйста, попробуйте позже...'
		} :
		(place === 'faq') ?{
			title: 'Ваш вопрос успешно отправлен!',
			subtitle: 'Он появится на странице после ответа на него нашим специалистом'
		} :
		(place === 'messageFromUser') ?{
			title: 'Ваш ответ успешно отправлен!',
			subtitle: 'Теперь он виден на странице для пользователей'
		} :
		(place === 'addOrder') ?{
			title: 'Ваша закупка успешно создана!',
			subtitle: 'Она опубликована в разделе "Закупки"'
		} :
		(place === 'Purchase') ?{
			title: 'Ваша заявка успешно отправлена!',
			subtitle: 'Статус рассмотрения заявки можно посмотреть в личном кабинете'
		} : '';

			
	const closeModal = () => {
		dispatch(openModalDiscription(false));
		dispatch(openPurchaseRequisition(false));
		dispatch(openRequisitionCard(false));
	}
	
    return (
        <div  className="modal__reference">
            <div  className="overlay discrip">
                <div  className="modal_content"> 
					<p className="modal__text-discr">                     
                        <span>{title.title}</span> <br></br>
						{title.subtitle}
                    </p>
                </div>
                <div 
                    className="modal_close-discr"
                    onClick={closeModal}
                >X</div>
            </div>
        </div>
    );
};