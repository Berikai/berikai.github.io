import React from 'preact/compat';

export const showModal = () => {
    const modal = document.querySelector('.modal');
    if (!modal) return;
    modal.style.opacity = '1';
    modal.style.display = 'flex';
};

const hideModal = () => {
    const modal = document.querySelector('.modal');
    if (!modal) return;
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
    }, 200);
};

export default function Modal() {
    return (
        <div className="modal" onClick={() => hideModal()}>
            <div className="modal-content">
                <div className="modal-box">
                    <span>The page you are trying to view is currently in development.</span>
                    <span>Thank you for your patience.</span>
                </div>
            </div>
        </div>
    );
}
