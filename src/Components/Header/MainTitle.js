import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateUserData } from '../../redux/actions';



export const MainTitle = ({ title, login = false }) => {
	const dispatch = useDispatch();

	const exit = () => {
		localStorage.removeItem('userObjId');
		dispatch(updateUserData({}));
	}

    return (
        <div  className="breadcumb-area">
			<div  className="container h-100">
				<div  className="row h-100 align-items-center">
					<div  className="breadcumb-text">
						<h2>{title}</h2>
						{login && 
						
							<Link 
								to='/'
								className="exit__block"
								onClick={() => exit()}
							>
								<img src="./exit.png" alt=""/>
								<p className="exit__title">ВЫЙТИ</p>
							</Link>
						}
					</div>
				</div>
			</div>
        </div>
    );
};