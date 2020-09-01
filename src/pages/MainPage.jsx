import React from 'react'
import mainPage from '../img/mainPage.jpg'

function MainPage() {
    return (
        <div className='mainPage'>
            <div className="container page">
                <div className="mainPage__img">
                    <div className="mainPage__img__text">
                        <h2>Mine-Imperial</h2>
                        <h3>Сайт, посвященный серверу Minecraft</h3>
                    </div>
                    <img src={mainPage} alt=""/>
                </div>
                <div className="page__content">
                    <h2>Что есть на сайте?</h2>
                    <ul>
                        <li>На данный момент вы можете посмотреть карту нижнего мира, нажав на три линии в верхнем правом углу, и
                            <br/> перейти во вкладку "Карта нижнего мира".</li>
                        <li>Там же вы можете добавить свой маркер, нажав внизу на кнопку "Добавить маркер", и ввести свои данные.</li>
                        <li>После этого ваш маркер идет на модерацию, где его проверит администратор.</li>
                        <li>Стать администратором можно во вкладке "Настройки".</li>
                        <li>Когда администратор будет проверять маркер, у него будет возможность его одобрить или отклонить.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MainPage
