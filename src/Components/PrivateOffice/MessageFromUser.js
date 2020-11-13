
import React, { useState } from 'react';
import './Style/privateOffice.css';
import dBFaq from '../FAQ';
import { TextArea } from '../Form/TextArea';

export const MessageFromUser = () => {
    const [openFooter, setOpenFooter] = useState({});
    const [answer, setAnswer] = useState({});

	const clickHeader = index => {
		setOpenFooter(openFooter =>
			({...openFooter, [index]: !openFooter[index]}));
	};
    return (
        <div className="private__content">
            <p className="private__title message__title">
                Сообщения от пользователей (публичный канал)
            </p>
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
                                <TextArea name={"info"} user={answer} setUser={setAnswer} answer={true}/>
                                <button className="cryptos-btn">Ответить</button>
							</div>
						</div>
					))}
        </div>
    );
};