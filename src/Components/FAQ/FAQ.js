import React, { useEffect, useState } from 'react';
import { MainTitle } from '../Header/MainTitle';
import './Style/faq.css';
import { getDataFromServer, postDataInServer } from '../../server'
import { addNewQuestion,
	getAnswersFromServer,
	getQuestionsFromServer,
	hideLoader,
	openModalDiscription,
	showLoader } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';


export const FAQ = () => {
	const [showPrompt, setShowPrompt] = useState(false)
	const [openFooter, setOpenFooter] = useState({});
	const dispatch = useDispatch();
	const [post, setPost] = useState(false);
	const [question, setQuestion] =
		useState({
			text: '',
			id: '',
		});
	const questionsAnswers = useSelector(state => state.questionAnswer);

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
		if(question.text === '') return;
		postDataInServer('addQuestionAPI', questionsAnswers.questions)
		.then(() => setQuestion(question => ({...question, text: ''})))
		.catch(error => console.log(error));
		// eslint-disable-next-line
	}, [post])

	const clickHeader = index => {
		setOpenFooter(openFooter =>
			({...openFooter, [index]: !openFooter[index]}));
	};

    return (
		<>
			<MainTitle title={'Вопросы-ответы'}/>
			<div className="faq">
				<div className="container">
					{questionsAnswers.questions.map((item, index) => (
						<div key={index} className="faq__item">
							{(item.status) &&
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
							</div>}
							<div className={`faq__item-footer ${!openFooter[index] ? 'footer__none' : 'footer__block'}`}>
								{questionsAnswers.answers.map(el =>
									(el.id === item.id) ? <p key={el.key} className="faq__text">{el.info}</p> : ''
								)}
							</div>
						</div>
					))}
					<form  className="faq__question">
                        <label htmlFor="info">Задайте вопрос нашей компании. Внимание! 
							Ваш вопрос будет виден всем посетителям нашего сайта</label>
						<textarea 
							name="info"
							type="textarea"
							className={showPrompt ? "form-control border" : "form-control"}
							value={question.text}
							onChange={e =>
								{if (e.target.value.trim() === '') setShowPrompt(true)
					    		else setShowPrompt(false);
								setQuestion(question =>
									({...question, 
										text: e.target.value,
										id: `cmr${(+ new Date()).toString(16)}`,
										status: false
									}))}
								}
						></textarea>
						{showPrompt && <div className="block__input-disrcr">
							Введите ворос
						</div>}
						<button
							className="cryptos-btn"
							onClick={(e) => {
								e.preventDefault();
								if (question.text.trim() === '') {
									setShowPrompt(true)
									return;
								} 
								setShowPrompt(false);
								dispatch(addNewQuestion(question));
								dispatch(openModalDiscription(true, 'faq'));
								setPost(!post)
							}}
						>Задать вопрос</button>
                    </form>
				</div>
			</div>			
    	</>
    );
};