import React from 'react';
import './SavedNewsHeader.css'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SavedNewsHeader({ keywords }) {

  const currentUser = React.useContext(CurrentUserContext);
  const endings = ['-у другому', '-м другим', '-и другим'];

  let sortedKeywords;
  let sumOfOtherKeywords;

  //Фильтрация ключевых слов по количеству
  const savedNewsCounter = () => {
    const obj = keywords.reduce((r, e) => (r[e] = (r[e] || 0) + 1, r), {});
    const sortedArray = Object.keys(obj).sort((a, b) => obj[b] - obj[a])
    if (sortedArray.length <= 3) {
      sortedKeywords = sortedArray.join(', ');
      sumOfOtherKeywords = 0;
    } else {
      sortedKeywords = sortedArray.slice(0, 2).join(', ');
      sumOfOtherKeywords = sortedArray.length - 2;
    }
  };

  //Окончания в зависимости от количества ключевых слов
  savedNewsCounter();
  const changeEndingWords = (number, txt, cases = [2, 0, 1, 1, 1, 2]) => txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  const keywordsEnding = changeEndingWords(sumOfOtherKeywords, endings);

  return (
    <section className="saved-news-header">
      <h3 className="saved-news-header__title">Сохранённые статьи</h3>
      <p className="saved-news-header__news-counter">{currentUser.name}, у вас {keywords.length} сохранённых статей</p>
      {keywords.length !== 0 && <p className="saved-news-header__keywords">По ключевым словам:
      <span className="saved-news-header__keywords-span"> {sortedKeywords}</span> {sumOfOtherKeywords === 0 ? '' : 'и'}
        <span className="saved-news-header__keywords-span"> {sumOfOtherKeywords === 0 ? '' : `${sumOfOtherKeywords}${keywordsEnding}`}</span></p>}
    </section>
  )
}

export default SavedNewsHeader;