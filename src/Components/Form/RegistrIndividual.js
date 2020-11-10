import React from 'react';
import { MainTitle } from '../Header/MainTitle';
import { BlockInput } from './BlockInput';
import './Style/blockInput.css'


export const RegistrIndividual = () => {
    return (
      <>
      <MainTitle title={'Регистрация физ. лиц'}/>
        <div  className="registr">
        	<div  className="container  container__form">
                <form  className="registr__form">    
                        <p  className="registr__form-title">Уважаемые партнеры!
							Для прохождения процедуры регистрации на электронной
							торговой площадке "Название площадки" в качестве участника
							необходимо предоставить следующую информацию:
						</p>
                    <div  className="block_flex">
						<BlockInput type={'login'}/>
						<BlockInput type={'surname'}/>
						<BlockInput type={'name'}/>
						<BlockInput type={'patronymic'}/>
                    </div>
                    <div  className="block_flex">
						<BlockInput type={'addres'}/>
						<BlockInput type={'phone'}/>
						<BlockInput type={'email'}/>
                    </div>

                    <div  className="block_flex">
                         <div  className="block_input">
                            <label htmlFor="info">Расскажите о себе (компетенции, опыт, сайт (если имеется)) 
								<span  className="label">*</span>
							</label>
                            <textarea name="info" type="textarea"  className="form-control"></textarea>
                        </div>
                    </div>

                    <div  className="custom-control custom-checkbox mt-30 ">
                      <input type="checkbox"  className="custom-control-input" id="customCheck2"/>
                      <label  className="custom-control-label" htmlFor="customCheck2">Я согласен <span  className="custom-control-label-span"> на обработку  </span> персональных данных: политика конфиденциальности</label>
                    </div>
                    <div  className="custom-control custom-checkbox mt-15">
                      <input type="checkbox"  className="custom-control-input" id="customCheck3"/>
                      <label  className="custom-control-label" htmlFor="customCheck3">Я ознакомлен с <span  className="custom-control-label-span">положением </span> о закупках компании "Название компании"</label>
                    </div>
                    <button  className="btn cryptos-btn btn-2 mt-30">Отправить</button>
                </form>
        </div>
    </div>
</>
    );
};