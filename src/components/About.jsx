import React from 'preact/compat';

export default function About() {
    return (
        <div className="App-about">
            <p className="text-info">I love software tech and bass music</p>
            <ul className="ul-padding">
                <li className="li-element">🇹🇷 &nbsp; İzmir, Turkey </li>
                <li className="li-element">🖥️ &nbsp; Software Enthusiast</li>
                <li className="li-element">🎵 &nbsp; Dubstep, Drum 'n Bass, Experimental</li>
            </ul>
            <p className="socials" align="left">
                <a className="padding-inline" href="https://soundcloud.com/verdantbass" target="_blank" rel="noreferrer"><img src="https://www.svgrepo.com/show/35013/soundcloud.svg" width="24" height="24" alt="Soundcloud"/></a>
                <a className="padding-inline" href="https://discordapp.com/users/385498463745343490" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/discord.svg" width="24" height="24" alt="Discord"/></a>
                <a className="padding-inline" href="https://www.github.com/Berikai" target="_blank" rel="noreferrer"><img class="dark" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg" width="24" height="24" alt="Github"/></a>
                <a className="padding-inline" href="http://www.instagram.com/verdantbass" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/instagram.svg" width="24" height="24" alt="Instagram"/></a>
                <a className="padding-inline" href="https://www.twitter.com/verdantbass" target="_blank" rel="noreferrer"><img class="dark" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/twitter.svg" width="24" height="24" alt="Twitter"/></a>
            </p>
        </div>
    )
}