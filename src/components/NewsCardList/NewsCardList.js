import './NewsCardList.css'
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList() {
    return (
        <section className="news-card-list">
            <h3 className="news-card-list__title">Результаты поиска</h3>
            <div className="news-card-list__container">
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div>
            <button className="news-card-list__more-button">Показать еще</button>
        </section>
    )
}

export default NewsCardList;