import React, { useLayoutEffect, useEffect } from 'preact/compat';

import { cardStyle } from './scripts/Card3D';
import {
    useAppState,
    navigateTo,
    selectProject,
    isMobileViewport,
    applyThemeToDOM
} from './scripts/navigationStore';
import { setCardBaseRotation } from './scripts/Card3D';
import { PROJECTS } from './data/projects';

import Header from './components/Header';
import About from './components/About';
import AboutExtra from './components/AboutExtra';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Switch from './components/Switch';
import Navbar from './components/Navigation';
import Modal from './components/Modal';
import Spotify from './components/Spotify';
import CommandPalette from './components/CommandPalette';

export default function App() {
    const { activePage, darkMode } = useAppState();
    const isAbout = activePage === 'about';
    const isPortfolio = activePage === 'portfolio';

    useLayoutEffect(() => {
        applyThemeToDOM(darkMode);
    }, []);

    useEffect(() => {
        const handleHashChange = () => {
            const raw = window.location.hash.replace(/^#\/?/, '').trim();
            if (!raw) {
                navigateTo('home');
            } else if (raw === 'about') {
                navigateTo('about');
            } else if (raw === 'portfolio') {
                navigateTo('portfolio', null);
            } else if (raw.startsWith('portfolio/')) {
                const projId = raw.slice('portfolio/'.length);
                const exists = PROJECTS.some((p) => p.id === projId);
                if (exists) selectProject(projId);
                else navigateTo('portfolio', null);
            }
        };

        const handleResize = () => {
            if (activePage === 'about') {
                const desiredRotation = isMobileViewport() ? 0 : -90;
                if (cardStyle.rotation !== desiredRotation) {
                    setCardBaseRotation(desiredRotation, false);
                }
            }
        };

        const mql = window.matchMedia ? window.matchMedia('(max-width: 678px)') : null;

        window.addEventListener('hashchange', handleHashChange);
        window.addEventListener('resize', handleResize);
        if (mql?.addEventListener) {
            mql.addEventListener('change', handleResize);
        }
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
            window.removeEventListener('resize', handleResize);
            if (mql?.removeEventListener) {
                mql.removeEventListener('change', handleResize);
            }
        };
    }, [activePage]);

    return (
        <div
            className={`App ${isAbout ? 'about-open' : ''} ${
                isPortfolio ? 'portfolio-open' : ''
            }`}
            style={{ opacity: 0, transition: 'opacity 0.2s' }}
        >
            <Modal />
            <CommandPalette />
            <div className="App-scale">
                <div
                    id="Card"
                    className={`Card ${isAbout ? 'about-open' : ''} ${
                        isPortfolio ? 'portfolio-open' : ''
                    }`}
                >
                    <div className="card-glare" aria-hidden="true" />
                    <Switch />
                    <Navbar />
                    <Portfolio />
                    <Header />
                    <About />
                    <AboutExtra />
                    <Footer />
                    <Spotify />
                </div>
            </div>
        </div>
    );
}
