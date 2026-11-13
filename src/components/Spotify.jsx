import React, { useState, useEffect, useRef } from 'preact/compat';
import { useAppState } from '../scripts/navigationStore';

export default function Spotify() {
    const { activePage } = useAppState();
    const isAbout = activePage === 'about';

    const [currentSong, setCurrentSong] = useState(null);
    const [progressMs, setProgressMs] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [panelOpen, setPanelOpen] = useState(false);

    const progressTimerRef = useRef(null);
    const pollTimerRef = useRef(null);

    const clearProgressTimer = () => {
        if (progressTimerRef.current) {
            clearInterval(progressTimerRef.current);
            progressTimerRef.current = null;
        }
    };

    const fetchCurrentSong = () => {
        fetch('https://api.berikai.dev/spotify/current')
            .then((res) => res.json())
            .then((data) => {
                if (!data || data.error || !data.item) {
                    if (
                        data?.error &&
                        data.error !== 'Not authenticated' &&
                        data.error !== 'No track playing'
                    ) {
                        console.error('Spotify API Error: ' + data.error);
                    }
                    clearProgressTimer();
                    setIsPlaying(false);
                    setPanelOpen(false);
                    return;
                }

                clearProgressTimer();
                setCurrentSong(data);
                setIsPlaying(true);
                setProgressMs(data.progress_ms || 0);

                const duration = data.item?.duration_ms || 0;
                progressTimerRef.current = setInterval(() => {
                    setProgressMs((prev) => {
                        const next = prev + 1000;
                        if (duration > 0 && next >= duration) {
                            clearProgressTimer();
                            fetchCurrentSong();
                            return duration;
                        }
                        return next;
                    });
                }, 1000);
            })
            .catch(() => {
                clearProgressTimer();
                setIsPlaying(false);
            });
    };

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            fetchCurrentSong();
            pollTimerRef.current = setInterval(fetchCurrentSong, 20000);
        }, 1450);

        return () => {
            clearTimeout(startTimeout);
            clearProgressTimer();
            if (pollTimerRef.current) clearInterval(pollTimerRef.current);
        };
    }, []);

    const durationMs = currentSong?.item?.duration_ms || 1;
    const progressPercent = Math.min(100, Math.max(0, (progressMs / durationMs) * 100));
    const trackUrl = currentSong?.item?.external_urls?.spotify;
    const albumArt =
        currentSong?.item?.album?.images?.[2]?.url ||
        currentSong?.item?.album?.images?.[0]?.url;

    const artistText = currentSong?.item?.artists
        ? currentSong.item.artists.length < 4
            ? currentSong.item.artists.map((a) => a.name).join(', ')
            : currentSong.item.artists[0].name
        : '';

    const formatTime = (ms) => {
        if (!ms || ms < 0) return '0:00';
        const mins = Math.floor(ms / 60000);
        const secs = Math.floor((ms % 60000) / 1000)
            .toFixed(0)
            .padStart(2, '0');
        return `${mins}:${secs}`;
    };

    return (
        <div
            className={`spotify-container ${isAbout ? 'about-open' : ''}`}
            style={{ opacity: isPlaying ? 1 : 0, pointerEvents: isPlaying ? 'all' : 'none' }}
            onMouseLeave={() => setPanelOpen(false)}
        >
            <div
                className={`spotify-panel ${isAbout ? 'about-open' : ''}`}
                style={{
                    opacity: panelOpen && isPlaying ? 1 : 0,
                    pointerEvents: panelOpen && isPlaying ? 'all' : 'none'
                }}
            >
                <a
                    className="spotify-panel-content"
                    href={panelOpen && trackUrl ? trackUrl : undefined}
                    target="_blank"
                    rel="noreferrer"
                >
                    {albumArt && (
                        <img
                            className="spotify-artwork"
                            src={albumArt}
                            width="33"
                            height="33"
                            alt="Album artwork"
                        />
                    )}
                    <div className="spotify-info">
                        <div className="text-spotify spotify-top-row">
                            <span className="spotify-listening-label">
                                <span className="spotify-eq" aria-hidden="true">
                                    <i />
                                    <i />
                                    <i />
                                </span>
                                I'm currently listening
                            </span>
                            <span>
                                {formatTime(progressMs)} / {formatTime(durationMs)}
                            </span>
                        </div>
                        <div className="text-spotify spotify-track-name">
                            <b>
                                {artistText} - {currentSong?.item?.name}
                            </b>
                        </div>
                        <div className="spotify-progress-bar">
                            <div
                                className="spotify-progress-fill"
                                style={{ width: `${progressPercent}%` }}
                            />
                        </div>
                    </div>
                </a>
            </div>
            <div
                className={`spotify ${isAbout ? 'about-open' : ''}`}
                style={{
                    opacity: isPlaying ? 1 : 0,
                    pointerEvents: isPlaying ? 'all' : 'none'
                }}
                onMouseMove={() => setPanelOpen(true)}
                onClick={(e) => {
                    if (!panelOpen) {
                        e.preventDefault();
                        setPanelOpen(true);
                    }
                }}
            >
                <a
                    href={panelOpen && trackUrl ? trackUrl : undefined}
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        id="spotify-img"
                        className={isAbout ? 'about-open' : ''}
                        src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg"
                        width="24"
                        height="24"
                        alt="Spotify"
                    />
                </a>
            </div>
        </div>
    );
}
