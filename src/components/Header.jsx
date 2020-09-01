import React, { useState, useEffect } from 'react'
import burgerMenu from '../img/burgerMenu.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Route } from 'react-router-dom'

function Header(props) {
    const [burgerMenuOpened, setBurgerMenuOpened] = useState(false);
    const state = useSelector(state => state.user.user)

    const toggleOpenBurgerMenu = () => {
        setBurgerMenuOpened(!burgerMenuOpened);
    }
    const burgerIcon = React.useRef();

    const closeBurgerMenu = () => {
        setBurgerMenuOpened(!burgerMenuOpened);
    }

    const handleOutsideClick = (e) => {
        if (!e.path.includes(burgerIcon.current)) {
            setBurgerMenuOpened(false)
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
    }, []);

    let user;
    if (state === 'user') {
        user = 'Гость'
    } else if (state === 'admin') {
        user = 'Админ'
    }

    return (
        <header>
            <div className="nothingLine"></div>
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo header__item">
                        <Link to="/">Лого</Link>
                    </div>
                    <div className="header__infoPage header__item">
                        <Route path='/' exact>Главная страница</Route>
                        <Route path='/neather' exact>Карта нижнего мира</Route>
                        <Route path='/moderation' exact>Модерация</Route>
                        <Route path='/settings' exact>Настройки</Route>
                        <Route path='/map-moderation' exact>Карта модерации</Route>
                    </div>
                    <div className="header__user header__item">
                        {user}
                    </div>
                    <div ref={burgerIcon} className="header__burger header__item">
                        <img onClick={() => toggleOpenBurgerMenu()} src={burgerMenu} alt="Бургер меню"/>
                        {burgerMenuOpened && 
                        <div className="header__burgerMenu">
                            <Link to="neather" onClick={() => closeBurgerMenu()} className="header__burgerMenu__item">Карта нижнего мира</Link>
                            <Link to="settings" onClick={() => closeBurgerMenu()} className="header__burgerMenu__item">Настройки</Link>
                            {state === 'admin' 
                                ? <Link to="moderation" onClick={() => closeBurgerMenu()} className="header__burgerMenu__item">Модерация</Link>
                                : ''
                            }
                        </div>}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
