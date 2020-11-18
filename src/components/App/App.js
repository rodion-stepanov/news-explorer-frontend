import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import '../Main/Main';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';

function App() {
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isTipPopupOpen, setIsTipPopupOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = React.useState(false);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const history = useHistory();


  function handleRegisterPopup() {
    setIsRegisterPopupOpen(!isRegisterPopupOpen);
    setIsPopupOpen(!isPopupOpen);
  }

  function handleLoginPopup() {
    setIsLoginPopupOpen(!isLoginPopupOpen);
    setIsPopupOpen(!isPopupOpen);
  }

  function handleTipPopup() {
    setIsTipPopupOpen(!isTipPopupOpen);
    setIsPopupOpen(!isPopupOpen);
  }

  function onLogin() {
    setLoggedIn(true);
  }

  function onSignOut() {
    setLoggedIn(false);
    history.push('./');
  }

  function closeAllPopups() {
    setIsRegisterPopupOpen(false);
    setIsLoginPopupOpen(false);
    setIsTipPopupOpen(false);
    setIsPopupOpen(false);
    setIsBurgerOpen(false);
  }

  function moveToRegisterPopup() {
    closeAllPopups();
    handleRegisterPopup();
    setIsPopupOpen(true);
  }

  function moveToLoginPopup() {
    closeAllPopups();
    handleLoginPopup();
    setIsPopupOpen(true);
  }

  function moveToTipPopup() {
    closeAllPopups();
    handleTipPopup();
    setIsPopupOpen(true);
  }

  function handleLoginButtonClick() {
    loggedIn ? onSignOut() : handleLoginPopup();
    setIsBurgerOpen(!isBurgerOpen);
  }

  function handleBurgerClick() {
    if (isBurgerOpen || isPopupOpen) {
      closeAllPopups();
    }
    else {
      setIsBurgerOpen(true);
    }
  }
  //Закрытие попапа по Esc
  React.useEffect(() => {
    function handleESCclose(evt) {
      if (evt.key === "Escape") {
        closeAllPopups();
      }
    }
    document.addEventListener('keydown', handleESCclose);
    return () => {
      document.removeEventListener('keydown', handleESCclose);
    }
  }, []);

  //Закрытие попапа по клику
  React.useEffect(() => {
    function handleClickClose(evt) {
      if (evt.target.classList.contains('popup')) {
        closeAllPopups();
      }
    }
    document.addEventListener('click', handleClickClose);
    return () => {
      document.removeEventListener('click', handleClickClose);
    }
  }, []);

  return (

      <Switch>
        <Route exact path="/">
          <Main
            handleRegisterPopup={handleRegisterPopup}
            handleLoginPopup={handleLoginPopup}
            handleTipPopup={handleTipPopup}
            isOpenRegisterPopup={isRegisterPopupOpen}
            isOpenLoginPopup={isLoginPopupOpen}
            isOpenTipPopup={isTipPopupOpen}
            moveToRegisterPopup={moveToRegisterPopup}
            moveToLoginPopup={moveToLoginPopup}
            moveToTipPopup={moveToTipPopup}
            onClose={closeAllPopups}
            isLoggedIn={loggedIn}
            onLogin={onLogin}
            onLoginButton={handleLoginButtonClick}
            isPopupOpen={isPopupOpen}
            handleBurgerClick={handleBurgerClick}
            isBurgerOpen={isBurgerOpen}
          />
        </Route>
        <Route>
          <SavedNews path="/saved-news"
            handleBurgerClick={handleBurgerClick}
            isBurgerOpen={isBurgerOpen}
            isLoggedIn={loggedIn}
            onLoginButton={handleLoginButtonClick}
            onClose={closeAllPopups} />
        </Route>
      </Switch>
  );
}

export default App;
