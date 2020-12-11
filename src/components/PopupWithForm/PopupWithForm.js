import React from 'react';
import './PopupWithForm.css';
import classnames from 'classnames';

function PopupWithForm({
  title, name, buttonText, button,
  onSubmit, onClose, isOpen,
  moveToRegisterPopup, moveToLoginPopup,
  isLoading, children, isDisabled }) {

  const popupOpenedClassName = classnames('popup', { 'popup_opened': isOpen });
  const submitButtonClassName = classnames('popup__button', { 'popup__button_disabled': isDisabled || isLoading });
  const buttonDisabled = classnames({ disabled: isDisabled || isLoading })

  return (
    <section className={popupOpenedClassName}>
      <form onSubmit={onSubmit}
        name={name} className="popup__form" noValidate>
        <button onClick={onClose}
          type="reset" className="popup__close-button" />
        <h3 className="popup__title">{title}</h3>

        {children}

        <button type="submit" className={submitButtonClassName} disabled={buttonDisabled}>{button}</button>
        <p className="popup__text">или <button className="popup__button-link"
          onClick={moveToRegisterPopup || moveToLoginPopup} type="button">{buttonText}</button></p>
      </form>
    </section>
  )
}

export default PopupWithForm;