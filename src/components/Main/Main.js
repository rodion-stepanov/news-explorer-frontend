import './Main.css';
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm';
import NewsCardList from '../NewsCardList/NewsCardList';


function Main() {
    return (
        <>
            <Header />
            <SearchForm />
            <NewsCardList />
        </>
    )
}

export default Main;