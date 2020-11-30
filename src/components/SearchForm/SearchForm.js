import React from 'react';
import './SearchForm.css'
import classnames from 'classnames';

function SearchForm({ onFindArticles, isSearching }) {

  const [keyword, setKeyword] = React.useState('');
  const submitButtonClassName = classnames('search-form__button', { 'search-form__button_locked': !keyword || isSearching });
  const submitButtonDisabled = classnames({ disabled: !keyword || isSearching })
  const inputDisabled = classnames({readOnly: isSearching})

  function handleSubmit(e) {
    e.preventDefault();
    onFindArticles(keyword);
  }

  function handleKeywordSearch(e) {
    setKeyword(e.target.value)
  }


  return (
    <section className="search-form">
      <form className="search-form__wrapper">
        <h3 className="search-form__title">Что творится в мире?</h3>
        <p className="search-form__desription">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
        <div className="search-form__search-container">
          <input autoFocus type="text" className="search-form__input" placeholder="Введите тему новости" onChange={handleKeywordSearch} required readOnly={inputDisabled}/>
          <button className={submitButtonClassName} onClick={handleSubmit} disabled={submitButtonDisabled}>Искать</button>
        </div>
      </form>
    </section>
  )
}

export default SearchForm;
