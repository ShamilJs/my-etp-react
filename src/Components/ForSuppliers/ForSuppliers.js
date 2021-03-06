import React from 'react';
import { MainTitle } from '../Header/MainTitle';
import './Style/suppliers.css';
import { Link } from "react-router-dom";

export const ForSuppliers = () => {
    return (
		<>
      		<MainTitle title={'Поставщикам'}/>
			<div  className="container height_auto  mt-50">
				<p className="accreditation__title">Информация для поставщиков</p>
                <p className="accreditation__subtitle">
                    Для работы с заявками в нашей системе Вам необходимо пройти аккредитацию.<br/>
					Данные для прохождения этой процедуры Вы указываете при 
					<Link
						className="accreditation__ref"
						to="/registration/reg"> регистрации
					</Link> на нашем сайте.<br/>
					После регистрации в Вашем личном кабинете Вы сможете наблюдать за статусом проверки 
					Ваших документов нашими юристами.
					При положительном результате, Ваш статус изменится на "Аккредитирован", после чего, 
					Вы сможете полноценно учавствовать в закупках на нашей площадке.
					<br/>
					<span>ВНИМАНИЕ!</span><br/>
                    Все торговые (закупочные) процедуры, проводимые на данной электронной торговой площадке, 
                    являются внутренними процедурами по выбору поставщиков, подрядчиков и исполнителей 
                    и не являются торгами в смысле статей 447-449 Гражданского кодекса Российской Федерации, 
                    а также не являются публичным конкурсом, который регулируется главой 57 Гражданского кодекса 
                	Российской Федерации.<br/>
                    Наша система сохраняет за собой право в любое время отказаться от предложения проведения любой 
                    закупочной процедуры, изменить условия ее проведения, а также отказаться от заключения 
                    договора с участником, предложение которого признано лучшим по результатам проведения закупочной процедуры.
                    При этом любые расходы, связанные с участием в закупочной процедуре, участник несет самостоятельно. 
                    Указанные расходы ни при каких обстоятельствах не возмещаются.
                </p>
            </div> 
		</>
    );
};