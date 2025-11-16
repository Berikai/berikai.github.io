import React from 'preact/compat';

import portfolioBTE from '../assets/img/portfolio_bte2.png';
import portfolioBTEW from '../assets/img/portfolio_btew.png';
import portfolioPixbud from '../assets/img/portfolio_pixbud.gif';
import portfolioOasis from '../assets/img/portfolio_oasis.png';
import portfolioIxt from '../assets/img/portfolio_ixt.png';
import portfolioAudiculator from '../assets/img/portfolio_audiculator.gif';

import { FontAwesomeIcon } from '@aduh95/preact-fontawesome';
import { faHtml5, faJs, faCss, faJava, faNodeJs } from '@fortawesome/free-brands-svg-icons';

export default function Portfolio() {
    return (
        <div className="App-portfolio" style={"opacity: 0;transition: transform 0.1s;"}>
            <p className="title-about">Portfolio</p>
            <p className="text-about">
                Here, you can find some of my projects
            </p>
            <div className="portfolio">
                <div className="portfolio-element">
                    <div className='portfolio-element-inner'>
                        <a className="portfolio-element-overlay" target="_blank" rel="noreferrer"
                        href="https://ixt.to"></a>
                        <img className="portfolio-img" width={88} src={portfolioIxt} alt="ixt.to"></img>
                        <div className="portfolio-element-content dark">
                            <div className="portfolio-element-title dark">ixt</div>
                            <div className="portfolio-element-info dark">Stop emailing yourself notes. A fast, simple way to share text in real-time. No login required, ever.</div>
                            <div className="portfolio-element-info framework dark">
                                <div className="portfolio-element-info">Built with:</div>
                                <FontAwesomeIcon icon={faNodeJs} style={{color: "#14c63b",}} />
                                <FontAwesomeIcon icon={faHtml5} style={{color: "#ff9200",}} />
                                <FontAwesomeIcon icon={faCss} style={{color: "#74C0FC",}} />
                                <FontAwesomeIcon icon={faJs} style={{color: "#FFD43B",}} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="portfolio-element">
                    <div className='portfolio-element-inner'>
                        <a className="portfolio-element-overlay" target="_blank" rel="noreferrer"
                        href="https://github.com/Berikai/bitwig-theme-editor"></a>
                        <img className="portfolio-img" width={88} src={portfolioBTE} alt="Bitwig Theme Editor"></img>
                        <div className="portfolio-element-content dark">
                            <div className="portfolio-element-title dark">Bitwig Theme Editor</div>
                            <div className="portfolio-element-info dark">A patcher for Bitwig Studio, customize the appearance of the most modular DAW in the world!</div>
                            <div className="portfolio-element-info framework dark">
                                <div className="portfolio-element-info">Built with:</div>
                                <FontAwesomeIcon icon={faJava} style={{color: "#ff2600",}} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="portfolio-element">
                    <div className='portfolio-element-inner'>
                        <a className="portfolio-element-overlay" target="_blank" rel="noreferrer"
                        href="https://audiculator.berikai.dev"></a>
                        <img className="portfolio-img" width={88} src={portfolioAudiculator} alt="Bitwig Theme Editor WebUI"></img>
                        <div className="portfolio-element-content dark">
                            <div className="portfolio-element-title dark">Audiculator</div>
                            <div className="portfolio-element-info dark">A web-based real-time 3D audio visualizer with rich features, powered by three.js </div>
                            <div className="portfolio-element-info framework dark">
                                <div className="portfolio-element-info">Built with:</div>
                                <img src='https://upload.wikimedia.org/wikipedia/commons/3/3f/Three.js_Icon.svg' width={12} height={12} alt='ThreeJS Logo' style={{opacity: 0.7}}/>
                                <FontAwesomeIcon icon={faJs} style={{color: "#FFD43B",}} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="portfolio-element">
                    <div className='portfolio-element-inner'>
                        <a className="portfolio-element-overlay" target="_blank" rel="noreferrer"
                        href="https://github.com/Berikai/data/tree/main/pixbud"
                        onClick={(e) => {
                            e.preventDefault();
                            if (window.confirm('This project is not finished and as of now it\'s closed source. You\'ll be redirected to a github page to download the Windows binaries of its prototype.\n\nWould you like to continue?')) {
                                window.open(e.target.href, '_blank');
                            }
                        }}></a>
                        <img className="portfolio-img" width={88} src={portfolioPixbud} alt="Pixbud"></img>
                        <div className="portfolio-element-content dark">
                            <div className="portfolio-element-title dark">Pixbud</div>
                            <div className="portfolio-element-info dark">Your desktop buddy, loves to hang around on the rooftops of your application windows</div>
                            <div className="portfolio-element-info framework dark">
                                <div className="portfolio-element-info">Built with:</div>
                                <img src='https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg' width={12} height={12} alt='.NET Logo' style={{opacity: 0.7}}/>
                                <img src='https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg' width={12} height={12} alt='WinAPI Logo' style={{opacity: 0.7}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-about" style="margin-top: -4px;">and many more, check my <a href="https://github.com/berikai" target="_blank" rel="noreferrer">Github</a>!</div>
                {/*}<div className="portfolio-element">
                    <a className="portfolio-element-overlay" target="_blank" rel="noreferrer"
                    href="https://bitwig.berikai.dev"></a>
                    <img className="portfolio-img" width={68} src="https://i.scdn.co/image/ab67616d0000b273d1f003772a6b26d57294587b"></img>
                    <div className="portfolio-element-content dark">
                        <div className="portfolio-element-title dark">Project Title</div>
                        <div className="portfolio-element-info dark">Information about the project, and it's getting longer and longer. I really mean it, though.</div>
                    </div>
                </div>{*/}
            </div>
        </div>
    )
}