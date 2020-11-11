import React, { useState } from 'react';
import { MainTitle } from '../Header/MainTitle';
import './Style/faq.css';
import dBFaq from '../FAQ';


export const FAQ = () => {
	const [openFooter, setOpenFooter] = useState({});

	const clickHeader = index => {
		setOpenFooter(openFooter =>
			({...openFooter, [index]: !openFooter[index]}));
	};

    return (
		<>
			<MainTitle title={'Вопросы-ответы'}/>
			<div className="faq">
				<div className="container">
					{dBFaq.map((item, index) => (
						<div key={index} className="faq__item">
							<div onClick={() => clickHeader(index)}
								className={`faq__item-header ${openFooter[index] ?'faq__item-active' : ''} `}>
								<p className={`faq__title ${openFooter[index] ? 'faq__title-active' : ''}`}>
									{item.question}
								</p>
								<div className="faq__button">
									{!openFooter[index] &&
										<span className="accor-open">
											<i className="fa fa-plus" aria-hidden="true"/>
										</span>}
									{openFooter[index] &&
										<span className="accor-close">
											<i className="fa fa-minus" aria-hidden="true"/>
										</span>}
								</div>
							</div>
							<div className={`faq__item-footer ${!openFooter[index] ? 'footer__none' : 'footer__block'}`}>
								<p className="faq__text">{item.answer}</p>
							</div>
						</div>
					))}
					<div  className="faq__question">
                        <label htmlFor="info">Остались вопросы? Задайте свой вопрос нашей компании:</label>
                        <textarea name="info" type="textarea"  className="form-control"></textarea>
						<button className="cryptos-btn">Отправить</button>
                    </div>
				</div>
			</div>			
    	</>
    );
};