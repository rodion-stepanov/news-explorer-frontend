import React from 'react';
import './About.css'
import userImage from '../../images/photo-user.jpg';

function About() {
  return (
    <section className="about">
      <img className="about__image" src={userImage} alt="Фото автора" />
      <div className="about__text-wrapper">
        <h3 className="about__title">Об авторе</h3>
        <p className="about__text">Меня зовут Родион Степанов, я начинающий frontend-разработчик из Москвы, 27 лет. Закончил обучение в Яндекс.Практикуме.</p>
        <p className="about__text">За время обучения освоил и научился применять основные инструменты веб разработчика, такие как:
        HTML/CSS, работа с макетами, адаптивная и семантическая верстка, методология БЭМ, Flexbox, Grid, Система контроля версий Git, Javascript, ООП, асинхронность, работа с API, webpack, React, JSX, хуки, роутинг.
        </p>
      </div>
    </section>
  )
}

export default About;