import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openPrivacyPolicy } from '../../redux/actions';
import './Style/blockInput.css';

export const Checkbox = ({ checkPolicy, setCheckPolicy}) => {
	const promptArr = useSelector(state => state.app.promptArray);
	const [showPrompt, setShowPrompt] = useState(false)
	const dispatch = useDispatch();

	useEffect(() => {
		let value = false;
		if (!promptArr || promptArr.length === 0) {
			setShowPrompt(value);
			return;
		} else {
			promptArr.forEach(item => {
				if (item === 'policy') value = true;
			});
		}
		setShowPrompt(value);
	}, [promptArr]);

	return (
		<div  className="custom-control custom-checkbox mt-30 ">
			<input 
				type="checkbox"
				className="custom-control-input"
				id="customCheck2"
				onChange={(e) => {
					if (!e.target.checked) setShowPrompt(true)
					else setShowPrompt(false)
					setCheckPolicy(!checkPolicy)}}
			/>
			<label 
				className={showPrompt ? "custom-control-label after-color" : "custom-control-label"}
				htmlFor="customCheck2">Я согласен 
				<span 
					className="custom-control-label-span"
					onClick={() => dispatch(openPrivacyPolicy(true))}
				> на обработку  </span> 
					персональных данных: политика конфиденциальности
			</label>
		</div>
    );
};