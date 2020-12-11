import React from 'react';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';
import './App.css';
import '../Main/Main';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import { findArticles } from '../../utils/NewsApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { getUser, getSavedArticles } from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { saveArticle, deleteArticle } from '../../utils/MainApi';

function App() {
  const history = useHistory();
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isTipPopupOpen, setIsTipPopupOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = React.useState(false);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [articles, setArticles] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isSearching, setIsSearching] = React.useState(false);
  const [newsNotFound, setNewsNotFound] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [savedArticles, setSavedArticles] = React.useState([]);
  const [savedKeywords, setSavedKeywords] = React.useState([]);
  const [isError, setIsError] = React.useState(false);
  const reserveImage = 'https://images.unsplash.com/photo-1485115905815-74a5c9fda2f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=661&q=80';

  //Загрузка карточек при открытии ранее закрытой страницы
  React.useEffect(() => {
    const localStorageArticles = JSON.parse(localStorage.getItem('articles'));
    if (localStorageArticles) {
      setArticles(localStorageArticles)
    }
    else {
      localStorage.removeItem('articles');
    }
  }, []);

  //Поиск карточек по самбиту
  function handleSearchArticlesSubmit(searchWord) {
    const keyword = searchWord && searchWord[0].toUpperCase() + searchWord.slice(1).toLowerCase();
    localStorage.setItem('keyword', keyword);
    setIsSearching(true);
    setNewsNotFound(false);
    setArticles([]);
    setIsError(false);
    findArticles(keyword)
      .then((res) => {
        if (res.articles.length === 0) {
          setNewsNotFound(true);
          return;
        }
        res.articles.forEach(article => {
          article.keyword = keyword, article.source = article.source.name,
            article.text = article.description, article.date = article.publishedAt,
            article.link = article.url, article.image = article.urlToImage || reserveImage
        });
        setArticles(res.articles);
        localStorage.setItem('articles', JSON.stringify(res.articles));
      })
      .catch(() => setIsError(true))
      .finally(() => setIsSearching(false));
  }

  //Вход пользователя по токену
  React.useEffect(() => {
    setIsLoading(true);
    const tokenCheck = () => {
      const jwt = localStorage.getItem('jwt');
      if (jwt) {
        getUser(jwt)
          .then((res) => {
            if (res) {
              setLoggedIn(true);
              setCurrentUser(res);
              getSavedArticles(jwt)
                .then((articles) => {
                  if (articles) {
                    setSavedArticles(articles)
                  }
                })
            }
          })
          .catch((err) => console.log(err))
          .finally(() => setIsLoading(false))
      }
      else {
        localStorage.removeItem('jwt');
        setIsLoading(false);
      }
    };

    tokenCheck();
  }, [loggedIn, history]);


  //Сохранение карточки по кнопке
  function saveArticleButtonHandler(article) {
    setIsLoading(true);
    const notUniqueArticle = savedArticles.some((item) => item.date === article.date && item.link === article.link);
    if (notUniqueArticle) {
      deleteArticle(article._id)
        .then(() => {
          const arrWithoutArticle = savedArticles.filter((i) => i !== article);
          setSavedArticles(arrWithoutArticle)
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false))
    } else {
      saveArticle(article)
        .then((savedArticle) => {
          if (!savedArticle.error) {
            setSavedArticles([...savedArticles, savedArticle]);
          }
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false))
    }
  }

  //Удаление сохраненной карточки по кнопке
  function removeArticleButtonHandler(article) {
    deleteArticle(article._id)
      .then(() => {
        const arrWithoutArticle = savedArticles.filter((i) => i !== article);
        setSavedArticles(arrWithoutArticle)
      })
      .catch((err) => console.log(err));
  }

  //Обновление сохраненных ключевых слов
  React.useEffect(() => {
    const arrKeyword = savedArticles.map(article => article.keyword)
    setSavedKeywords(arrKeyword)
  }, [savedArticles]);

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
    localStorage.removeItem('jwt');
    localStorage.removeItem('articles');
    setLoggedIn(false);
    setSavedArticles([]);
    setArticles([]);
    setCurrentUser({});
    setIsLoginPopupOpen(false);
    history.push('/');
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
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path="/">
          <Main
            handleLoginPopup={handleLoginPopup}
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
            onFindArticles={handleSearchArticlesSubmit}
            articles={articles}
            savedArticles={savedArticles}
            isLoading={isLoading}
            isNewsNotFound={newsNotFound}
            onSaveButton={saveArticleButtonHandler}
            onRemoveButton={removeArticleButtonHandler}
            isSearching={isSearching}
            isError={isError}
            reserveImage={reserveImage}
          />
        </Route>
        {!isLoading && <ProtectedRoute
          component={SavedNews}
          path="/saved-news"
          handleBurgerClick={handleBurgerClick}
          isBurgerOpen={isBurgerOpen}
          isLoggedIn={loggedIn}
          onLoginButton={handleLoginButtonClick}
          onClose={closeAllPopups}
          articles={savedArticles}
          keywords={savedKeywords}
          onRemoveButton={removeArticleButtonHandler}
          setIsLoginPopupOpen={setIsLoginPopupOpen}
          reserveImage={reserveImage}
        />}
        <Route path="/">
          {!isLoading && <Redirect to={"/"} />}
        </Route>
      </Switch>
    </ CurrentUserContext.Provider>
  );
}

export default App;
