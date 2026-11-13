import React from 'preact/compat';
import { useAppState } from '../scripts/navigationStore';

export default function AboutExtra() {
    const { activePage } = useAppState();
    const isAbout = activePage === 'about';

    return (
        <div className={`App-about-extra ${isAbout ? 'about-open' : ''}`}>
            <p className="title-about">About Me</p>
            <p className="text-about">
                My name is Berkay Eren Konuk, but I usually go by the names <b>Berikai</b> or{' '}
                <b>Verdant</b> online.
            </p>
            <p className="text-about">
                I'm a big fan of open source and I love learning new things about software
                technologies. ...and "I use Arch, btw." 😄
            </p>
            <p className="text-about">
                I create dubstep and drum and bass oriented experimental music. You can check out my
                music on{' '}
                <a href="https://soundcloud.com/verdantbass" target="_blank" rel="noreferrer">
                    Soundcloud
                </a>
                .
            </p>
            <p className="text-about">
                I'm currently studying mechatronics engineering at{' '}
                <i>Izmir University of Economics</i>.
            </p>
        </div>
    );
}
