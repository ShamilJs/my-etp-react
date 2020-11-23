import React, { useEffect, useState } from 'react';
import './Style/blockInput.css';
import { BlockInput } from './BlockInput';
import { TextArea } from './TextArea';
import { Checkbox } from './Checkbox';
import { checkInput } from '../../checkInput';
import { createPromptArray, openModalHello } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { postAxios, getAxios} from '../../server';

export const Registr = () => {
	const promptArr = useSelector(state => state.app.promptArray);
	const [showPrompt, setShowPrompt] = useState(false);
	const [check, setCheck] = useState(false);
	const [checkPolicy, setCheckPolicy] = useState(false);
	const [subject, setSubject] = useState('2');
	const dispatch = useDispatch(); 
	const [newUser, setNewUser] = 
		useState({
			legal_address: '',
			actual_address: ''
		});

	useEffect(() => {
		dispatch(createPromptArray([]));
		// eslint-disable-next-line
	}, [subject]);
	
	useEffect(() => {
		let value = false;
		if (!promptArr || promptArr.length === 0) {
			setShowPrompt(value);
			return;
		} else {
			promptArr.forEach(item => {
				if (item === 'legal_address') value = true;
			});
		}
		setShowPrompt(value);
	}, [promptArr]);


	useEffect(() => {
		if(newUser.actual_address) {
			if(check) setNewUser(newUser => ({...newUser,
				legal_address: newUser.actual_address}))
		}
		// eslint-disable-next-line
	}, [check, newUser.actual_address]);

	useEffect(() => {
		setNewUser({legal_address: '', actual_address: ''})
		// eslint-disable-next-line
	}, [subject]);

	const registration = (e) => {
		getAxios('http://localhost:8080/auth/user?login=swa')
		// getDataFromServe('newOrganizRegistrAPI')
		// 	.then(res => console.log(res))
		// 	.catch(err => console.log(err));
		e.preventDefault();
		const arr = checkInput(newUser, 'registr', subject, checkPolicy);
		dispatch(createPromptArray(arr));
		if (arr.length !== 0) return;
		// postregistrInServer('newIPRegistrAPI', newUser)
		// .then(res => console.log(res))
		// .catch(err => console.log(err));


		if ((subject === '2')) {
			postAxios('newOrganizRegistrAPI', newUser);
			// postregistrInServer('newOrganizRegistrAPI', newUser)
			// .then(res => console.log(res))
			// .catch(err => console.log(err));
		} else {
			postAxios('newIPRegistrAPI', newUser);
			// postregistrInServer('newIPRegistrAPI', newUser)
			// .then(res => console.log(res))
			// .catch(err => console.log(err));
		}
		console.log('данные отправлены', newUser);
		// let obj = {}
		// for(let key in newUser) {
		// 	if (newUser[key] !== '') {
		// 		obj[key] = newUser[key]
		// 	}
		// }
		// console.log(obj);
		dispatch(openModalHello(true, 'Registr'))
	}

    return (
        <form className="auth">
			<div className="container auth-center">
				<div className="registr__content">
					<p className="auth__title">Регистрация</p>
					<p className="registr__form-title">Уважаемые партнеры!
						Для прохождения процедуры регистрации на данной электронной
						торговой площадке в качестве участника
						необходимо предоставить следующую информацию:
					</p>
					<select 
                        defaultValue="2"
                        className="custom-select registr__select"
                        onChange={(e) => setSubject(e.target.value)}
                    >
                        <option value="1">Индивидуальный предприниматель</option>
                        <option value="2">Юридическое лицо</option>
                    </select>
					<div className="block_flex">
						<BlockInput user={newUser} setUser={setNewUser} type={'login'}/>
						<BlockInput user={newUser} setUser={setNewUser} type={'last_name'}/>
						<BlockInput user={newUser} setUser={setNewUser} type={'first_name'}/>
					</div>
					<div className="block_flex">
						{(subject === '2') && <BlockInput user={newUser} setUser={setNewUser} type={'organization_name'}/>}
						<BlockInput user={newUser} setUser={setNewUser} type={'inn'}/>
						<BlockInput user={newUser} setUser={setNewUser} type={(subject === '1') ? 'ogrn' : 'orgrnip'}/>
					</div>

					{(subject === '2') &&
						<>
							<div className="block_flex">
								<BlockInput user={newUser} setUser={setNewUser} type={'actual_address'}/>
								<div className="custom-control custom-checkbox mt-50 ml-30 w-90">
									<input 
										type="checkbox"
										className="custom-control-input"
										id="customCheck1"
										onChange={() => setCheck(!check)}
									/>
									<label className="custom-control-label" htmlFor="customCheck1">
										Совпадает с юридическим
									</label>
								</div>
							</div>
							<div className="block_flex">
								<div className="block_input">
									<label htmlFor='legal_address'>Юридический адрес
										<span className="label">*</span>
									</label>
									<input 
										name='legal_address' 
										type="text"
										className={showPrompt ? "form-control border" : "form-control"}
										value={check ? newUser.actual_address : newUser.legal_address}
										onChange={(e) => {
											if (e.target.value.trim() === '') setShowPrompt(true)
											else setShowPrompt(false)
											setNewUser(newUser =>
											({...newUser, legal_address: check ? newUser.actual_address : e.target.value}))}}
									/>
									{showPrompt &&
										<div className="block__input-disrcr">
											Данное поле не может быть пустым
										</div>}
								</div>
								<BlockInput user={newUser} setUser={setNewUser} type={'email'}/>
							</div>
						</>}

					<div className="block_flex">
						{(subject === '1') &&
							<BlockInput user={newUser} setUser={setNewUser} type={'email'}/>}	
						<BlockInput user={newUser} setUser={setNewUser} type={'password'}/>
						<BlockInput user={newUser} setUser={setNewUser} type={'password_repeat'}/>
					</div>	
					<div className="block_flex">
						<TextArea
							name="about"
							user={newUser}
							setUser={setNewUser}
							company={ (subject === '2') ? true : false}
						/>
					</div>
					<Checkbox checkPolicy={checkPolicy} setCheckPolicy={setCheckPolicy}/>
					<button 
						className='btn cryptos-btn btn-2 mt-30'
						onClick={registration}
					>Зарегистрироваться</button>
                    <span className="subtext ml-30"><span>* </span>обязательные поля</span>
				</div>
			</div>
        </form>
    );
};