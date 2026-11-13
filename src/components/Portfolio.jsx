import React, { useState, useEffect } from 'preact/compat';
import { FontAwesomeIcon } from '@aduh95/preact-fontawesome';
import {
    faArrowUpRightFromSquare,
    faChevronLeft,
    faChevronRight,
    faUpRightAndDownLeftFromCenter
} from '@fortawesome/free-solid-svg-icons';
import { PROJECTS } from '../data/projects';
import { useAppState, selectProject } from '../scripts/navigationStore';

const ITEMS_PER_PAGE = 4;

function TechIcons({ tech }) {
    return (
        <>
            {tech.map((item) =>
                item.icon ? (
                    <FontAwesomeIcon
                        key={item.name}
                        icon={item.icon}
                        style={{ color: item.color }}
                        title={item.name}
                    />
                ) : (
                    <img
                        key={item.name}
                        src={item.svgUrl}
                        width={12}
                        height={12}
                        alt={item.name}
                        title={item.name}
                        className={item.invertOnDark ? 'invert-on-dark' : ''}
                        style={{ opacity: 0.85 }}
                    />
                )
            )}
        </>
    );
}

export default function Portfolio() {
    const { activePage, selectedProjectId } = useAppState();
    const isPortfolio = activePage === 'portfolio';

    const [page, setPage] = useState(0);
    const [activeGalleryIdx, setActiveGalleryIdx] = useState(0);
    const [confirmingProjectId, setConfirmingProjectId] = useState(null);
    const [animKey, setAnimKey] = useState(0);

    const totalPages = Math.ceil(PROJECTS.length / ITEMS_PER_PAGE);

    // If a project is selected externally (e.g., via URL hash or Cmd+K), jump to its page
    useEffect(() => {
        setActiveGalleryIdx(0);
        setConfirmingProjectId(null);
        if (selectedProjectId) {
            const idx = PROJECTS.findIndex((p) => p.id === selectedProjectId);
            if (idx !== -1) {
                const targetPage = Math.floor(idx / ITEMS_PER_PAGE);
                if (targetPage !== page) {
                    setPage(targetPage);
                }
            }
        }
    }, [selectedProjectId]);

    useEffect(() => {
        if (isPortfolio) {
            setAnimKey((k) => k + 1);
        }
    }, [isPortfolio, page]);

    useEffect(() => {
        if (!isPortfolio) return;

        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && selectedProjectId) {
                e.preventDefault();
                selectProject(null);
            } else if (e.key === 'ArrowRight' && !selectedProjectId) {
                e.preventDefault();
                setPage((p) => (p + 1) % totalPages);
            } else if (e.key === 'ArrowLeft' && !selectedProjectId) {
                e.preventDefault();
                setPage((p) => (p - 1 + totalPages) % totalPages);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isPortfolio, selectedProjectId, totalPages]);

    const pageProjects = PROJECTS.slice(
        page * ITEMS_PER_PAGE,
        page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );

    const hasExpandedOnPage = pageProjects.some((p) => p.id === selectedProjectId);

    const handleCardClick = (projectId) => {
        if (selectedProjectId === projectId) {
            selectProject(null);
        } else {
            selectProject(projectId);
        }
    };

    const handlePageChange = (nextPage) => {
        if (selectedProjectId) {
            selectProject(null);
        }
        setConfirmingProjectId(null);
        setPage(nextPage);
    };

    const handleQuickLaunch = (e, project) => {
        e.stopPropagation();
        if (project.confirmMessage) {
            e.preventDefault();
            selectProject(project.id);
            setConfirmingProjectId(project.id);
        }
    };

    return (
        <div className={`App-portfolio ${isPortfolio ? 'portfolio-open' : ''}`}>
            <div className="portfolio-list-view" key={`page-${animKey}`}>
                <p className="title-about">Portfolio</p>
                <p className="text-about">Here, you can find some of my projects</p>

                <div className={`portfolio ${hasExpandedOnPage ? 'has-expanded' : ''}`}>
                    {pageProjects.map((project, index) => {
                        const isExpanded = selectedProjectId === project.id;
                        const isCollapsed = hasExpandedOnPage && !isExpanded;
                        const isConfirming = confirmingProjectId === project.id;

                        return (
                            <div
                                key={project.id}
                                className={`portfolio-element portfolio-stagger-item ${
                                    isExpanded ? 'expanded' : ''
                                } ${isCollapsed ? 'collapsed' : ''}`}
                                style={{ '--stagger-idx': index }}
                                onClick={() => handleCardClick(project.id)}
                                role="button"
                                tabIndex={0}
                                aria-expanded={isExpanded}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        handleCardClick(project.id);
                                    }
                                }}
                            >
                                <div className="portfolio-element-inner portfolio-layer">
                                    <img
                                        className="portfolio-img"
                                        width={86}
                                        height={86}
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                    />
                                    <div className="portfolio-element-content">
                                        <div className="portfolio-element-header">
                                            <div className="portfolio-element-title">
                                                {project.title}
                                            </div>
                                            <a
                                                className="portfolio-quick-link"
                                                href={project.primaryUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                title={`Open ${project.title}`}
                                                onClick={(e) => handleQuickLaunch(e, project)}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faArrowUpRightFromSquare}
                                                    size="2xs"
                                                />
                                            </a>
                                        </div>
                                        <div className="portfolio-element-info">
                                            {project.shortInfo}
                                        </div>
                                        <div className="portfolio-element-info framework">
                                            <span className="portfolio-expand-cue">
                                                <FontAwesomeIcon
                                                    icon={faUpRightAndDownLeftFromCenter}
                                                    size="2xs"
                                                />
                                                <span>Expand</span>
                                            </span>
                                            <div className="portfolio-framework-icons">
                                                <div className="portfolio-element-info">
                                                    Built with:
                                                </div>
                                                <TechIcons tech={project.tech} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="portfolio-element-collapsed-bar portfolio-layer">
                                    <div className="collapsed-left">
                                        <img
                                            className="collapsed-thumb"
                                            src={project.image}
                                            alt={project.title}
                                            width={20}
                                            height={20}
                                        />
                                        <span className="collapsed-title">{project.title}</span>
                                    </div>
                                    <div className="collapsed-right">
                                        <TechIcons tech={project.tech} />
                                    </div>
                                </div>

                                <div className="portfolio-element-expanded portfolio-layer">
                                    {(() => {
                                        const hasCustomHero = Boolean(
                                            project.heroGallery?.length || project.heroImage
                                        );
                                        const heroImages = project.heroGallery?.length
                                            ? project.heroGallery
                                            : project.heroImage
                                              ? [project.heroImage]
                                              : project.gallery?.length
                                                ? project.gallery
                                                : [project.image];
                                        const activeHeroSrc =
                                            heroImages[activeGalleryIdx] || heroImages[0];

                                        return (
                                            <div className="expanded-hero" title="Click to collapse">
                                                {!hasCustomHero && (
                                                    <img
                                                        className="expanded-hero-backdrop"
                                                        src={activeHeroSrc}
                                                        alt=""
                                                        aria-hidden="true"
                                                    />
                                                )}
                                                <img
                                                    className={`expanded-hero-img ${
                                                        hasCustomHero
                                                            ? 'is-fullbleed'
                                                            : 'is-contained'
                                                    }`}
                                                    src={activeHeroSrc}
                                                    alt={project.title}
                                                />
                                                {heroImages.length > 1 && (
                                                    <div
                                                        className="portfolio-gallery-switcher"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        {heroImages.map((_, idx) => (
                                                            <button
                                                                key={idx}
                                                                type="button"
                                                                className={`gallery-dot ${
                                                                    activeGalleryIdx === idx
                                                                        ? 'active'
                                                                        : ''
                                                                }`}
                                                                onClick={() =>
                                                                    setActiveGalleryIdx(idx)
                                                                }
                                                                aria-label={`Preview ${idx + 1}`}
                                                            >
                                                                {idx + 1}
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })()}

                                    <div className="expanded-body">
                                        <div className="expanded-header-row">
                                            <div className="expanded-title">{project.title}</div>
                                            <span
                                                className={`portfolio-status-pill status-${project.status
                                                    .toLowerCase()
                                                    .replace(/\s+/g, '-')}`}
                                            >
                                                {project.status}
                                            </span>
                                        </div>

                                        {isConfirming && project.confirmMessage ? (
                                            <div
                                                className="expanded-confirm-box"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <p className="expanded-confirm-text">
                                                    {project.confirmMessage}
                                                </p>
                                                <div className="expanded-confirm-actions">
                                                    <a
                                                        className="expanded-cta-btn primary"
                                                        href={project.primaryUrl}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        onClick={() => setConfirmingProjectId(null)}
                                                    >
                                                        <span>Continue</span>
                                                        <FontAwesomeIcon
                                                            icon={faArrowUpRightFromSquare}
                                                            size="2xs"
                                                        />
                                                    </a>
                                                    <button
                                                        type="button"
                                                        className="expanded-cta-btn secondary"
                                                        onClick={() => setConfirmingProjectId(null)}
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        ) : (
                                            <>
                                                <p className="expanded-desc">
                                                    {project.description}
                                                </p>
                                                <div className="expanded-footer-row">
                                                    <div className="portfolio-framework-icons">
                                                        <span className="built-with-label">
                                                            Built with:
                                                        </span>
                                                        <TechIcons tech={project.tech} />
                                                    </div>
                                                    <div
                                                        className="expanded-actions"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        {project.confirmMessage ? (
                                                            <button
                                                                type="button"
                                                                className="expanded-cta-btn primary"
                                                                onClick={() =>
                                                                    setConfirmingProjectId(
                                                                        project.id
                                                                    )
                                                                }
                                                            >
                                                                <span>{project.primaryLabel}</span>
                                                                <FontAwesomeIcon
                                                                    icon={faArrowUpRightFromSquare}
                                                                    size="2xs"
                                                                />
                                                            </button>
                                                        ) : (
                                                            <a
                                                                className="expanded-cta-btn primary"
                                                                href={project.primaryUrl}
                                                                target="_blank"
                                                                rel="noreferrer"
                                                            >
                                                                <span>{project.primaryLabel}</span>
                                                                <FontAwesomeIcon
                                                                    icon={faArrowUpRightFromSquare}
                                                                    size="2xs"
                                                                />
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="portfolio-bottom-bar">
                    <div className="portfolio-pagination">
                        <button
                            type="button"
                            className="portfolio-page-arrow"
                            onClick={() =>
                                handlePageChange((page - 1 + totalPages) % totalPages)
                            }
                            aria-label="Previous page"
                        >
                            <FontAwesomeIcon icon={faChevronLeft} size="2xs" />
                        </button>
                        {Array.from({ length: totalPages }).map((_, idx) => (
                            <button
                                key={idx}
                                type="button"
                                className={`portfolio-page-pill ${page === idx ? 'active' : ''}`}
                                onClick={() => handlePageChange(idx)}
                            >
                                {idx + 1}
                            </button>
                        ))}
                        <button
                            type="button"
                            className="portfolio-page-arrow"
                            onClick={() => handlePageChange((page + 1) % totalPages)}
                            aria-label="Next page"
                        >
                            <FontAwesomeIcon icon={faChevronRight} size="2xs" />
                        </button>
                    </div>
                    <div className="text-about portfolio-github-note">
                        more on{' '}
                        <a href="https://github.com/berikai" target="_blank" rel="noreferrer">
                            Github
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
