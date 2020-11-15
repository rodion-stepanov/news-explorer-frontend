import './RegisterPopup.css';
import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

export default function RegisterPopup(props) {

    const avatarRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();

        // props.onUpdateAvatar({
        //   avatar: avatarRef.current.value
        // });
    }

    return (
        <PopupWithForm title='Регистрация' name='register' buttonText='Войти'
            button={'Зарегистрироваться'}
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            isLoading={props.isLoading}>
            <label className="popup__tag" for="name-register">Имя</label>
            <input autoComplete="off" id="name-register" type="text" name="name" placeholder="Введите своё имя"
                className="popup__input popup__input_name" required />
            <p id="register-name-error" className="popup__error">Неправильный формат имени</p>



        </PopupWithForm >
    )
}