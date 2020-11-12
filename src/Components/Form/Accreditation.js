import React, { useState } from 'react';
import { RegistrCompany } from './RegistrCompany';
import { RegistrIndividual } from './RegistrIndividual';
import './Style/blockInput.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
    Link,
  } from "react-router-dom";
import { MainTitle } from '../Header/MainTitle';
import { useDispatch, useSelector } from 'react-redux';
import { openWindowRegistration } from '../../redux/actions';


export const Accreditation = () => {
    const [open, setOpen] = useState('0');
    const dispatch = useDispatch();
    const windowRegistr = useSelector(state => state.app.windowRegistr);

    return (
        <Router>
			{!windowRegistr && 
                <> 
                    <MainTitle title={'Аккредитация'}/>
                    <div  className="container h-100  mt-50 mb-50">
                        <p className="accreditation__subtitle">
                            Для работы с заявками в нашей системе Вам необходимо пройти аккредитацию.<br/>
                            Все торговые (закупочные) процедуры, проводимые на данной электронной торговой площадке, 
                            являются внутренними процедурами по выбору поставщиков, подрядчиков и исполнителей 
                            и не являются торгами в смысле статей 447-449 Гражданского кодекса Российской Федерации, 
                            а также не являются публичным конкурсом, который регулируется главой 57 Гражданского кодекса 
                            Российской Федерации.<br/>
                            Наша система сохраняет за собой право в любое время отказаться от предложения проведения любой 
                            закупочной процедуры, изменить условия ее проведения, а также отказаться от заключения 
                            договора с участником, предложение которого признано лучшим по результатам проведения закупочной процедуры.
                            При этом любые расходы, связанные с участием в закупочной процедуре, участник несет самостоятельно. 
                            Указанные расходы ни при каких обстоятельствах не возмещаются.
                        </p>
                        <select 
                            defaultValue="0"
                            className="custom-select"
                            onChange={(e) => setOpen(e.target.value)}
                        >
                            <option value="0">Выберите субъекта РФ</option>
                            <option value="1">Физическое лицо</option>
                            <option value="2">Юридическое лицо</option>
                        </select>
                            <Link onClick={() => dispatch(openWindowRegistration(true))} className="btn cryptos-btn btn-2 mt-30 " to={`/аccreditation/${(open === '1') ? 'individual' : (open === '2') ? 'company' : ''}`}> Далее </Link>
                    </div> 
                </>
			}
			<Switch>
				<Route path="/аccreditation/individual">
					<RegistrIndividual windowRegistr={windowRegistr}/>            
				</Route>
				<Route path="/аccreditation/company">
					<RegistrCompany windowRegistr={windowRegistr}/>            
				</Route>
			</Switch>
		</Router>        
    );
}

