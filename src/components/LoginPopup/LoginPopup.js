import React from 'react';
import './LoginPopup.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useFormWithValidation } from '../FormValidation/FormValidation';
import { authorize } from '../../utils/MainApi';

export default function LoginPopup({ isOpen, onClose, moveToRegisterPopup, onLogin }) {

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
  const [loginErrMessage, setLoginErrMessage] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const inputDisabled = isLoading ? 'readOnly' : '';

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    authorize(values)
      .then((res) => {
        if (!res) {
          setLoginErrMessage('Ошибка сервера');
          return;
        }
        if (res.message) {
          setLoginErrMessage(res.message);
          return;
        }
        if (res.token) {
          onLogin();
          onClose();
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  //Очитска общей ошибки
  React.useEffect(() => {
    setLoginErrMessage('');
  }, [values, isOpen, resetForm]);

  //Очистка формы
  React.useEffect(() => {
    resetForm();
  }, [isOpen, resetForm]);

  return (
    <PopupWithForm title='Вход'
      name="login"
      buttonText={'Зарегистрироваться'}
      button='Войти'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      moveToRegisterPopup={moveToRegisterPopup}
      isDisabled={!isValid}
      isLoading={isLoading}
    >
      <label className="popup__tag" htmlFor="email-login">Email</label>
      <input autoComplete="off" id="email-login" type="email" name="email" placeholder="Введите email"
        className="popup__input popup__input_email" onChange={handleChange} value={values.email || ''} required readOnly={inputDisabled} />
      <p id="login-email-error" className="popup__error">{errors.email || ''}</p>

      <label className="popup__tag" htmlFor="password-login">Пароль</label>
      <input autoComplete="off" id="password-login" type="password" name="password" placeholder="Введите пароль"
        className="popup__input popup__input_password" onChange={handleChange} value={values.password || ''} minLength='8' required readOnly={inputDisabled} />
      <p id="login-password-error" className="popup__error">{errors.password || ''}</p>

      <p id="register-error" className="popup__error popup__error_final">{loginErrMessage || ''}</p>
    </PopupWithForm>
  )
}