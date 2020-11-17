import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({ theme, isLoggedIn }) {
  return (
    <section className="news-card-list">
      {theme === 'main' && <h3 className="news-card-list__title">Результаты поиска</h3>}
      <div className="news-card-list__container">
        <NewsCard theme={theme} isLoggedIn={isLoggedIn} />
        <NewsCard theme={theme} isLoggedIn={isLoggedIn} />
        <NewsCard theme={theme} isLoggedIn={isLoggedIn} />
        <NewsCard theme={theme} isLoggedIn={isLoggedIn} />
        <NewsCard theme={theme} isLoggedIn={isLoggedIn} />
      </div>
      {theme === 'main' && <button className="news-card-list__more-button">Показать еще</button>}
    </section>
  )
}

export default NewsCardList;