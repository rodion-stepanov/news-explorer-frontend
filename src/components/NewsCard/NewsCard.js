import React from 'react';
import './NewsCard.css'
import classnames from 'classnames'

function NewsCard({ theme, isLoggedIn }) {
  const [tipOpened, setTipOpened] = React.useState(false);
  const tipClassName = classnames('news-card__tip', { 'news-card__tip_opened': tipOpened });
  const buttonClassName = classnames(`news-card__button news-card__button_image_${theme}`)

  function tipHandler() {
    setTipOpened(!tipOpened);
  }

  return (
    <section className="news-card">
      <div className="news-card__features">
        {/* TODO дописать логику текста подсказки для карточек */}
        {(isLoggedIn && theme == 'saved-news') && <p className="news-card__keyword">Фотография</p>}
        <p className={tipClassName}>{isLoggedIn ? 'Убрать из сохраненных' : 'Войдите, чтобы сохранять статьи'}</p>
        {/* класс для сохраненной карточки news-card__button_marked */}
        <button className={buttonClassName} type="button" onMouseEnter={tipHandler} onMouseLeave={tipHandler} />
      </div>

      <img className="news-card__image" alt="Картинка новости" src="https://images.unsplash.com/photo-1580817270982-75c71a0d53e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
      <time className="news-card__date">2 августа, 2019</time>
      <h3 className="news-card__title">Национальное достояние – парки</h3>
      <article className="news-card__article">В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.</article>
      <p className="news-card__source">Дзен</p>
    </section>
  )
}

export default NewsCard;