import React from 'react';
import './Header.css';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation'

function Header({
  theme,
  handleLoginPopup,
  isLoggedIn,
  onLoginButton,
  isPopupOpen,
  handleBurgerClick,
  isBurgerOpen,
  onClose }) {

  const header = classnames(`header header_theme_${theme}`, { 'header_fixed': theme == 'saved-news' }, { 'header_menu_opened': isBurgerOpen })
  const headerLogo = classnames(`header__logo header__logo_theme_${theme}`, { 'header__logo_opened': isBurgerOpen });
  const headerMenuButton = classnames(`header__menu-button header__menu-button_theme_${theme}`, { 'header__menu-button_opened': isBurgerOpen || isPopupOpen });
  return (
    <header className={header}>
      <Link className="header__logo-link" to={'/'}><h1 className={headerLogo}>NewsExplorer</h1></Link>
      <Navigation theme={theme} isBurgerOpen={isBurgerOpen} handleLoginPopup={handleLoginPopup} isLoggedIn={isLoggedIn} onLoginButton={onLoginButton} onClose={onClose} />
      <button className={headerMenuButton} onClick={handleBurgerClick} type="button" />

    </header>
  )
}

export default Header;