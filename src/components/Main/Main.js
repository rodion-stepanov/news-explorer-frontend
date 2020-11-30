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
  handleLoginPopup,
  isOpenRegisterPopup,
  isOpenLoginPopup,
  isOpenTipPopup,
  moveToRegisterPopup,
  moveToLoginPopup,
  moveToTipPopup,
  onClose,
  isLoggedIn,
  onLogin,
  onLoginButton,
  isPopupOpen,
  handleBurgerClick,
  isBurgerOpen,
  onFindArticles,
  articles,
  savedArticles,
  isLoading,
  isNewsNotFound,
  onSaveButton,
  onRemoveButton,
  isSearching,
  isError,
  reserveImage
}) {

  const pageClass = classnames('page', { 'page_fixed': isPopupOpen })

  return (
    <div className={pageClass}>
      <Header
        theme='main'
        handleLoginPopup={handleLoginPopup}
        isLoggedIn={isLoggedIn}
        onLoginButton={onLoginButton}
        isPopupOpen={isPopupOpen}
        handleBurgerClick={handleBurgerClick}
        isBurgerOpen={isBurgerOpen}
        onClose={onClose} />
      <SearchForm
        onFindArticles={onFindArticles} isSearching={isSearching} />
      <NewsCardList
        theme='main' isLoggedIn={isLoggedIn}
        articles={articles} savedArticles={savedArticles}
        onSaveButton={onSaveButton} onRemoveButton={onRemoveButton}
        handleLoginPopup={handleLoginPopup}
        isLoading={isLoading} reserveImage={reserveImage} />
      <Preloader
        isNewsNotFound={isNewsNotFound}
        isError={isError} isSearching={isSearching} />
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