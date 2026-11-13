import React from 'preact/compat';
import NavButton from './NavButton';
import { AboutPage } from '../scripts/AboutPage';
import { PortfolioPage } from '../scripts/PortfolioPage';
import { useAppState } from '../scripts/navigationStore';
import { FontAwesomeIcon } from '@aduh95/preact-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    const { activePage } = useAppState();
    const isAbout = activePage === 'about';
    const isPortfolio = activePage === 'portfolio';

    return (
        <nav className={`navbar ${isAbout ? 'about-open' : ''}`}>
            <div className="navbar-half1">
                <NavButton
                    id="about-nav"
                    text={isAbout ? 'Back' : 'About'}
                    rotation="rl"
                    isActive={isAbout}
                    isRotatedAbout={isAbout}
                    action={() => AboutPage()}
                />
                <NavButton
                    link
                    text={
                        <>
                            <FontAwesomeIcon
                                className="icon-nav-rl"
                                size="xs"
                                icon={faArrowUpRightFromSquare}
                            />
                            <>Blog</>
                        </>
                    }
                    rotation="rl"
                    isRotatedAbout={isAbout}
                    href="https://blog.berikai.dev"
                />
            </div>
            <div className="navbar-half2">
                <NavButton
                    link
                    text={
                        <>
                            <FontAwesomeIcon
                                className="icon-nav-lr"
                                size="xs"
                                icon={faArrowUpRightFromSquare}
                            />
                            <>Console</>
                        </>
                    }
                    rotation="lr"
                    isRotatedAbout={isAbout}
                    href="https://console.berikai.dev"
                />
                <NavButton
                    id="portfolio-nav"
                    text={isPortfolio ? 'Back' : 'Portfolio'}
                    rotation="lr"
                    isActive={isPortfolio}
                    isRotatedAbout={isAbout}
                    action={() => PortfolioPage()}
                />
            </div>
        </nav>
    );
}
