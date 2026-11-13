import React, { useState, useEffect, useRef } from 'preact/compat';
import { FontAwesomeIcon } from '@aduh95/preact-fontawesome';
import {
    faMagnifyingGlass,
    faArrowUpRightFromSquare,
    faMoon,
    faSun,
    faCube,
    faLayerGroup,
    faCircleInfo,
    faTerminal,
    faGlobe
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faSoundcloud } from '@fortawesome/free-brands-svg-icons';

import { PROJECTS } from '../data/projects';
import {
    useAppState,
    setCmdOpen,
    navigateTo,
    selectProject,
    toggleDarkMode,
    toggleMode3D
} from '../scripts/navigationStore';

export default function CommandPalette() {
    const { cmdOpen, darkMode, mode3D } = useAppState();
    const [query, setQuery] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);
    const inputRef = useRef(null);

    const actions = [
        {
            id: 'nav-portfolio',
            group: 'Navigation',
            label: 'Portfolio — View All Projects',
            icon: faLayerGroup,
            run: () => navigateTo('portfolio')
        },
        {
            id: 'nav-about',
            group: 'Navigation',
            label: 'About Me',
            icon: faCircleInfo,
            run: () => navigateTo('about')
        },
        {
            id: 'nav-home',
            group: 'Navigation',
            label: 'Home Card',
            icon: faGlobe,
            run: () => navigateTo('home')
        },
        ...PROJECTS.map((p) => ({
            id: `proj-${p.id}`,
            group: 'Projects',
            label: `${p.title} — ${p.shortInfo.slice(0, 48)}…`,
            keywords: `${p.title} ${p.shortInfo} ${p.tech.map((t) => t.name).join(' ')}`,
            icon: faLayerGroup,
            badge: p.status,
            run: () => selectProject(p.id)
        })),
        {
            id: 'pref-theme',
            group: 'Preferences',
            label: darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode',
            icon: darkMode ? faSun : faMoon,
            run: () => toggleDarkMode()
        },
        {
            id: 'pref-3d',
            group: 'Preferences',
            label: mode3D ? 'Disable 3D Card Tilt' : 'Enable 3D Card Tilt',
            icon: faCube,
            run: () => toggleMode3D()
        },
        {
            id: 'ext-blog',
            group: 'Links',
            label: 'Blog (blog.berikai.dev)',
            icon: faArrowUpRightFromSquare,
            run: () => window.open('https://blog.berikai.dev', '_blank')
        },
        {
            id: 'ext-verdant',
            group: 'Links',
            label: 'Verdant (verdant.tr)',
            icon: faArrowUpRightFromSquare,
            run: () => window.open('https://verdant.tr', '_blank')
        },
        {
            id: 'ext-github',
            group: 'Links',
            label: 'GitHub (@Berikai)',
            icon: faGithub,
            run: () => window.open('https://github.com/Berikai', '_blank')
        },
        {
            id: 'ext-soundcloud',
            group: 'Links',
            label: 'SoundCloud (@verdantbass)',
            icon: faSoundcloud,
            run: () => window.open('https://soundcloud.com/verdantbass', '_blank')
        }
    ];

    const normalizedQuery = query.trim().toLowerCase();
    const filteredActions = normalizedQuery
        ? actions.filter(
              (a) =>
                  a.label.toLowerCase().includes(normalizedQuery) ||
                  a.group.toLowerCase().includes(normalizedQuery) ||
                  (a.keywords && a.keywords.toLowerCase().includes(normalizedQuery))
          )
        : actions;

    useEffect(() => {
        const onKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                setCmdOpen(!cmdOpen);
            } else if (cmdOpen && e.key === 'Escape') {
                e.preventDefault();
                setCmdOpen(false);
            }
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [cmdOpen]);

    useEffect(() => {
        if (cmdOpen) {
            setQuery('');
            setActiveIndex(0);
            setTimeout(() => inputRef.current?.focus(), 20);
        }
    }, [cmdOpen]);

    useEffect(() => {
        setActiveIndex(0);
    }, [query]);

    if (!cmdOpen) return null;

    const handleKeyNavigation = (e) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setActiveIndex((i) => (filteredActions.length ? (i + 1) % filteredActions.length : 0));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setActiveIndex((i) =>
                filteredActions.length
                    ? (i - 1 + filteredActions.length) % filteredActions.length
                    : 0
            );
        } else if (e.key === 'Enter' && filteredActions[activeIndex]) {
            e.preventDefault();
            filteredActions[activeIndex].run();
            setCmdOpen(false);
        }
    };

    return (
        <div className="cmd-overlay" onClick={() => setCmdOpen(false)}>
            <div className="cmd-modal" onClick={(e) => e.stopPropagation()}>
                <div className="cmd-search-bar">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="cmd-search-icon" />
                    <input
                        ref={inputRef}
                        type="text"
                        className="cmd-input"
                        placeholder="Jump to a project, section, or toggle 3D / theme…"
                        value={query}
                        onInput={(e) => setQuery(e.target.value)}
                        onKeyDown={handleKeyNavigation}
                    />
                    <kbd className="cmd-kbd" onClick={() => setCmdOpen(false)}>
                        ESC
                    </kbd>
                </div>
                <div className="cmd-list">
                    {filteredActions.length === 0 ? (
                        <div className="cmd-empty">No matching actions or projects.</div>
                    ) : (
                        filteredActions.map((item, idx) => (
                            <button
                                key={item.id}
                                type="button"
                                className={`cmd-item ${idx === activeIndex ? 'active' : ''}`}
                                onMouseEnter={() => setActiveIndex(idx)}
                                onClick={() => {
                                    item.run();
                                    setCmdOpen(false);
                                }}
                            >
                                <span className="cmd-item-left">
                                    <FontAwesomeIcon icon={item.icon} className="cmd-item-icon" />
                                    <span className="cmd-item-label">{item.label}</span>
                                </span>
                                <span className="cmd-item-meta">
                                    {item.badge || item.group}
                                </span>
                            </button>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
