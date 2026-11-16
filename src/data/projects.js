import portfolioAvionot from '../assets/img/portfolio_avionot.png';
import portfolioBTE from '../assets/img/portfolio_bte2.png';
import portfolioBTEAlt from '../assets/img/portfolio_bte.png';
import portfolioCruncher from '../assets/img/portfolio_cruncher.png';
import portfolioIxt from '../assets/img/portfolio_ixt.png';
import portfolioSyncTop from '../assets/img/portfolio_synctop.png';
import portfolioSelecc from '../assets/img/portfolio_selecc.png';
import portfolioNooto from '../assets/img/portfolio_nooto.png';
import portfolioPixbud from '../assets/img/portfolio_pixbud.gif';
import portfolioAudiculator from '../assets/img/portfolio_audiculator.gif';

import {
    faHtml5,
    faJs,
    faCss,
    faJava,
    faNodeJs,
    faSwift,
    faApple,
    faGoogleDrive,
    faWindows,
    faRust,
    faSvelte,
    faWordpress
} from '@fortawesome/free-brands-svg-icons';
import {
    faWaveSquare,
    faCode,
    faTerminal,
    faNoteSticky,
    faLink,
    faServer
} from '@fortawesome/free-solid-svg-icons';

export const PROJECTS = [
    {
        id: 'avionot',
        title: 'Avionot',
        category: 'web',
        status: 'Live',
        year: '2026',
        image: portfolioAvionot,
        gallery: [portfolioAvionot],
        shortInfo: 'SysOps at Avionot. Designed the avionot.com website and operate the IT backend of all operations.',
        description:
            'Avionot is a defence and aviation industry news platform. As SysOps, I designed the avionot.com website and operate the technical IT infrastructure and backend powering all of its operations.',
        primaryUrl: 'https://avionot.com',
        primaryLabel: 'Open Avionot',
        githubUrl: null,
        tech: [
            { name: 'WordPress', icon: faWordpress, color: '#38bdf8' },
            { name: 'CSS3', icon: faCss, color: '#74C0FC' },
            { name: 'JavaScript', icon: faJs, color: '#FFD43B' },
            { name: 'SysOps / IT', icon: faServer, color: '#10b981' }
        ]
    },
    {
        id: 'bitwig-theme-editor',
        title: 'Bitwig Theme Editor',
        category: 'audio',
        status: 'Open Source',
        year: '2024–2025',
        image: portfolioBTE,
        gallery: [portfolioBTE, portfolioBTEAlt],
        shortInfo: 'A patcher for Bitwig Studio, customize the appearance of the most modular DAW in the world!',
        description:
            'Bitwig Studio does not natively expose a full theme engine. Bitwig Theme Editor bridges that gap by patching Bitwig’s JAR bytecode directly, unlocking complete color customization across the entire digital audio workstation UI.',
        primaryUrl: 'https://github.com/Berikai/bitwig-theme-editor',
        primaryLabel: 'View on GitHub',
        githubUrl: 'https://github.com/Berikai/bitwig-theme-editor',
        tech: [
            { name: 'Java', icon: faJava, color: '#ff2600' },
            { name: 'Bytecode Patching', icon: faCode, color: '#a78bfa' }
        ]
    },
    {
        id: 'cruncher',
        title: 'Cruncher',
        category: 'audio',
        status: 'Live',
        year: '2026',
        image: portfolioCruncher,
        gallery: [portfolioCruncher],
        shortInfo: 'Detail preserving hard clipper audio plugin built in Rust for loud, punchy mixes.',
        description:
            'Cruncher is a detail-preserving hard clipper audio plugin built in Rust with nih-plug. Designed for modern bass music and mixing workflows, it pushes loudness and transient punch while keeping high-frequency detail intact.',
        primaryUrl: 'https://cruncher.verdant.tr/',
        primaryLabel: 'Get Cruncher',
        githubUrl: null,
        tech: [
            { name: 'Rust', icon: faRust, color: '#dea584' },
            { name: 'DSP / Audio', icon: faWaveSquare, color: '#38bdf8' }
        ]
    },
    {
        id: 'ixt',
        title: 'ixt',
        category: 'web',
        status: 'Live',
        year: '2025',
        image: portfolioIxt,
        gallery: [portfolioIxt],
        shortInfo: 'Stop emailing yourself notes. A fast, simple way to share text in real-time. No login required, ever.',
        description:
            'ixt.to is a zero-friction real-time text sharing web app. Built to replace emailing notes to yourself across devices, it pairs instant room sync with a minimalist, login-free interface.',
        primaryUrl: 'https://ixt.to',
        primaryLabel: 'Open ixt.to',
        githubUrl: null,
        tech: [
            { name: 'Node.js', icon: faNodeJs, color: '#14c63b' },
            { name: 'HTML5', icon: faHtml5, color: '#ff9200' },
            { name: 'CSS3', icon: faCss, color: '#74C0FC' },
            { name: 'JavaScript', icon: faJs, color: '#FFD43B' }
        ]
    },
    {
        id: 'synctop',
        title: 'SyncTop',
        category: 'native',
        status: 'Open Source',
        year: '2026',
        image: portfolioSyncTop,
        gallery: [portfolioSyncTop],
        shortInfo: 'Frictionless, mount-free selective folder synchronization to Google Drive for macOS.',
        description:
            'SyncTop is a lightweight native macOS utility that selectively syncs chosen local folders directly to Google Drive without virtual drive mounts, Finder extensions, or background bloat.',
        primaryUrl: 'https://github.com/Berikai/synctop',
        primaryLabel: 'View on GitHub',
        githubUrl: 'https://github.com/Berikai/synctop',
        tech: [
            { name: 'Swift', icon: faSwift, color: '#F05138' },
            { name: 'macOS', icon: faApple, color: '#a1a1aa' },
            { name: 'Google Drive', icon: faGoogleDrive, color: '#34A853' }
        ]
    },
    {
        id: 'selecc',
        title: 'sele.cc',
        category: 'web',
        status: 'Live',
        year: '2026',
        image: portfolioSelecc,
        gallery: [portfolioSelecc],
        shortInfo: "The link-in-bio you've always wanted.",
        description:
            'sele.cc is a sleek, customizable link-in-bio platform built for creators, developers, and artists, delivering fast, clean profile pages with zero clutter.',
        primaryUrl: 'https://sele.cc',
        primaryLabel: 'Open sele.cc',
        githubUrl: null,
        tech: [
            { name: 'HTML5', icon: faHtml5, color: '#ff9200' },
            { name: 'CSS3', icon: faCss, color: '#74C0FC' },
            { name: 'JavaScript', icon: faJs, color: '#FFD43B' },
            { name: 'Links', icon: faLink, color: '#38bdf8' }
        ]
    },
    {
        id: 'nooto',
        title: 'nooto',
        category: 'web',
        status: 'Live',
        year: '2026',
        image: portfolioNooto,
        gallery: [portfolioNooto],
        shortInfo: 'A minimal note-taking app focused on speed and distraction-free writing.',
        description:
            'nooto is a clean, minimal note-taking web app designed to get out of your way, opening straight into a crisp, focused workspace for capturing thoughts and notes instantly.',
        primaryUrl: 'https://nooto.berikai.dev',
        primaryLabel: 'Open nooto',
        githubUrl: null,
        tech: [
            { name: 'Svelte', icon: faSvelte, color: '#FF3E00' },
            { name: 'HTML5', icon: faHtml5, color: '#ff9200' },
            { name: 'CSS3', icon: faCss, color: '#74C0FC' },
            { name: 'JavaScript', icon: faJs, color: '#FFD43B' }
        ]
    },
    {
        id: 'pixbud',
        title: 'Pixbud',
        category: 'native',
        status: 'Prototype',
        year: '2025',
        image: portfolioPixbud,
        gallery: [portfolioPixbud],
        shortInfo: 'Your desktop buddy, loves to hang around on the rooftops of your application windows',
        description:
            'Pixbud is a playful Windows desktop companion that detects active application window bounds via the Win32 API and walks, sits, and hangs out right on the titlebars and rooftops of your open windows.',
        primaryUrl: 'https://github.com/Berikai/data/tree/main/pixbud',
        primaryLabel: 'Download Prototype',
        confirmMessage:
            "This project is not finished and as of now it's closed source. You'll be redirected to a GitHub page to download the Windows binaries of its prototype.",
        githubUrl: null,
        tech: [
            {
                name: 'C#',
                svgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg'
            },
            {
                name: '.NET',
                svgUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg'
            },
            { name: 'WinAPI', icon: faWindows, color: '#00a4ef' }
        ]
    },
    {
        id: 'audiculator',
        title: 'Audiculator',
        category: 'audio',
        status: 'Live',
        year: '2025',
        image: portfolioAudiculator,
        gallery: [portfolioAudiculator],
        shortInfo: 'A web-based real-time 3D audio visualizer with rich features, powered by three.js',
        description:
            'Audiculator transforms audio streams into reactive 3D geometry in the browser. Built with Three.js and the Web Audio API, it analyzes frequency spectrums and transients in real time to drive shaders, particles, and camera motion.',
        primaryUrl: 'https://audiculator.berikai.dev',
        primaryLabel: 'Launch Visualizer',
        githubUrl: 'https://github.com/Berikai/audiculator',
        tech: [
            {
                name: 'Three.js',
                svgUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Three.js_Icon.svg',
                invertOnDark: true
            },
            { name: 'JavaScript', icon: faJs, color: '#FFD43B' },
            { name: 'WebAudio', icon: faWaveSquare, color: '#38bdf8' }
        ]
    },
    {
        id: 'wr2-server-connector',
        title: 'WR2 Server Connector',
        category: 'native',
        status: 'Open Source',
        year: '2022',
        image: 'https://user-images.githubusercontent.com/18515671/160943154-ebd29b37-19ec-4687-899a-24d555c46e7b.png',
        gallery: [
            'https://user-images.githubusercontent.com/18515671/160943154-ebd29b37-19ec-4687-899a-24d555c46e7b.png'
        ],
        shortInfo: 'A simple tool to play World Racing 2 online, since the official multiplayer tool is deprecated',
        description:
            'When the official multiplayer matchmaking tool for classic racing game World Racing 2 stopped working on modern systems, WR2 Server Connector provided the community with a clean, direct-connect launcher to keep online lobbies alive.',
        primaryUrl: 'https://github.com/berikai/wr2-server-connector',
        primaryLabel: 'View on GitHub',
        githubUrl: 'https://github.com/berikai/wr2-server-connector',
        tech: [
            { name: 'Windows', icon: faWindows, color: '#00a4ef' },
            { name: 'Networking', icon: faTerminal, color: '#10b981' }
        ]
    }
];
