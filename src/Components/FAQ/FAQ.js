import React, { useEffect, useState } from 'react';
import { MainTitle } from '../Header/MainTitle';
import './Style/faq.css';
import { postQuestion, getAnswer, getQuestion } from '../../server'
import { hideLoader, showLoader } from '../../redux/actions';
import { useDispatch } from 'react-redux';


export const FAQ = () => {
	const [openFooter, setOpenFooter] = useState({});
	const dispatch = useDispatch();
	const [question, setQuestion] =
		useState({
			text: '',
			id: '',
			status: 1
		});
	const [questions, setQuestions] = useState([]);
	const [answers, setAnswers] = useState([]);

	useEffect(() => {
		dispatch(showLoader());
		getQuestion()
		.then(response => {
			let arr = [];
			for (let key in response) {
				arr.push(response[key])
			}
			setQuestions(arr);
		});
		getAnswer()
		.then(response => {
			let arr = [];
			for (let key in response) {
				arr.push(response[key])
			}
			setAnswers(arr);
			dispatch(hideLoader());
		})
			// eslint-disable-next-line
	}, [])

	const clickHeader = index => {
		setOpenFooter(openFooter =>
			({...openFooter, [index]: !openFooter[index]}));
	};

    return (
		<>
			<MainTitle title={'Вопросы-ответы'}/>
			<div className="faq">
				<div className="container">
					{questions.map((item, index) => (
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
								{answers.map(el =>
									(el.id === item.id) ? <p className="faq__text">{el.info}</p> : ''
								)}
							</div>
						</div>
					))}
					<form  className="faq__question">
                        <label htmlFor="info">Остались вопросы? Задайте свой вопрос нашей компании:</label>
						<textarea 
							name="info"
							type="textarea"
							className="form-control"
							required
							value={question.text}
							onChange={e => setQuestion(question => ({...question, text: e.target.value, id: `cmr${(+ new Date()).toString(16)}`}))}
						></textarea>
						<button type="submit"
							className="cryptos-btn"
							onClick={(e) => {
								if (question.text.trim() === '') return;
								postQuestion(question)
								.then(response => {
									setQuestion(question => ({...question, text: ''}))
									console.log(response)
								})
								.catch(error => console.log(error))
							}}
						>Отправить</button>
                    </form>
				</div>
			</div>			
    	</>
    );
};