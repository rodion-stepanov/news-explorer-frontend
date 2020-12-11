import React from 'react';
import './RegisterPopup.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useFormWithValidation } from '../FormValidation/FormValidation';
import { register } from '../../utils/MainApi';

export default function RegisterPopup({
  isOpen, onClose, moveToLoginPopup, moveToTipPopup
}) {

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
  const [registerErrMessage, setRegisterErrMessage] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const inputDisabled = isLoading ? 'readOnly' : '';

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    register(values)
      .then((res) => {
        if (!res) {
          setRegisterErrMessage('Ошибка сервера');
          return;
        }
        if (res.message) {
          setRegisterErrMessage(res.message);
          return;
        }
        moveToTipPopup();
      })
      .catch((err) => { setRegisterErrMessage(err.message); })
      .finally(() => setIsLoading(false));
  }

  //Очитска общей ошибки
  React.useEffect(() => {
    setRegisterErrMessage('')
  }, [values, isOpen, resetForm])

  //Очистка формы
  React.useEffect(() => {
    resetForm()
  }, [isOpen, resetForm]);

  return (
    <PopupWithForm title='Регистрация'
      name='register' buttonText='Войти'
      button={'Зарегистрироваться'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      moveToLoginPopup={moveToLoginPopup}
      moveToTipPopup={moveToTipPopup}
      isDisabled={!isValid}
      isLoading={isLoading}
    >
      <label className="popup__tag" htmlFor="email-register">Email</label>
      <input autoComplete="off" id="email-register" type="email" name="email" placeholder="Введите email"
        className="popup__input popup__input_email" onChange={handleChange} value={values.email || ''} required readOnly={inputDisabled} />
      <p id="register-email-error" className="popup__error">{errors.email || ''}</p>

      <label className="popup__tag" htmlFor="password-register">Пароль</label>
      <input autoComplete="off" id="password-register" type="password" name="password" placeholder="Введите пароль"
        className="popup__input popup__input_password" onChange={handleChange} value={values.password || ''} minLength='8' required readOnly={inputDisabled} />
      <p id="register-password-error" className="popup__error">{errors.password || ''}</p>

      <label className="popup__tag" htmlFor="name-register">Имя</label>
      <input autoComplete="off" id="name-register" type="text" name="name" placeholder="Введите своё имя"
        className="popup__input popup__input_name" onChange={handleChange} value={values.name || ''} minLength='2' maxLength='30' required readOnly={inputDisabled} />
      <p id="register-name-error" className="popup__error">{errors.name || ''}</p>

      <p id="register-error" className="popup__error popup__error_final">{registerErrMessage || ''}</p>
    </PopupWithForm >
  )
}