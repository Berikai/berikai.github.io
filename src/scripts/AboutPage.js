import { navigateTo, togglePage, getAppState } from './navigationStore.js';

export const aboutPageState = {
    get show() {
        return getAppState().activePage === 'about';
    }
};

export const showAboutPage = () => {
    navigateTo('about');
};

export const hideAboutPage = () => {
    if (getAppState().activePage === 'about') {
        navigateTo('home');
    }
};

export const AboutPage = () => {
    togglePage('about');
};
