import React from 'react';



export const MainTitle = ({ title, login = false }) => {
    return (
        <div  className="breadcumb-area">
			<div  className="container h-100">
				<div  className="row h-100 align-items-center">
					<div  className="breadcumb-text">
						<h2>{title}</h2>
						{login && 
						
							<div  className="exit__block">
								<img src="./exit.png" alt=""/>
								<p className="exit__title">ВЫЙТИ</p>
							</div>
						}
					</div>
				</div>
			</div>
        </div>
    );
};