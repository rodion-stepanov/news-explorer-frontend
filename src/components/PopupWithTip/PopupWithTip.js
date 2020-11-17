import React from 'react';
import './PopupWithTip.css';
import classnames from 'classnames';

export default function PopupWithTip({ onClose, isOpen, moveToLoginPopup }) {
  const popupOpenedClassName = classnames('popup', { 'popup_opened': isOpen });
  return (
    <section className={popupOpenedClassName}>
      <div className="popup__form_tip" noValidate>
        <button onClick={onClose}
          type="reset" className="popup__close-button" />
        <h3 className="popup__title_tip">Пользователь успешно зарегистрирован!</h3>
        <button className="popup__button-link_tip" onClick={moveToLoginPopup} type="button">Войти</button>
      </div>
    </section >
  )
}