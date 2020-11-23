import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { openModalHello } from '../../redux/actions';
import './Style/modal.css';


export const ModalHello = () => {
    const open = useSelector(state => state.app.modalHello);
    const place = useSelector(state => state.app.place);
    const dispatch = useDispatch();

    if(!open) return null;
    
    return (
        <div  className="modal__reference">
            <div  className="overlay discrip">
                <div  className="modal_content modal-hello"> 
                    <p className="modal__text-discr text-hello">                     
                        {(place === 'Auth') && <> <span>Вы успешно авторизовались!</span> <br></br></>}
                        {(place === 'Registr') && <> <span>Вы успешно зарегистрировались!</span> <br></br></>}
                        Добро пожаловать на наш сайт!
                    </p>
                    <Link 
                        to="/"
                        className="modal_hello-button"
                        onClick={() => dispatch(openModalHello(false))}
                    >OK</Link>
                </div>
            </div>
        </div>
    );
};