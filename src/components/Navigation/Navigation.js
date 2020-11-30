import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Navigation({
  theme, isBurgerOpen, onClose,
  isLoggedIn, onLoginButton }) {

  const currentUser = React.useContext(CurrentUserContext);
  const navLink = classnames(`navigation__link navigation__link_theme_${theme}`);
  const activeNavLink = classnames(`navigation__active-link navigation__active-link_theme_${theme}`);
  const navigation = classnames('navigation', { 'navigation_opened': isBurgerOpen })
  const logoutText = isLoggedIn ? currentUser.name : 'Авторизоваться';


  const navigationLogout = classnames(`navigation__logout navigation__logout_theme_${theme}`);
  const navigationLogoutImage = classnames(`navigation__logout-image navigation__logout-image_theme_${theme}`, { 'navigation__logout-image_active': isBurgerOpen });
  const navigationLogoutText = classnames(`navigation__logout-text navigation__logout-text_${theme}`);
  return (
    <nav className={navigation}>
      <NavLink exact to="/" onClick={onClose} activeClassName={activeNavLink} className={navLink}>Главная</NavLink>
      {isLoggedIn && <NavLink to="/saved-news" onClick={onClose} activeClassName={activeNavLink} className={navLink}>Сохранённые статьи</NavLink>}
      <button className={navigationLogout} type="button" onClick={onLoginButton}>
        <h2 className={navigationLogoutText}>{logoutText}</h2>
        {isLoggedIn && <div className={navigationLogoutImage} />}
      </button>
    </nav>
  )
}

export default Navigation;