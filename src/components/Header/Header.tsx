import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';
import logo from '../../Assets/image/Ramilya/logo.png';
import tel from '../../Assets/image/Ramilya/tel.png';
import adres from '../../Assets/image/Ramilya/adres.png';

const Header: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={s.header}>
            <div className='container'>
                <div className={s.icon}>
                    <div className={s.icon_block}>
                        <img src={adres} alt="adres" />
                        <p>Адрес компании здесь</p>
                    </div>
                    <div className={s.icon_block}>
                        <img src={tel} alt="tel" />
                        <p>+996 555 222 333</p>
                    </div>
                </div>
            </div>
            <header>
                <div className={`container ${s.wrapper}`}>
                    <NavLink to={'/'}>
                        <img src={logo} alt="logo" />
                    </NavLink>
                    <div className={`${s.navbar} ${isOpen ? s.active : ''}`}>
                        <div className={s.burger} onClick={toggleMenu}>
                            <div className={s.line}></div>
                            <div className={s.line}></div>
                            <div className={s.line}></div>
                        </div>
                        <div className={s.menu}>
                            <NavLink to={'/'} onClick={toggleMenu}>
                                <h2 className={s.nav_title}>главная</h2>
                            </NavLink>
                            <NavLink to={'/about_us'} onClick={toggleMenu}>
                                <h2 className={s.nav_title}>о нас</h2>
                            </NavLink>
                            <NavLink to={'/our_works'} onClick={toggleMenu}>
                                <h2 className={s.nav_title}>наши работы</h2>
                            </NavLink>
                            <NavLink to={'/services'} onClick={toggleMenu}>
                                <h2 className={s.nav_title}>УСЛУГИ</h2>
                            </NavLink>
                            <a href="#partners" onClick={toggleMenu}></a>
                            <h2 className={s.nav_title}>партнеры</h2>
                            <select className={s.select} onClick={toggleMenu}>
                                <option value="ru">ру</option>
                                <option value="eng">eng</option>
                            </select>
                            <NavLink to={'/form'} onClick={toggleMenu}>
                                <button className={s.btn_nav}>онлайн-запрос</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;