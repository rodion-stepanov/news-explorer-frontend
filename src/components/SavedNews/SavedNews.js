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
  onClose,
  articles,
  keywords,
  onRemoveButton,
  reserveImage
}) {

  return (
    <div className="page">
      <Header theme='saved-news'
        handleBurgerClick={handleBurgerClick}
        isBurgerOpen={isBurgerOpen}
        isLoggedIn={isLoggedIn}
        onLoginButton={onLoginButton}
        onClose={onClose} />
      <main className="saved-news">
        <SavedNewsHeader keywords={keywords} />
        <NewsCardList theme='saved-news' isLoggedIn={isLoggedIn}
          articles={articles} onRemoveButton={onRemoveButton} reserveImage={reserveImage}/>
      </main >
      <Footer />
    </div>
  )
}

export default SavedNews;