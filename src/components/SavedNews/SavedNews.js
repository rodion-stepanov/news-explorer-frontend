import './SavedNews.css';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import Footer from '../Footer/Footer';
function SavedNews() {
    return (
        <div className="page">
            <Header theme={'saved-news'} />
            <main className="saved-news">
                <SavedNewsHeader />
                <NewsCardList theme={'saved-news'}/>
            </main >
            <Footer />
        </div>
    )
}

export default SavedNews;