import './SearchForm.css'
//TODO РЕФАКТОРИНГ
function SearchForm() {
    return (
        <section className="search-form">
            <form className="search-form__wrapper">
                <h3 className="search-form__title">Что творится в мире?</h3>
                <p className="search-form__desription">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
                <div className="search-form__search-container">
                    <input autoFocus type="text" className="search-form__input" placeholder="Введите тему новости" />
                    <button className="search-form__button">Искать</button>
                </div>
            </form>
        </section>
    )
}

export default SearchForm;
