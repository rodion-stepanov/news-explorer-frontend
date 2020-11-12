import './Preloader.css'

function Preloader() {
    return (
        <section className="preloader">
            <div className="preloader__circle"></div>
            <div className="preloader__image" />
            <h4 className="preloader__title">Ничего не найдено</h4>
            <i className="preloader__text">К сожалению по вашему запросу ничего не найдено.</i>
        </section>
    )
}

export default Preloader;
