import './Navigation.css';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="navigation">
            <NavLink exact to="/#" activeClassName="navigation__link_active" className="navigation__link navigation__link_theme_main">Главная</NavLink>
            <NavLink to="/sads" activeClassName="navigation__link_active" className="navigation__link navigation__link_theme_main">Сохранённые статьи</NavLink>
        </nav>
    )
}

export default Navigation;