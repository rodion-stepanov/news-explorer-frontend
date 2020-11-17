import React from 'react';
import './LoginPopup.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

export default function LoginPopup({ isOpen, onClose, moveToRegisterPopup, onLogin }) {

  // const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onLogin();
    onClose();
  }

  return (
    <PopupWithForm title='Вход'
      name="login"
      buttonText={'Зарегистрироваться'}
      button='Войти'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      moveToRegisterPopup={moveToRegisterPopup}
    // isLoading={props.isLoading}
    />
  )
}