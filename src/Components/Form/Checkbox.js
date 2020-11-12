import React from 'react';
import './Style/blockInput.css';

export const Checkbox = () => {

	return (
        <>
			<div  className="custom-control custom-checkbox mt-30 ">
				<input type="checkbox" required className="custom-control-input" id="customCheck2"/>
				<label  className="custom-control-label" htmlFor="customCheck2">Я согласен 
					<span  className="custom-control-label-span"> на обработку  </span> 
						персональных данных: политика конфиденциальности
				</label>
			</div>
			<div  className="custom-control custom-checkbox mt-15">
				<input type="checkbox" required className="custom-control-input" id="customCheck3"/>
				<label  className="custom-control-label" htmlFor="customCheck3">Я ознакомлен с 
					<span  className="custom-control-label-span">положением  </span>  
						о закупках компании "Название компании"
				</label>
			</div>
		</>
    );
};