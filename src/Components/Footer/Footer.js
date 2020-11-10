import React from 'react';
// import './Style/modal.css';


export const Footer = () => {
    return (
        <footer className="footer-area">
			<div className="bottom-footer-area">
				<div className="container h-100">
					<div className="row h-100 align-items-center justify-content-center">
						<div className="col-12">
							<p>Copyright&copy {(new Date().getFullYear())} Все права защищены</p>
						</div>
					</div>
				</div>
			</div>
        </footer>
    );
};