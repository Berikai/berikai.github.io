export const cardStyle = {
    rotation: 0,
    card3D: false,
    isTransitioning: false
};

const updateGlare = (glare, percentX, percentY, active) => {
    if (!glare) return;
    if (!active) {
        glare.style.opacity = '0';
        return;
    }
    glare.style.opacity = '1';
    glare.style.background = `radial-gradient(circle at ${percentX}% ${percentY}%, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0) 65%)`;
};

const showSwitch = (switchbox, slider) => (e) => {
    if (!switchbox || !slider) return;
    const angleX = (window.innerWidth / 2 - e.clientX) / 10;
    const angleY = (window.innerHeight / 2 - e.clientY) / 20;

    if (cardStyle.rotation === 0 ? (angleX > 0 && angleY > 0) : (angleX > 0 && angleY < 0)) {
        switchbox.style.opacity = '1';
        switchbox.style.pointerEvents = 'auto';
        slider.style.cursor = 'pointer';
    } else {
        switchbox.style.opacity = '';
        switchbox.style.pointerEvents = '';
        slider.style.cursor = '';
    }
};

const hideSwitch = (switchbox) => () => {
    if (!switchbox) return;
    switchbox.style.opacity = '';
    switchbox.style.pointerEvents = '';
};

export const cardFollowCursor3D = (card) => (e) => {
    if (!card || cardStyle.isTransitioning) return;

    const clientX = e.clientX ?? e.pageX ?? window.innerWidth / 2;
    const clientY = e.clientY ?? e.pageY ?? window.innerHeight / 2;

    const angleX = Math.max(-18, Math.min(18, (window.innerWidth / 2 - clientX) / 12));
    const angleY = Math.max(-18, Math.min(18, (window.innerHeight / 2 - clientY) / 20));
    const angleZ = cardStyle.rotation;

    card.style.transition =
        'transform 0.1s ease-out, box-shadow 0.1s ease-out, border-radius 0.5s ease, height 0.25s ease';
    card.style.transform = `rotateZ(${angleZ}deg) rotateY(${
        angleZ === 0 ? angleX : angleY * -1
    }deg) rotateX(${angleZ === 0 ? angleY * -1 : angleX * -1}deg)`;
    card.style.boxShadow = `${angleZ === 0 ? angleX * -1 : angleY}px ${
        angleZ === 0 ? angleY * -1 : angleX * -1
    }px 30px var(--card-shadow-strong, rgba(0, 0, 0, 0.4))`;

    const rect = card.getBoundingClientRect();
    const relX = Math.max(0, Math.min(100, ((clientX - rect.left) / Math.max(1, rect.width)) * 100));
    const relY = Math.max(0, Math.min(100, ((clientY - rect.top) / Math.max(1, rect.height)) * 100));
    const glareX = angleZ === -90 ? 100 - relY : relX;
    const glareY = angleZ === -90 ? relX : relY;
    const glare = card.querySelector('.card-glare');
    updateGlare(glare, glareX, glareY, true);
};

const cardFollowOrientation3D = (card) => (e) => {
    if (!card || cardStyle.isTransitioning || e.gamma == null || e.beta == null) return;

    const angleX = Math.max(-15, Math.min(15, -e.gamma / 2.5));
    const angleY = Math.max(-15, Math.min(15, (45 - e.beta) / 2.5));
    const angleZ = cardStyle.rotation;

    card.style.transition =
        'transform 0.15s ease-out, box-shadow 0.15s ease-out, border-radius 0.5s ease';
    card.style.transform = `rotateZ(${angleZ}deg) rotateY(${angleX}deg) rotateX(${angleY * -1}deg)`;
    card.style.boxShadow = `${angleX * -1}px ${angleY * -1}px 28px var(--card-shadow-strong, rgba(0, 0, 0, 0.4))`;

    const glare = card.querySelector('.card-glare');
    updateGlare(glare, 50 - angleX * 2.5, 50 - angleY * 2.5, true);
};

