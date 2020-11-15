import './LoginPopup.css';
import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

export default function LoginPopup(props) {

    const avatarRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <PopupWithForm title='Вход' name="login" buttonText='Зарегистрироваться'
            button={'Войти'}
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            isLoading={props.isLoading}>
        </PopupWithForm >
    )
}