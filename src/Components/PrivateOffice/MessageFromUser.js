
import React, { useEffect, useState } from 'react';
import './Style/privateOffice.css';
import { TextArea } from '../Form/TextArea';
import { getQuestion, postAnswer } from '../../server';
import { useDispatch } from 'react-redux';
import { hideLoader, showLoader } from '../../redux/actions';

export const MessageFromUser = () => {
    const [openFooter, setOpenFooter] = useState({});
	const [answer, setAnswer] = useState({});
	const [question, setQuestion] = useState([]);
	const [restart, setRestart] = useState(false);
	const dispatch = useDispatch();

	const clickHeader = index => {
		setOpenFooter(openFooter =>
			({...openFooter, [index]: !openFooter[index]}));
	};

	useEffect(() => {
        dispatch(showLoader());
        getQuestion()
        .then(response => {
			let arr = [];
			for (let key in response) {
				arr.push(response[key])
			}

			setQuestion(arr.filter(item => item.status === 1));
            // dispatch(getOrdersFromServer(response));
			dispatch(hideLoader());
			
		})
		// eslint-disable-next-line
	}, [restart])
	

    return (
        <div className="private__content">
            <p className="private__title message__title">
                Сообщения от пользователей (публичный канал)
            </p>
            {(question.length === 0) ? 'Сообщений нет' : question.map((item, index) => (
						<div key={index} className="faq__item">
							<div onClick={() => clickHeader(index)}
								className={`faq__item-header ${openFooter[index] ?'faq__item-active' : ''} `}>
								<p className={`faq__title ${openFooter[index] ? 'faq__title-active' : ''}`}>
									{item.text}
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
                                <TextArea
									name={"info"}
									user={answer}
									setUser={setAnswer}
									answer={true}
								/>
								<button 
									className="cryptos-btn"
									onClick={() => {
										setAnswer(answer => ({...answer, id: item.id}))
										postAnswer(answer)
										.then(response => console.log(response))
										.catch(error => console.log(error));
										setRestart(!restart);
										setAnswer({info: ''});
									}}
								>Ответить</button>
							</div>
						</div>
					))}
        </div>
    );
};