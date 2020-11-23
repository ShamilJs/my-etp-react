import React from 'react';
import { useSelector } from 'react-redux';
import './Style/preloader.css';


export const Preloader = () => {
    const loader = useSelector(state => state.app.loader);
    if (!loader) return null;
    
    return (
        <div id="preloader" className="main__preloader">
			<i className="circle-preloader"></i>
		</div>
    );
};