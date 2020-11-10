import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openWindowRegistration } from '../../redux/actions';
import { MainTitle } from '../Header/MainTitle';


export const Registration = () => {
	const [open, setOpen] = useState('0');
	const dispatch = useDispatch();
	const windowRegistr = useSelector(state => state.app.windowRegistr);
	
	useEffect(() => {
		if (windowRegistr === '0') setOpen('0');
	}, [windowRegistr]);

	if (windowRegistr === '1' || windowRegistr === '2') return null;


    return (
		<>
			<MainTitle title={'Регистрация'}/>
			<div  className="container h-100  mt-50 mb-50">
				<select 
					defaultValue="0"
					className="custom-select"
					onChange={(e) => setOpen(e.target.value)}
				>
					<option value="0">Выберите субъекта РФ</option>
					<option value="1">Физическое лицо</option>
					<option value="2">Юридическое лицо</option>
				</select>
					<button 
						disabled={(open === '0') ? true : false}
						className="btn cryptos-btn btn-2 mt-30 "
						onClick={() => dispatch(openWindowRegistration(open))}
					>Далее</button>
			</div>
		</>
    );
};