import React from 'react';
import './Footer.css'
import githubIcon from '../../images/github.svg'
import telegramIcon from '../../images/telegram.svg'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__text">&copy; 2020 NewsExplorer, Powered by News API</p>
            <ul className="footer__list">
                <li className="footer__list-item">
                    <Link className="footer__list-item-link" to="/">Главная</Link>
                </li>
                <li className="footer__list-item">
                    <a className="footer__list-item-link" href="https://praktikum.yandex.ru/" target="_blank" rel="noopener noreferrer">Яндекс.Практикум</a>
                </li>
            </ul>
            <ul className="footer__icons">
                <li className="footer__icon">
                    <a href="https://github.com/Rodion257" target="_blank" rel="noopener noreferrer"><img className="footer__icon" src={githubIcon} alt="github icon" /></a>
                </li>
                <li className="footer__icon">
                    <a href="http://t.me/stepanov_rodion" target="_blank" rel="noopener noreferrer"><img className="footer__icon" src={telegramIcon} alt="telegram icon" /></a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;
