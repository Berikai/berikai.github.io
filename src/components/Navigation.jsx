import React from 'preact/compat';
import NavButton from './NavButton';
import { AboutPage } from '../scripts/AboutPage';
import { PortfolioPage } from '../scripts/PortfolioPage';
import { showModal } from './Modal';
import { FontAwesomeIcon } from '@aduh95/preact-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    //showModal() shows in maintenance message
    return (
        <nav className="navbar">
            <div className="navbar-half1">
                <NavButton id={"about-nav"} text={"About"} rotation={"rl"} action={() => AboutPage()}/>
                <NavButton link text={(<><FontAwesomeIcon className="icon-nav-rl" size='xs' icon={faArrowUpRightFromSquare}/><>Blog</></>)} rotation={"rl"} href={"https://blog.berikai.dev"}/>
            </div>
            <div className="navbar-half2">
                <NavButton link text={(<><FontAwesomeIcon className="icon-nav-lr" size='xs' icon={faArrowUpRightFromSquare}/><>Console</></>)} rotation={"lr"} href={"https://console.berikai.dev"}/>
                <NavButton id={"portfolio-nav"} text={"Portfolio"} rotation={"lr"} action={() => PortfolioPage()}/>
            </div>
        </nav>
    )
}
