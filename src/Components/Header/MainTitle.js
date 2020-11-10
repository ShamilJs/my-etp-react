import React from 'react';



export const MainTitle = ({ title }) => {
    return (
        <div  className="breadcumb-area">
			<div  className="container h-100">
				<div  className="row h-100 align-items-center">
					<div  className="breadcumb-text">
						<h2>{title}</h2>
					</div>
				</div>
			</div>
        </div>
    );
};