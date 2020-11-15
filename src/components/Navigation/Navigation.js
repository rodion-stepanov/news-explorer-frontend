import './Navigation.css';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

function Navigation({ theme, isBurgerOpen}) {
    const navLink = classnames(`navigation__link navigation__link_theme_${theme}`);
    const activeNavLink = classnames(`navigation__active-link navigation__active-link_theme_${theme}`);
    const navigation = classnames('navigation', {'navigation_opened' : isBurgerOpen})
    
    const navigationLogout = classnames(`navigation__logout navigation__logout_theme_${theme}`);
    const navigationLogoutImage = classnames(`navigation__logout-image navigation__logout-image_theme_${theme}`, {'navigation__logout-image_active' : isBurgerOpen});
    const navigationLogoutText = classnames(`navigation__logout-text navigation__logout-text_${theme}`);
    return (
        <nav className={navigation}>
            <NavLink exact to="/" activeClassName={activeNavLink} className={navLink}>Главная</NavLink>
            <NavLink to="/saved-news" activeClassName={activeNavLink} className={navLink}>Сохранённые статьи</NavLink>
            <button className={navigationLogout} type="button"><h2 className={navigationLogoutText}>Грета</h2><div className={navigationLogoutImage}></div></button>
        </nav>
    )
}

export default Navigation;