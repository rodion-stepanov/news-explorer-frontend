import './Navigation.css';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

function Navigation({ theme }) {
    const navLink = classnames(`navigation__link navigation__link_theme_${theme}`);
    const activeNavLink = classnames(`navigation__active-link navigation__active-link_theme_${theme}`);
    return (
        <nav className="navigation">
            <NavLink exact to="/" activeClassName={activeNavLink} className={navLink}>Главная</NavLink>
            <NavLink to="/saved-news" activeClassName={activeNavLink} className={navLink}>Сохранённые статьи</NavLink>
        </nav>
    )
}

export default Navigation;