import './PopupWithForm.css';
import React from 'react';
import classnames from 'classnames';

function PopupWithForm(props) {
    const isOpen = true;
    const popupOpenedClassName = classnames('popup', { 'popup_opened': isOpen });
    return (
        <section className={popupOpenedClassName}>
            <form onSubmit={props.onSubmit}
                name={props.name} className="popup__form" noValidate>
                <button onClick={props.onClose} type="reset" className="popup__close-button" />
                <h3 className="popup__title">{props.title}</h3>
                <label className="popup__tag" for={`email-${props.name}`}>Email</label>
                <input autoComplete="off" id={`email-${props.name}`} type="email" name="email" placeholder="Введите email"
                    className="popup__input popup__input_email" required />
                <p id={`${props.name}-email-error`} className="popup__error">Неправильный формат email</p>
                <label className="popup__tag" for={`password-${props.name}`}>Пароль</label>
                <input autoComplete="off" id={`password-${props.name}`} type="password" name="password" placeholder="Введите пароль"
                    className="popup__input popup__input_password" required />
                <p id={`${props.name}-password-error"`} className="popup__error">Неправильный формат пароля</p>
                {props.children}
                <p id={`${props.name}-error`} className="popup__error">Такой пользователь уже есть</p>
                <button type="submit" className="popup__button">{props.button}</button>
                <p className="popup__text">или
                <button className="popup__button-link" type="button">{props.buttonText}</button></p>
            </form>
        </section>
    )
}

export default PopupWithForm;