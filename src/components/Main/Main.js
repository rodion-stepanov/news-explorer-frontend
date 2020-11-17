import React from 'react';
import './Main.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import NewsCardList from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';
import About from '../About/About';
import Footer from '../Footer/Footer';
import LoginPopup from '../LoginPopup/LoginPopup';
import RegisterPopup from '../RegisterPopup/RegisterPopup';
import PopupWithTip from '../PopupWithTip/PopupWithTip';
import classnames from 'classnames';

function Main({
  isOpenRegisterPopup,
  isOpenLoginPopup,
  isOpenTipPopup,
  // handleRegisterPopup,
  handleLoginPopup,
  // handleTipPopup,
  onClose,
  moveToRegisterPopup,
  moveToLoginPopup,
  moveToTipPopup,
  isLoggedIn,
  onLogin,
  onLoginButton,
  isPopupOpen,
  handleBurgerClick,
  isBurgerOpen }) {

  const pageClass = classnames('page', { 'page_fixed': isPopupOpen })

  return (
    <div className={pageClass}>
      <Header theme='main'
        handleLoginPopup={handleLoginPopup}
        isLoggedIn={isLoggedIn}
        onLoginButton={onLoginButton}
        isPopupOpen={isPopupOpen}
        handleBurgerClick={handleBurgerClick}
        isBurgerOpen={isBurgerOpen}
        onClose={onClose} />
      <SearchForm />
      <NewsCardList theme='main' isLoggedIn={isLoggedIn} />
      <Preloader />
      <About />
      <Footer />
      <RegisterPopup
        isOpen={isOpenRegisterPopup}
        onClose={onClose}
        moveToLoginPopup={moveToLoginPopup}
        moveToTipPopup={moveToTipPopup} />
      <LoginPopup
        isOpen={isOpenLoginPopup}
        onClose={onClose}
        moveToRegisterPopup={moveToRegisterPopup}
        onLogin={onLogin} />
      <PopupWithTip
        onClose={onClose}
        isOpen={isOpenTipPopup}
        moveToLoginPopup={moveToLoginPopup} />
    </div>
  )
}

export default Main;