import React from 'react';
import './PopupWithForm.css';
import classnames from 'classnames';

function PopupWithForm({ title, name, buttonText, button, onSubmit, onClose, isOpen, moveToRegisterPopup, moveToLoginPopup,
  // moveToTipPopup,
   children }) {
  const popupOpenedClassName = classnames('popup', { 'popup_opened': isOpen });
  return (
    <section className={popupOpenedClassName}>
      <form onSubmit={onSubmit}
        name={name} className="popup__form" noValidate>
        <button onClick={onClose}
          type="reset" className="popup__close-button" />
        <h3 className="popup__title">{title}</h3>
        <label className="popup__tag" htmlFor={`email-${name}`}>Email</label>
        <input autoComplete="off" id={`email-${name}`} type="email" name="email" placeholder="Введите email"
          className="popup__input popup__input_email" required />
        <p id={`${name}-email-error`} className="popup__error">Неправильный формат email</p>

        <label className="popup__tag" htmlFor={`password-${name}`}>Пароль</label>
        <input autoComplete="off" id={`password-${name}`} type="password" name="password" placeholder="Введите пароль"
          className="popup__input popup__input_password" required />
        <p id={`${name}-password-error`} className="popup__error">Неправильный формат пароля</p>
        {children}
        <p id={`${name}-error`} className="popup__error popup__error_final">Такой пользователь уже есть</p>
        <button type="submit" className="popup__button">{button}</button>
        <p className="popup__text">или <button className="popup__button-link" onClick={moveToRegisterPopup || moveToLoginPopup} type="button">{buttonText}</button></p>
      </form>
    </section>
  )
}

export default PopupWithForm;