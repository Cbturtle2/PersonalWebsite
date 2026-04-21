import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import CharlesHeadshot from './assets/CharlesHeadshot.jpg';
import PretextCanvas from './components/PretextCanvas';
import Social from './components/Social';

// Helper: returns the inline style for a staggered spring entrance
const spring = (delayMs: number): React.CSSProperties => ({
    animationDelay: `${delayMs}ms`,
});

const Homepage = () => {
    // Load JotForm contact embed dynamically
    useEffect(() => {
        const container = document.getElementById('jotform-embed-container');
        if (!container || container.querySelector('script')) return;
        const script = document.createElement('script');
        script.src = 'https://form.jotform.com/jsform/261107520824045';
        script.type = 'text/javascript';
        script.async = true;
        container.appendChild(script);
    }, []);

    return (
        <div className="flex flex-col flex-1">
            {/* ── Hero ─────────────────────────────────────────── */}
            <section className="relative w-full flex items-center min-h-[88vh] overflow-hidden">
                {/* Animated ticker background — pretext measures loop height */}
                <PretextCanvas />

                <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
                    <div className="flex flex-col-reverse sm:flex-row items-center gap-10 sm:gap-16 w-full py-16">

                        {/* Left: text — each element springs in with a stagger */}
                        <div className="flex-1 flex flex-col gap-5">
                            <p
                                className="section-label spring-in"
                                style={spring(60)}
                            >
                                Hello, I'm
                            </p>

                            <h1
                                className="text-5xl sm:text-6xl font-black tracking-tight gradient-text leading-none spring-in"
                                style={spring(140)}
                            >
                                Charles Beam
                            </h1>

                            <p
                                className="text-xl sm:text-2xl text-slate-300 font-light leading-snug spring-in"
                                style={spring(220)}
                            >
                                Software Engineer. Data Scientist. Founder. Cat
                                Dad.
                            </p>

                            <p
                                className="text-slate-400 text-sm leading-relaxed max-w-md spring-in"
                                style={spring(300)}
                            >
                                CS graduate from LSU building AI-powered tools
                                for the future. Currently founding{' '}
                                <span className="text-slate-200">AcornBids</span>{' '}
                                to disrupt how contractors discover federal
                                opportunities.
                            </p>

                            <div
                                className="flex flex-col gap-3 mt-1 spring-in"
                                style={spring(380)}
                            >
                                <Social
                                    type="github"
                                    text="@Cbturtle2"
                                    link="https://github.com/Cbturtle2"
                                />
                                <Social
                                    type="linkedin"
                                    text="charles-beam-183913220"
                                    link="https://www.linkedin.com/in/charles-beam-183913220/"
                                />
                                <Social
                                    type="email"
                                    text="charleslbeam@gmail.com"
                                    link="mailto:charleslbeam@gmail.com"
                                />
                            </div>

                            <div
                                className="flex flex-wrap gap-3 mt-2 spring-in"
                                style={spring(440)}
                            >
                                <Link
                                    to="/experience"
                                    className="px-5 py-2.5 rounded-lg text-sm font-medium text-white transition-colors"
                                    style={{ backgroundColor: '#7c3aed' }}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.backgroundColor =
                                            '#6d28d9')
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.backgroundColor =
                                            '#7c3aed')
                                    }
                                >
                                    View Experience
                                </Link>
                                <Link
                                    to="/blog"
                                    className="px-5 py-2.5 rounded-lg border text-slate-300 text-sm font-medium transition-colors hover:border-white/30 hover:text-white"
                                    style={{
                                        borderColor: 'rgba(255,255,255,0.14)',
                                    }}
                                >
                                    Read Blog
                                </Link>
                            </div>
                        </div>

                        {/* Right: headshot springs in from the right */}
                        <div
                            className="flex-shrink-0 spring-in"
                            style={spring(180)}
                        >
                            <div className="relative">
                                <div
                                    className="absolute inset-0 rounded-3xl blur-2xl"
                                    style={{
                                        background:
                                            'linear-gradient(135deg, rgba(167,139,250,0.2), rgba(34,211,238,0.2))',
                                        transform: 'scale(1.1)',
                                    }}
                                />
                                <img
                                    src={CharlesHeadshot}
                                    className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-3xl object-cover object-top scale-x-[-1]"
                                    style={{
                                        boxShadow:
                                            '0 0 0 1px rgba(255,255,255,0.08)',
                                    }}
                                    alt="Charles Beam"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Divider ──────────────────────────────────────── */}
            <div className="max-w-5xl mx-auto px-6 w-full">
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }} />
            </div>

            {/* ── About ────────────────────────────────────────── */}
            <section className="max-w-5xl mx-auto px-6 py-16 w-full">
                <p className="section-label mb-6">About</p>
                <div className="grid sm:grid-cols-2 gap-8">
                    <p className="text-slate-300 leading-relaxed text-sm">
                        I'm a Computer Science graduate from Louisiana State
                        University (Class of 2025). I founded AcornBids, a B2B
                        platform disrupting government procurement with
                        AI-powered federal contract discovery — competing
                        directly with incumbents like Deltek GovWin IQ.
                    </p>
                    <p className="text-slate-300 leading-relaxed text-sm">
                        Previously, I worked on AI research including sepsis
                        case adjudication with Our Lady of the Lake Hospital and
                        Cytovale, and built production software at Bryx, BASF,
                        and Sigma Engineers. I love building things that have
                        real impact.
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-8">
                    {[
                        'React',
                        'TypeScript',
                        'Python',
                        'LLMs / RAG',
                        'Data Engineering',
                        'C++',
                    ].map((skill) => (
                        <span key={skill} className="tag">
                            {skill}
                        </span>
                    ))}
                </div>
            </section>

            {/* ── Quick links ───────────────────────────────────── */}
            <section className="max-w-5xl mx-auto px-6 pb-16 w-full">
                <div className="grid sm:grid-cols-3 gap-4">
                    <Link
                        to="/experience"
                        className="card p-5 group flex flex-col gap-2"
                    >
                        <span className="text-xs text-slate-500 uppercase tracking-widest">
                            Work
                        </span>
                        <span className="font-medium text-slate-200 group-hover:text-white transition-colors">
                            Experience →
                        </span>
                        <span className="text-xs text-slate-500">
                            8 roles across AI, data engineering & SaaS
                        </span>
                    </Link>
                    <Link
                        to="/blog"
                        className="card p-5 group flex flex-col gap-2"
                    >
                        <span className="text-xs text-slate-500 uppercase tracking-widest">
                            Writing
                        </span>
                        <span className="font-medium text-slate-200 group-hover:text-white transition-colors">
                            Blog →
                        </span>
                        <span className="text-xs text-slate-500">
                            Thoughts on AI, software & startups
                        </span>
                    </Link>
                    <Link
                        to="/news"
                        className="card p-5 group flex flex-col gap-2"
                    >
                        <span className="text-xs text-slate-500 uppercase tracking-widest">
                            Press
                        </span>
                        <span className="font-medium text-slate-200 group-hover:text-white transition-colors">
                            In the News →
                        </span>
                        <span className="text-xs text-slate-500">
                            Talks, press & highlights
                        </span>
                    </Link>
                </div>
            </section>

            {/* ── Contact (JotForm) — below the fold ────────────── */}
            <section
                className="border-t w-full"
                style={{ borderColor: 'rgba(255,255,255,0.07)' }}
            >
                <div className="max-w-5xl mx-auto px-6 py-16">
                    <p className="section-label mb-3">Contact</p>
                    <p className="text-slate-400 text-sm mb-8">
                        Send me a message and I'll get back to you.
                    </p>
                    <div id="jotform-embed-container" />
                </div>
            </section>
        </div>
    );
};

export default Homepage;
