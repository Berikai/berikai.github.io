import { navigateTo, togglePage, getAppState } from './navigationStore.js';
import { cardStyle } from './Card3D.js';

export const portfolioPageState = {
    get show() {
        return getAppState().activePage === 'portfolio';
    },
    get card3D() {
        return cardStyle.card3D;
    },
    set card3D(val) {
        cardStyle.card3D = val;
    },
    onAbout: false
};

export const showPortfolioPage = () => {
    navigateTo('portfolio');
};

export const hidePortfolioPage = () => {
    if (getAppState().activePage === 'portfolio') {
        navigateTo('home');
    }
};

export const PortfolioPage = () => {
    togglePage('portfolio');
};
