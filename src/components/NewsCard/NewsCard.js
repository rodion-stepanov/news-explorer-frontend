import React from 'react';
import './NewsCard.css';
import classnames from 'classnames';

function NewsCard({
  theme, isLoggedIn, article,
  savedArticles, onSaveButton,
  onRemoveButton, handleLoginPopup,
  isLoading, reserveImage }) {

  const [tipOpened, setTipOpened] = React.useState(false);
  const tipClassName = classnames('news-card__tip', { 'news-card__tip_opened': tipOpened });
  const buttonClassName = classnames(`news-card__button news-card__button_image_${theme}`);
  const disabledButton = classnames({ diasbled: isLoading })
  let savedArt;

  //Проверяем, есть ли найденная статья среди сохраненных
  function isSavedArticle() {
    if (theme == 'main') {
      savedArt = savedArticles.find((i) => i.date === article.date && i.link === article.link);
    }
  }
  isSavedArticle();
  const savedIconClassName = classnames('news-card__button news-card__button_image_main', { 'news-card__button_marked': savedArt })

  //Сохранение или удаление статьи
  function articleButtonHandler(e) {
    e.preventDefault();
    if (!isLoggedIn) {
      handleLoginPopup();
    }
    else if (isLoggedIn && !savedArt) {
      onSaveButton(article);
    }
    else {
      onRemoveButton(savedArt);
    }
  }

  //Удаление сохраненной статьи
  function removeArticleButtonHandler(e) {
    e.preventDefault();
    onRemoveButton(article);
  }

  //Если изображение не загрузилось, меняем на свое
  function imageHandler(e) {
    e.target.src = reserveImage;
  }

  function tipHandler() {
    setTipOpened(!tipOpened);
  }

  //Преобразуем дату в читаемый формат
  const articleDate = `${new Date(article.date).toLocaleString("ru", { month: 'long', day: "numeric" })}, ${new Date(article.date).toLocaleString("ru", { year: "numeric" })}`

  return (
    <a className="news-card" target="_blank" rel="noreferrer noopener" href={article.link}>
      <div className="news-card__features">
        {(isLoggedIn && theme == 'saved-news') && <p className="news-card__keyword">{article.keyword}</p>}
        {theme == 'main' && <p className={tipClassName}>{isLoggedIn ? (savedArt ? 'Убрать из сохраненных' : 'Сохранить') : 'Войдите, чтобы сохранять статьи'}</p>}
        {theme == 'saved-news' && <p className={tipClassName}>{'Убрать из сохраненных'}</p>}

        {theme == 'main' && <button className={savedIconClassName} type="button" onMouseEnter={tipHandler} onMouseLeave={tipHandler} onClick={articleButtonHandler} disabled={disabledButton} />}
        {theme == 'saved-news' && <button className={buttonClassName} type="button" onMouseEnter={tipHandler} onMouseLeave={tipHandler} onClick={removeArticleButtonHandler} />}
      </div>

      <img className="news-card__image" alt="Картинка новости" src={article.image || reserveImage} onError={imageHandler} />
      <time className="news-card__date">{articleDate}</time>
      <h3 className="news-card__title">{article.title}</h3>
      <article className="news-card__article">{article.text}</article>
      <p className="news-card__source">{article.source}</p>
    </a >
  )
}

export default NewsCard;