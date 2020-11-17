import React from 'react';
import './RegisterPopup.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

export default function RegisterPopup({isOpen, onClose, moveToLoginPopup, moveToTipPopup}) {

  function handleSubmit(e) {
    e.preventDefault();
    moveToTipPopup();
  }

  return (
    <PopupWithForm title='Регистрация'
      name='register' buttonText='Войти'
      button={'Зарегистрироваться'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      moveToLoginPopup={moveToLoginPopup}
      moveToTipPopup={moveToTipPopup}
      // isLoading={props.isLoading}
      >
      <label className="popup__tag" htmlFor="name-register">Имя</label>
      <input autoComplete="off" id="name-register" type="text" name="name" placeholder="Введите своё имя"
        className="popup__input popup__input_name" required />
      <p id="register-name-error" className="popup__error">Неправильный формат имени</p>



    </PopupWithForm >
  )
}