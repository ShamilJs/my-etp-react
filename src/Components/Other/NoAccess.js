
import React from 'react';

export const NoAccess = () => {
    return (
        <div className="no_access">
			<div className="container">
				<div className="no_access__content">
					<h2 className="no_access-title">К сожалению, у Вас нет прав просматривать данную страницу...</h2>
					<img src="../../no_access.png" alt="no_acces"/>
				</div>
			</div>
		</div>

    )
}