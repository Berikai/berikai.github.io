import React, { useState, useEffect } from 'preact/compat';

export default function Footer() {
    const [count, setCount] = useState(0);
    const handleClick = () => setCount(c => c + 1);

    useEffect(() => {
        if (count === 15) {
            alert('You really love hearts, don\'t you? ❤️');
        } else if (count === 40) {
            window.open('https://api.berikai.dev', '_blank');
        }
    }, [count]);

    return (
        <footer className="App-footer">
            <p className="p-footer">
                Made with{' '}
                <button
                    type="button"
                    onClick={handleClick}
                    aria-label="Heart"
                    style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: 0 }}
                >
                    <heart>❤️</heart>
                </button>{' '}
                by Berikai
            </p>
        </footer>
    );
}
