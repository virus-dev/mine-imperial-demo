import React, { useState, useEffect } from 'react'
import burgerMenu from '../img/burgerMenu.svg'
import { Link } from 'react-router-dom'

function Header() {
    const [burgerMenuOpened, setBurgerMenuOpened] = useState(false);
    const toggleOpenBurgerMenu = () => {
        setBurgerMenuOpened(!burgerMenuOpened);
    }
    const burgerIcon = React.useRef();

    const handleOutsideClick = (e) => {
        if (!e.path.includes(burgerIcon.current)) {
            setBurgerMenuOpened(false)
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
    }, []);

    return (
        <header>
            <div className="nothingLine"></div>
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo header__item">Лого</div>
                    <div className="header__infoPage header__item">Главная страница</div>
                    <div className="header__user header__item">Гость</div>
                    <div ref={burgerIcon} className="header__burger header__item">
                        <img onClick={() => toggleOpenBurgerMenu()} src={burgerMenu} alt="Бургер меню"/>
                        {burgerMenuOpened && 
                        <div className="header__burgerMenu">
                            <Link to="neather" className="header__burgerMenu__item">Карта ада</Link>
                        </div>}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
