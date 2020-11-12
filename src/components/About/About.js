import './About.css'

function About() {
    return (
        <container className="about">
            <img className="about__image" src="https://images.unsplash.com/photo-1530742194242-c04a371cc5e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="" />
            {/* <div className="about__image"></div> */}
            <div className="about__text-wrapper">
                <h3 className="about__title">Об авторе</h3>
                <p className="about__text">Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь, какими технологиями разработки владеете.</p>
                <p className="about__text">Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем можете помочь потенциальным заказчикам.</p>
            </div>
        </container>
    )
}

export default About;