const cardResetState3D = (card, switchbox) => () => {
    if (switchbox) {
        switchbox.style.opacity = '';
        switchbox.style.pointerEvents = '';
    }
    if (!card || cardStyle.isTransitioning) return;

    card.style.transition =
        'transform 0.42s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.42s ease, border-radius 0.42s ease, height 0.22s ease';
    card.style.transform = `rotateZ(${cardStyle.rotation}deg) rotateY(0deg) rotateX(0deg)`;
    card.style.boxShadow = `0px 0px 15px var(--card-shadow, rgba(0, 0, 0, 0.4))`;

    const glare = card.querySelector('.card-glare');
    updateGlare(glare, 50, 50, false);
};

export const callbacks = {
    showSwitch: null,
    hideSwitch: null,
    cardFollowCursor3D: null,
    cardFollowOrientation3D: null,
    cardResetState3D: null
};

export const SwitchListener = () => {
    const card = document.getElementById('Card');
    const switchbox = document.getElementById('switch');
    const slider = document.querySelector('.slider');
    if (!card || !switchbox || !slider) return;

    if (callbacks.showSwitch) {
        card.removeEventListener('mousemove', callbacks.showSwitch, false);
        card.removeEventListener('mouseleave', callbacks.hideSwitch, false);
    }

    callbacks.showSwitch = showSwitch(switchbox, slider);
    callbacks.hideSwitch = hideSwitch(switchbox);

    card.addEventListener('mousemove', callbacks.showSwitch, false);
    card.addEventListener('mouseleave', callbacks.hideSwitch, false);
};

export const Card3D = () => {
    const card = document.getElementById('Card');
    const switchbox = document.getElementById('switch');
    if (!card) return;

    if (callbacks.cardFollowCursor3D) {
        card.removeEventListener('mousemove', callbacks.cardFollowCursor3D, false);
        card.removeEventListener('mouseleave', callbacks.cardResetState3D, false);
    }
    if (callbacks.cardFollowOrientation3D) {
        window.removeEventListener('deviceorientation', callbacks.cardFollowOrientation3D, false);
    }

    callbacks.cardFollowCursor3D = cardFollowCursor3D(card);
    callbacks.cardFollowOrientation3D = cardFollowOrientation3D(card);
    callbacks.cardResetState3D = cardResetState3D(card, switchbox);

    card.addEventListener('mousemove', callbacks.cardFollowCursor3D, false);
    card.addEventListener('mouseleave', callbacks.cardResetState3D, false);
    window.addEventListener('deviceorientation', callbacks.cardFollowOrientation3D, false);

    cardStyle.card3D = true;
};

export const DisableCard3D = () => {
    const card = document.getElementById('Card');
    const switchbox = document.getElementById('switch');
    if (!card) return;

    if (callbacks.cardFollowCursor3D) {
        card.removeEventListener('mousemove', callbacks.cardFollowCursor3D, false);
        card.removeEventListener('mouseleave', callbacks.cardResetState3D, false);
    }
    if (callbacks.cardFollowOrientation3D) {
        window.removeEventListener('deviceorientation', callbacks.cardFollowOrientation3D, false);
    }

    if (callbacks.cardResetState3D) {
        callbacks.cardResetState3D();
    } else {
        cardResetState3D(card, switchbox)();
    }

    cardStyle.card3D = false;
};

export const setCardBaseRotation = (angleZ, immediate = false) => {
    const card = document.getElementById('Card');
    const prevRotation = cardStyle.rotation;
    cardStyle.rotation = angleZ;
    if (!card) return;

    const glare = card.querySelector('.card-glare');
    updateGlare(glare, 50, 50, false);

    if (immediate) {
        card.style.transition = 'none';
        card.style.transform = `rotateZ(${angleZ}deg) rotateY(0deg) rotateX(0deg)`;
        card.style.boxShadow = `0px 0px 15px var(--card-shadow, rgba(0, 0, 0, 0.4))`;
        return;
    }

    if (prevRotation !== angleZ) {
        cardStyle.isTransitioning = true;
        card.style.transition =
            'transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.55s ease, border-radius 0.55s ease, height 0.22s ease';
        card.style.transform = `rotateZ(${angleZ}deg) rotateY(0deg) rotateX(0deg)`;
        card.style.boxShadow = `0px 0px 15px var(--card-shadow, rgba(0, 0, 0, 0.4))`;

        setTimeout(() => {
            cardStyle.isTransitioning = false;
        }, 560);
    }
};
