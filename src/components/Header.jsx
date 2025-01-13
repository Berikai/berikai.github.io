import React from 'preact/compat';

export default function Header() {
    return (
        <header className="App-header">
            <p><a>
            <img
                className="pp_logo" 
                src="https://avatars.githubusercontent.com/u/18515671?v=4" 
                alt="Berikai" />
            </a></p>
            <div className="username">Berikai<div className="aka">also known as Verdant</div></div>
        </header>
    )
}