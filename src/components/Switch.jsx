import React, { useLayoutEffect } from 'preact/compat';
import { useAppState, setDarkModeState, applyThemeToDOM } from '../scripts/navigationStore';

export default function Switch() {
    const { darkMode, activePage } = useAppState();
    const isAbout = activePage === 'about';

    useLayoutEffect(() => {
        applyThemeToDOM(darkMode);
    }, [darkMode]);

    return (
        <div className="switch">
            <label
                id="switch"
                className={`switch ${isAbout ? 'about-open' : ''}`}
                title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
                <input
                    id="mode_switch"
                    type="checkbox"
                    checked={darkMode}
                    onChange={(e) => setDarkModeState(e.target.checked)}
                    aria-label="Toggle dark mode"
                />
                <span className="slider round"></span>
            </label>
        </div>
    );
}
