import React from 'react';
import './Preloader.css'

function Preloader() {
  return (
    <section className="preloader preloader_visible">
      <div className="preloader__circle" />
      <i className="preloader__text">Идет поиск новостей...</i>
      <div className="preloader__image" />
      <h4 className="preloader__title">Ничего не найдено</h4>
      <i className="preloader__text">К сожалению по вашему запросу ничего не найдено.</i>
    </section>
  )
}

export default Preloader;
