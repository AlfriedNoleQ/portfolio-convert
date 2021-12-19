import React from 'react'
import './navbar.css'
import { useState } from 'react'

const NavBar = () => {

    const navLists = 
        [
            {
                id: 1,
                name: "Home",
                to: "/#home",
                className: "nav__link",
            },
            {
                id: 2,
                name: "About",
                to: "/#about",
                className: "nav__link",
            },
            {
                id: 3,
                name: "Skills",
                to: "/#skills",
                className: "nav__link",
            },
            {
                id: 4,
                name: "Work",
                to: "/#work",
                className: "nav__link",
            },
            {
                id: 5,
                name: "Contact",
                to: "/#contact",
                className: "nav__link",
            }
        ]

    const [activeIndex, setActiveIndex] = useState(0);
    const [menuActive, setMenuActive] = useState(false)

    const handleOnClick = index => {
        setActiveIndex(index);
    };

    const handleOpenMenu = () => {
        setMenuActive(!menuActive)
    }

    return (
        <>
            <header className="l-header">
                <nav className="nav bd-grid">
                    <div>
                        <a href="/" className="nav__logo">QuyTran / <span className='strong'>FE Developer</span></a>
                    </div>

                    <div 
                        className={menuActive === true ? `nav__menu show` : `nav__menu`}
                        id="nav-menu"
                    >
                        <ul className="nav__list">
                            {navLists.map((navList) => 
                                (
                                    <li className="nav__item" key={navList.id}>
                                        <a 
                                            href={navList.to} 
                                            className={activeIndex === navList.id ? `${navList.className} active`: `${navList.className}`}
                                            onClick={() => handleOnClick(navList.id)}
                                        >
                                            {navList.name}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    <div className="nav__toggle" id="nav-toggle" onClick={handleOpenMenu}>
                        <i className='bx bx-menu'></i>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavBar
