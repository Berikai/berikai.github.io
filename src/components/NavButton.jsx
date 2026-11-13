import React from 'preact/compat';

export default function NavButton({
    id = null,
    text,
    rotation,
    isActive = false,
    isRotatedAbout = false,
    action = null,
    href = null
}) {
    const effectiveRotation =
        rotation === 'rl' ? 'rotate-clockwise' : 'rotate-counterclockwise';

    const handleClick = (e) => {
        if (action) {
            e.preventDefault();
            action(e);
        }
    };

    return (
        <a
            {...(id ? { id } : {})}
            className={`nav-button ${isActive ? 'nav-button-active' : ''}`}
            onClick={action ? handleClick : undefined}
            {...(href ? { href, target: '_blank', rel: 'noreferrer' } : { role: 'button', tabIndex: 0 })}
            onKeyDown={
                action
                    ? (e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              action(e);
                          }
                      }
                    : undefined
            }
        >
            <span className={effectiveRotation}>{text}</span>
        </a>
    );
}
