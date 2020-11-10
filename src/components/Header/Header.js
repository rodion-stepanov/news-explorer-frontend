import './Header.css';
import Navigation from '../Navigation/Navigation'

function Header() {
    return (
        <header className="header">
            <h1 className="header__logo header__logo_theme_main">NewsExplorer</h1>
            <Navigation />
            <button className="header__logout header__logout_theme_main"><h2 className="header__logout-text">Грета</h2><div className="header__logout-image header__logout-image_theme_main"></div></button>
        </header>
    )
}

export default Header;