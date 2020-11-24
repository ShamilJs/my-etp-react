import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { checkInput } from '../../checkInput';
import { createPromptArray } from '../../redux/actions';
import { postDataInServer, postUserInServer } from '../../server';
import { BlockInput } from '../Form/BlockInput';
import { TextArea } from '../Form/TextArea';
import './Style/privateOffice.css';


export const AddOrder = () => {
	const [newOrder, setOrder] = useState({});
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(createPromptArray([]));
		// eslint-disable-next-line
	}, []);

	const addOrder = () => {
		const arr = checkInput(newOrder, 'addOrder');
		dispatch(createPromptArray(arr));
		if (arr.length !== 0) return;
		console.log('данные отправлены');
		postUserInServer('orderAPI', newOrder)
		.then(res => console.log(res))
		.catch(error => console.log(error))
		// setAnswer(answer => ({...answer, id: item.id}))
	}

    return (
        <div className="private__content">
            <p className="private__title">
                Создание новой закупки
            </p>
			<BlockInput user={newOrder} setUser={setOrder} type={'orderName'} required={false}/>
			<TextArea user={newOrder} setUser={setOrder} name={'description'} required={false}/>
			<BlockInput user={newOrder} setUser={setOrder} type={'technologies'} required={false}/>
			<TextArea user={newOrder} setUser={setOrder} name={'demands'} required={false}/>
			<BlockInput user={newOrder} setUser={setOrder} type={'command'}/>
			<TextArea user={newOrder} setUser={setOrder} name={'demandsCommand'}/>
			<BlockInput user={newOrder} setUser={setOrder} type={'butget'}/>
			<BlockInput user={newOrder} setUser={setOrder} type={'dateCreate'} required={false}/>
			<TextArea user={newOrder} setUser={setOrder} name={'workingConditions'} required={false}/>
			<BlockInput user={newOrder} setUser={setOrder} type={'dateContract'} required={false}/>
			<button 
				className="cryptos-btn"
				onClick={addOrder}
			>Разместить закупку</button>
        </div>
    );
};