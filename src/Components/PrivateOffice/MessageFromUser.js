
import React, { useEffect, useState } from 'react';
import './Style/privateOffice.css';
import { TextArea } from '../Form/TextArea';
import { getDataFromServer, postDataInServer } from '../../server';
import { useDispatch, useSelector } from 'react-redux';
import { addNewAnswer,
	changeQuestionStatus,
	getAnswersFromServer,
	getQuestionsFromServer,
	hideLoader,
	openModalDiscription,
	showLoader } from '../../redux/actions';

export const MessageFromUser = () => {
    const [openFooter, setOpenFooter] = useState({});
	const [answer, setAnswer] = useState({});
	const dispatch = useDispatch();
	const questions = useSelector(state => state.questionAnswer.questions);
	const answers = useSelector(state => state.questionAnswer.answers);

	let result = questions.filter(item => !item.status);

	const clickHeader = index => {
		setOpenFooter(openFooter =>
			({...openFooter, [index]: !openFooter[index]}));
	};

	useEffect(() => {
		dispatch(showLoader());
		
        getDataFromServer('questionsAPI')
        .then(response => {
			dispatch(getQuestionsFromServer(response))
		})
		.catch(error => console.log(error));

		getDataFromServer('answersAPI')
		.then(response => {
			dispatch(getAnswersFromServer(response))
			dispatch(hideLoader());
		})
		.catch(error => console.log(error));
		// eslint-disable-next-line
	}, [])


	useEffect(() => {
		if (!answer.info) return;
		postDataInServer('answersAPI', answers)
		.catch(error => console.log(error));
		postDataInServer('questionsAPI', questions)
		.catch(error => console.log(error));
		setAnswer({info: ''});
		// eslint-disable-next-line
	}, [answers])

	useEffect(() => {
		if (!answer.info) return;
		dispatch(addNewAnswer(answer));
		dispatch(openModalDiscription(true, 'messageFromUser'));
		dispatch(changeQuestionStatus(answer.id));
		// eslint-disable-next-line
	}, [answer.id])
	

    return (
        <div className="private__content">
            <p className="private__title message__title">
                Сообщения от пользователей (публичный канал)
            </p>
			{(result.length === 0) ? 'Сообщений нет' :
				result.map((item, index) => (
					<div key={index} className="faq__item">
						<div onClick={() => clickHeader(index)}
							className={`faq__item-header ${openFooter[index] ? 'faq__item-active' : ''} `
						}>
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
									setAnswer(answer => ({...answer,
										id: item.id,
										key: `cmr${(+ new Date()).toString(16)}`
									}))
								}}
							>Ответить</button>
						</div>
					</div>
				))}
        </div>
    );
};