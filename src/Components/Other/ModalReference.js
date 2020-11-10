import React from 'react';
import './Style/modal.css';


export const ModalReference = () => {
    return (
        <div  className="modal__reference">
            <div  className="overlay">
                <div  className="modal_content">                         
                    <p  className="modal_text">
                        <span>Согласие на обработку персональных данных</span><br/>
						Используя сайт #######, я даю согласие на обработку моих персональных данных Закрытым акционерным обществом #######, ИНН 7#######, юридический адрес — 1#######, д. 26В, стр. 2 (далее — Оператор).
						Я даю согласие на обработку следующих персональных данных: фамилия, имя, отчество, номер телефона, адрес электронной почты.
						Цель обработки — для использования сервисов сайта, а также информирования о продуктах и услугах Оператора.
						Срок действия согласия — до момента его отзыва.
						Оператор может осуществлять сбор, запись, систематизацию, накопление, хранение, уточнение, извлечение, использование, передачу, блокирование, удаление, уничтожение перечисленных выше персональных данных.
						Возможна как неавтоматизированная обработка — на бумажных носителях, так и автоматизированная — в информационных системах, на электронных носителях.
						Я уведомлен, что сайт ####### использует технологию «cookie» (файл с информацией о предыдущих посещениях) для персонализации страниц сайта и удобства пользователей.
						Кроме этого, для совершенствования сайта на нем могут использоваться сервисы Яндекс Метрика и/или Google Analytics и/или пиксель Facebook. Как пользователь этого сайта я подтверждаю, что для предотвращения использования моих персональных данных мне предоставлена возможность отключить / запретить сохранение файлов cookie в настройках программы или использовать режим «инкогнито» Интернет-браузера для просмотра сайта.
						Настоящее согласие может быть отозвано в любое время путем направления Оператору заявления, соответствующего требованиям ч. 3 ст. 14 Федерального закона № 152-ФЗ «О персональных данных».
					</p>
                </div>
                <div  className="modal_close">X</div>
            </div>
        </div>
    );
};