import { useState, useEffect } from 'preact/compat';
import { Card3D, DisableCard3D, callbacks, setCardBaseRotation } from './Card3D';
import { PROJECTS } from '../data/projects';

const MOBILE_BREAKPOINT = 678;

export const isMobileViewport = () =>
    (typeof window !== 'undefined' &&
        window.matchMedia &&
        window.matchMedia('(max-width: 678px)').matches) ||
    document.documentElement.clientWidth <= MOBILE_BREAKPOINT ||
    window.innerWidth <= MOBILE_BREAKPOINT;

const parseHash = () => {
    const raw = window.location.hash.replace(/^#\/?/, '').trim();
    if (!raw) return { page: 'home', projectId: null };
    if (raw === 'about') return { page: 'about', projectId: null };
    if (raw === 'portfolio') return { page: 'portfolio', projectId: null };
    if (raw.startsWith('portfolio/')) {
        const projId = raw.slice('portfolio/'.length);
        const exists = PROJECTS.some((p) => p.id === projId);
        return { page: 'portfolio', projectId: exists ? projId : null };
    }
    return { page: 'home', projectId: null };
};

const initialHash = typeof window !== 'undefined' ? parseHash() : { page: 'home', projectId: null };

let state = {
    activePage: initialHash.page,
    selectedProjectId: initialHash.projectId,
    darkMode: typeof window !== 'undefined' && localStorage.getItem('themeMode') === 'dark',
    mode3D: typeof window !== 'undefined' && localStorage.getItem('mode3D') === 'true',
    cmdOpen: false
};

const listeners = new Set();

const emit = () => {
    for (const listener of listeners) {
        listener({ ...state });
    }
};

export const getAppState = () => state;

const syncUrlHash = (page, projectId) => {
    if (typeof window === 'undefined') return;
    let nextHash = '';
    if (page === 'about') nextHash = '#about';
    else if (page === 'portfolio') {
        nextHash = projectId ? `#portfolio/${projectId}` : '#portfolio';
    }
    const currentHash = window.location.hash;
    if (currentHash !== nextHash) {
        const url = nextHash || window.location.pathname + window.location.search;
        window.history.replaceState(null, '', url);
    }
};

export const applyCardOrientationForPage = (page, immediate = false) => {
    if (page === 'about' && !isMobileViewport()) {
        setCardBaseRotation(-90, immediate);
    } else {
        setCardBaseRotation(0, immediate);
    }
};

export const navigateTo = (page, projectId = null) => {
    state = {
        ...state,
        activePage: page,
        selectedProjectId: page === 'portfolio' ? projectId : null
    };
    syncUrlHash(state.activePage, state.selectedProjectId);
    applyCardOrientationForPage(page);
    emit();
};

export const togglePage = (targetPage) => {
    if (state.activePage === targetPage) {
        navigateTo('home', null);
    } else {
        navigateTo(targetPage, null);
    }
};

export const selectProject = (projectId) => {
    const prevPage = state.activePage;
    state = {
        ...state,
        activePage: 'portfolio',
        selectedProjectId: projectId
    };
    syncUrlHash('portfolio', projectId);
    if (prevPage !== 'portfolio') {
        applyCardOrientationForPage('portfolio');
    }
    emit();
};

export const applyThemeToDOM = (darkMode) => {
    if (typeof document === 'undefined') return;
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
};

export const setDarkModeState = (darkMode) => {
    state = { ...state, darkMode };
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('themeMode', darkMode ? 'dark' : 'light');
    }
    applyThemeToDOM(darkMode);
    emit();
};

export const toggleDarkMode = () => {
    setDarkModeState(!state.darkMode);
};

export const setMode3DState = (enabled, mouseEvent = null) => {
    state = { ...state, mode3D: enabled };
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('mode3D', enabled ? 'true' : 'false');
    }
    if (enabled) {
        Card3D();
        if (mouseEvent && callbacks.cardFollowCursor3D) {
            callbacks.cardFollowCursor3D(mouseEvent);
        }
    } else {
        DisableCard3D();
    }
    emit();
};

export const toggleMode3D = (mouseEvent = null) => {
    setMode3DState(!state.mode3D, mouseEvent);
};

export const setCmdOpen = (cmdOpen) => {
    state = { ...state, cmdOpen };
    emit();
};

export const toggleCmdOpen = () => {
    setCmdOpen(!state.cmdOpen);
};

export const useAppState = () => {
    const [localState, setLocalState] = useState(state);

    useEffect(() => {
        listeners.add(setLocalState);
        return () => listeners.delete(setLocalState);
    }, []);

    return localState;
};
