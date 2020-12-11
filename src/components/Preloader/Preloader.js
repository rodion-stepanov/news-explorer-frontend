import React from 'react';
import './Preloader.css'

function Preloader({
  isNewsNotFound, isError, isSearching
}) {

  return (
    <section className="preloader preloader_visible">
      {isSearching && <div className="preloader__circle" />}
      {isSearching && <i className="preloader__text">Идет поиск новостей...</i>}
      {(isNewsNotFound || isError) && <div className="preloader__image" />}
      {isNewsNotFound && <h4 className="preloader__title">Ничего не найдено</h4>}
      {isNewsNotFound && <i className="preloader__text">К сожалению по вашему запросу ничего не найдено.</i>}
      {isError && <i className="preloader__text">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.</i>}
    </section>
  )
}

export default Preloader;
