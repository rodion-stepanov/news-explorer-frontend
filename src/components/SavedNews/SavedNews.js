import React from 'react';
import './SavedNews.css';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import Footer from '../Footer/Footer';

function SavedNews({
  handleBurgerClick,
  isBurgerOpen,
  isLoggedIn,
  onLoginButton,
  onClose
}) {

  return (
    <div className="page">
      <Header theme='saved-news'
        handleBurgerClick={handleBurgerClick}
        isBurgerOpen={isBurgerOpen}
        isLoggedIn={isLoggedIn}
        onLoginButton={onLoginButton}
        onClose={onClose}/>
      <main className="saved-news">
        <SavedNewsHeader />
        <NewsCardList theme='saved-news' isLoggedIn={isLoggedIn}/>
      </main >
      <Footer />
    </div>
  )
}

export default SavedNews;