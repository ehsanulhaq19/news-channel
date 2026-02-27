import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isMobile } from 'react-device-detect';
import { logoutAuthSession } from '../../redux/actions/auth';
import searchIcon from '../../../assets/images/icons/search-icon.png';
import settingIcon from '../../../assets/images/icons/setting-icon.png';
import logoutIcon from '../../../assets/images/icons/logout.png';
import type { RootState } from '../../types';
import type { AppDispatch } from '../../redux/store';

const Navbar: React.FC = () => {
    const burgerButtonRef = useRef<HTMLDivElement>(null);
    const navLinkRef = useRef<HTMLUListElement>(null);

    const dispatch = useDispatch<AppDispatch>();
    const articleCategories = useSelector((state: RootState) => state.articleCategory.articleCategories);

    const burgerButtonClickHandler = () => {
        const nav = navLinkRef.current;
        if (!nav) return;
        nav.classList.toggle('nav-active');

        const navLinks = document.querySelectorAll('.nav-links li');
        navLinks.forEach((link, index) => {
            const el = link as HTMLElement;
            if (el.style.animation) {
                el.style.animation = '';
            } else {
                el.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
            }
        });

        burgerButtonRef.current?.classList.toggle('toggle');
    };

    const logoutHandler = () => {
        navbarOptionClickHandler();
        dispatch(logoutAuthSession());
    };

    const navbarOptionClickHandler = () => {
        if (isMobile) {
            burgerButtonClickHandler();
        }
    };

    return (
        <header className="default-navbar" role="banner">
            <section className="nav-section">
                <div className="logo">
                    <Link to="/news-feed">NEWS CHANNEL</Link>
                </div>

                <nav className="nav-menu" role="navigation">
                    <ul className="nav-links" ref={navLinkRef}>
                        <div className="nav-link-section">
                        </div>
                        <div className="nav-link-section">
                            <li className="custom-navbar-button setting-button">
                                <Link to="/search" onClick={navbarOptionClickHandler}>
                                    <img src={searchIcon} />
                                    <span className="option-name">Search</span>
                                </Link>
                            </li>
                            <li className="custom-navbar-button setting-button">
                                <Link to="/setting" onClick={navbarOptionClickHandler}>
                                    <img src={settingIcon} />
                                    <span className="option-name">Setting</span>
                                </Link>
                            </li>
                            <li className="custom-navbar-button logout-button">
                                <a onClick={logoutHandler}>
                                    <img src={logoutIcon} />
                                    <span className="option-name">Logout</span>
                                </a>
                            </li>
                        </div>
                    </ul>
                    <div className="burger" onClick={burgerButtonClickHandler} ref={burgerButtonRef}>
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                        <div className="line-3"></div>
                    </div>
                </nav>
            </section>
        </header>
    );
};

export default Navbar;
