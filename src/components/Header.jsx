import React, { useLayoutEffect, useState } from 'preact/compat';
import {
    useAppState,
    setMode3DState,
    toggleMode3D,
    applyCardOrientationForPage,
    isMobileViewport
} from '../scripts/navigationStore';
import { SwitchListener } from '../scripts/Card3D';

let hasPlayedIntro = false;

export default function Header() {
    const { mode3D, activePage } = useAppState();
    const [hoveringPP, setHoveringPP] = useState(false);
    const [ReadyFor3D, setReadyFor3D] = useState(false);

    const isAbout = activePage === 'about';
    const isPortfolio = activePage === 'portfolio';

    useLayoutEffect(() => {
        if (activePage !== 'home') {
            applyCardOrientationForPage(activePage, true);
        }

        const revealApp = () => {
            const app = document.querySelector('.App');
            if (app) app.style.opacity = '1';
        };
        const fallbackTimer = setTimeout(revealApp, 450);

        const readyTimer = setTimeout(() => {
            setReadyFor3D(true);
            if (localStorage.getItem('mode3D') === 'true') {
                setMode3DState(true);
            }
        }, 1450);

        const safetyTimer = setTimeout(() => {
            SwitchListener();
        }, 3000);

        return () => {
            clearTimeout(fallbackTimer);
            clearTimeout(readyTimer);
            clearTimeout(safetyTimer);
        };
    }, []);

    const handleAvatarLoad = () => {
        const app = document.querySelector('.App');
        const card = document.querySelector('.Card');
        const ppLogo = document.querySelector('.pp_logo');
        if (app) app.style.opacity = '1';
        if (hasPlayedIntro) return;
        hasPlayedIntro = true;
        if (card) card.style.animation = 'CardFrame 1.45s ease-in-out';
        if (ppLogo) {
            const useAboutIntro = activePage === 'about' && !isMobileViewport();
            ppLogo.style.animation = `${useAboutIntro ? 'ProfileFrameAbout' : 'ProfileFrame'} 1.45s ease-in-out`;
        }
        setTimeout(() => {
            if (card) card.style.animation = 'none';
            if (ppLogo) ppLogo.style.animation = 'none';
            SwitchListener();
        }, 1500);
    };

    return (
        <header
            className={`App-header ${isAbout ? 'about-open' : ''} ${
                isPortfolio ? 'portfolio-open' : ''
            }`}
        >
            <p className="pp-wrapper">
                <a
                    id="pp"
                    style={{ pointerEvents: ReadyFor3D && !isPortfolio ? 'auto' : 'none' }}
                    onMouseEnter={() => setHoveringPP(true)}
                    onMouseLeave={() => setHoveringPP(false)}
                    onMouseDown={(e) => {
                        e.preventDefault();
                        toggleMode3D(e);
                        setHoveringPP(false);
                    }}
                    title={mode3D ? 'Disable 3D tilt effect' : 'Enable 3D tilt effect'}
                >
                    <img
                        className={`pp_logo ${isAbout ? 'about-open' : ''}`}
                        src="https://avatars.githubusercontent.com/u/18515671?v=4"
                        alt="Berikai"
                        onLoad={handleAvatarLoad}
                    />
                    <span
                        className={`threeD-info ${isAbout ? 'about-open' : ''}`}
                        style={{
                            opacity: hoveringPP && !mode3D ? 1 : 0,
                            transform: isAbout ? undefined : hoveringPP ? 'scale(1.05)' : 'scale(1)'
                        }}
                    >
                        Tap to switch 3D
                    </span>
                </a>
            </p>
            <div className={`username ${isAbout ? 'about-open' : ''}`}>
                Berikai
                <div className="aka">also known as Verdant</div>
            </div>
        </header>
    );
}
