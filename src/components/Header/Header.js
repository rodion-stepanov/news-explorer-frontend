import './Header.css';
import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation'

function Header({ theme }) {
    const header = classnames(`header header_theme_${theme}`)
    const headerLogo = classnames(`header__logo header__logo_theme_${theme}`);
    const headerLogout = classnames(`header__logout header__logout_theme_${theme}`);
    const headerLogoutImage = classnames(`header__logout-image header__logout-image_theme_${theme}`);
    const headerLogoutText = classnames(`header__logout-text header__logout-text_${theme}`);
    return (
        <header className={header}>
            <Link className="header__logo-link" to={'/'}><h1 className={headerLogo}>NewsExplorer</h1></Link>
            <Navigation theme={theme} />
            <button className={headerLogout} type="button"><h2 className={headerLogoutText}>Грета</h2><div className={headerLogoutImage}></div></button>
        </header>
    )
}

export default Header;