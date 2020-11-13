import React, { useState } from 'react';
import { BlockInput } from '../Form/BlockInput';
import './Style/privateOffice.css';


export const AddOrder = () => {
	const [newCompany, setNewCompany] = useState({});
    return (
        <div className="private__content">
            <p className="private__title">
                Создание новой заявки
            </p>
			<BlockInput user={newCompany} setUser={setNewCompany} type={'orderName'}/>
			<BlockInput user={newCompany} setUser={setNewCompany} type={'orderName'}/>
			<BlockInput user={newCompany} setUser={setNewCompany} type={'orderName'}/>
			<BlockInput user={newCompany} setUser={setNewCompany} type={'orderName'}/>
			<BlockInput user={newCompany} setUser={setNewCompany} type={'orderName'}/>
			<BlockInput user={newCompany} setUser={setNewCompany} type={'orderName'}/>
			<BlockInput user={newCompany} setUser={setNewCompany} type={'orderName'}/>
        </div>
    );
};