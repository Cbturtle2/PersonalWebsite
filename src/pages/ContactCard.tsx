import { useEffect, useState } from 'react';
import CharlesHeadshot from '../assets/CharlesHeadshot.jpg';
import './ContactCard.css';

type IconName =
    | 'download'
    | 'email'
    | 'acorn'
    | 'linkedin'
    | 'share';

const iconPaths: Record<Exclude<IconName, 'acorn'>, React.ReactNode> = {
    download: (
        <>
            <path d="M12 3v12" />
            <path d="m7 10 5 5 5-5" />
            <path d="M5 21h14" />
        </>
    ),
    email: (
        <>
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
        </>
    ),
    linkedin: (
        <>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
            <path d="M2 9h4v12H2z" />
            <circle cx="4" cy="4" r="2" />
        </>
    ),
    share: (
        <>
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <path d="m8.6 10.5 6.8-4" />
            <path d="m8.6 13.5 6.8 4" />
        </>
    ),
};

const Icon = ({ name }: { name: IconName }) => name === 'acorn' ? (
    <span aria-hidden="true" className="contact-icon contact-acorn" />
) : (
    <svg
        aria-hidden="true"
        className="contact-icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
    >
        {iconPaths[name]}
    </svg>
);

const contactLinks: Array<{
    href: string;
    icon: IconName;
    label: string;
}> = [
    {
        href: 'mailto:charles@acornbids.com',
        icon: 'email',
        label: 'Email',
    },
    {
        href: 'https://www.linkedin.com/in/charles-beam-183913220/',
        icon: 'linkedin',
        label: 'LinkedIn',
    },
    {
        href: 'https://acornbids.com',
        icon: 'acorn',
        label: 'AcornBids',
    },
];

const copyText = async (value: string) => {
    if (navigator.clipboard) {
        await navigator.clipboard.writeText(value);
        return;
    }

    const textArea = document.createElement('textarea');
    textArea.value = value;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
};

const ContactCard = () => {
    const [shareLabel, setShareLabel] = useState('Share');

    useEffect(() => {
        const previousTitle = document.title;
        document.title = 'Charles Beam | Contact';

        const robots = document.createElement('meta');
        robots.name = 'robots';
        robots.content = 'noindex, nofollow';
        document.head.appendChild(robots);

        return () => {
            document.title = previousTitle;
            robots.remove();
        };
    }, []);

    const shareContact = async () => {
        const shareData = {
            title: 'Charles Beam',
            text: 'Contact Charles Beam',
            url: window.location.href,
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
                return;
            }

            await copyText(window.location.href);
            setShareLabel('Link copied');
            window.setTimeout(() => setShareLabel('Share'), 2000);
        } catch (error) {
            if (error instanceof DOMException && error.name === 'AbortError') return;
            setShareLabel('Try again');
            window.setTimeout(() => setShareLabel('Share'), 2000);
        }
    };

    return (
        <main className="contact-page">
            <div className="contact-orb contact-orb-one" />
            <div className="contact-orb contact-orb-two" />

            <section className="contact-shell" aria-labelledby="contact-name">
                <button
                    type="button"
                    className="contact-share"
                    onClick={() => void shareContact()}
                    aria-label="Share this contact card"
                >
                    <Icon name="share" />
                    <span>{shareLabel}</span>
                </button>

                <div className="contact-profile">
                    <div className="contact-photo-wrap">
                        <div className="contact-photo-glow" />
                        <img
                            className="contact-photo"
                            src={CharlesHeadshot}
                            alt="Charles Beam"
                        />
                        <span className="contact-status" aria-label="Available to connect" />
                    </div>

                    <p className="contact-eyebrow">Nice to meet you</p>
                    <h1 id="contact-name">Charles Beam</h1>
                    <p className="contact-role">Founder, AcornBids · Software Engineer</p>
                    <p className="contact-intro">
                        I build useful software at the intersection of AI, data,
                        and government contracting.
                    </p>
                </div>

                <a
                    className="contact-save"
                    href="/charles-beam.vcf"
                    download="charles-beam.vcf"
                >
                    <Icon name="download" />
                    Save contact
                </a>

                <div className="contact-links" aria-label="Contact links">
                    {contactLinks.map(({ href, icon, label }) => (
                        <a
                            className="contact-link"
                            href={href}
                            key={label}
                            target={href.startsWith('http') ? '_blank' : undefined}
                            rel={href.startsWith('http') ? 'noreferrer' : undefined}
                        >
                            <span className="contact-link-icon">
                                <Icon name={icon} />
                            </span>
                            <span className="contact-link-copy">
                                <strong>{label}</strong>
                            </span>
                            <span className="contact-arrow" aria-hidden="true">
                                ↗
                            </span>
                        </a>
                    ))}
                </div>

                <a className="contact-site" href="https://charlesbeam.com">
                    charlesbeam.com
                </a>
            </section>
        </main>
    );
};

export default ContactCard;
