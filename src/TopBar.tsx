import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
    { label: 'About', to: '/' },
    { label: 'Experience', to: '/experience' },
    { label: 'Blog', to: '/blog' },
    { label: 'In the News', to: '/news' },
];

const TopBar = () => {
    const { pathname } = useLocation();
    const [open, setOpen] = useState(false);

    return (
        <header
            className="sticky top-0 z-50 border-b backdrop-blur-md"
            style={{
                borderColor: 'rgba(255,255,255,0.07)',
                backgroundColor: 'rgba(7,12,24,0.85)',
            }}
        >
            <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link to="/" className="font-bold text-lg gradient-text">
                    Charles Beam
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-7">
                    {navLinks.map(({ label, to }) => (
                        <Link
                            key={to}
                            to={to}
                            className={
                                pathname === to
                                    ? 'text-sm text-white font-medium'
                                    : 'text-sm text-slate-400 hover:text-slate-200 transition-colors'
                            }
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden text-slate-400 hover:text-white transition-colors"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle navigation"
                >
                    <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    >
                        {open ? (
                            <>
                                <path d="M17 5L5 17" />
                                <path d="M5 5l12 12" />
                            </>
                        ) : (
                            <>
                                <line x1="3" y1="7" x2="19" y2="7" />
                                <line x1="3" y1="15" x2="19" y2="15" />
                            </>
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile dropdown */}
            {open && (
                <div
                    className="md:hidden border-t px-6 py-5 flex flex-col gap-5"
                    style={{
                        borderColor: 'rgba(255,255,255,0.07)',
                        backgroundColor: '#070c18',
                    }}
                >
                    {navLinks.map(({ label, to }) => (
                        <Link
                            key={to}
                            to={to}
                            className={
                                pathname === to
                                    ? 'text-white text-sm font-medium'
                                    : 'text-slate-400 text-sm'
                            }
                            onClick={() => setOpen(false)}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
};

export default TopBar;
