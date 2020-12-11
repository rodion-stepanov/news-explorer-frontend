import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({ theme, isLoggedIn, articles,
  savedArticles, onSaveButton, onRemoveButton,
  handleLoginPopup, isLoading, reserveImage }) {

  const sectionClassName = (articles.length !== 0) ? 'news-card-list' : 'news-card-list_hidden';
  const rowArticles = 3;
  const [cardNum, setCardNum] = React.useState(3);

  //Показать больше новостей
  function showMoreCards() {
    setCardNum(cardNum + rowArticles);
  }

  return (
    <section className={sectionClassName}>
      {(theme === 'main' && articles.length !== 0) && <h3 className="news-card-list__title">Результаты поиска</h3>}
      <div className="news-card-list__container">
        {articles && articles.slice(0, cardNum).map((article, i) => (
          <NewsCard
            key={i}
            article={article}
            savedArticles={savedArticles}
            theme={theme}
            isLoggedIn={isLoggedIn}
            onSaveButton={onSaveButton}
            onRemoveButton={onRemoveButton}
            handleLoginPopup={handleLoginPopup}
            isLoading={isLoading}
            reserveImage={reserveImage}
          />
        ))}
      </div>
      {cardNum < articles.length && <button className="news-card-list__more-button" onClick={showMoreCards}>Показать еще</button>}
    </section>
  )
}

export default NewsCardList;