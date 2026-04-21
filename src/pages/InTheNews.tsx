interface NewsItem {
    source: string;
    headline: string;
    date: string;
    description?: string;
    url?: string;
    type: 'press' | 'talk' | 'achievement' | 'video';
}

const items: NewsItem[] = [
    {
        source: 'LSU Office of Innovation',
        headline: "LSU Grad's AI Tool Streamlines Federal Contract Search",
        date: '2026-03-20',
        url: 'https://www.lsu.edu/innovation/news/2026/acornbids_bridge.php',
        type: 'press',
    },
    {
        source: 'Business Report',
        headline:
            'Is there a smarter way to bid on government contracts? This startup thinks so',
        date: '2026-03-06',
        url: 'https://www.businessreport.com/business/is-there-a-smarter-way-to-bid-on-government-contracts-this-startup-thinks-so',
        type: 'press',
    },
    {
        source: 'LSU Health — YouTube',
        headline: 'LSU Health and Science reveals groundbreaking sepsis research',
        date: '2024-09-11',
        url: 'https://www.youtube.com/watch?v=iMjok6g64Kk',
        type: 'video',
    },
    {
        source: 'Cytovale — YouTube',
        headline: 'We Build Teams That Win: Life-saving Sepsis Test',
        date: '2024-09-03',
        url: 'https://www.youtube.com/watch?v=9eHTEFJOgvs',
        type: 'video',
    },
    {
        source: 'Cytovale — YouTube',
        headline: 'We Build Teams That Win: Revolutionizing Patient Care',
        date: '2024-08-30',
        url: 'https://www.youtube.com/watch?v=BxnfrAE60_M',
        type: 'video',
    },
    {
        source: 'AI Perspectives — YouTube',
        headline: 'AI in our daily lives: To smile or shy away from?',
        date: '2024-11-14',
        url: 'https://www.youtube.com/watch?v=svbOVgYMCkg',
        type: 'video',
    },
    {
        source: 'LSU Board of Supervisors',
        headline: 'LSU Board of Supervisors Meeting — Research Presentation',
        date: '2024-06-28',
        url: 'https://www.youtube.com/live/2chtkz6qYtc?si=KGxWcYNfLVXYzPBF&t=6999',
        type: 'talk',
    },
    {
        source: 'KALB News',
        headline: 'Students earn NASA permission for LaACES payload launch',
        date: '2020-07-17',
        url: 'https://www.kalb.com/2020/07/17/student-earn-nasa-permission-for-laaces-payload-launch/',
        type: 'achievement',
    },
];

// Sort by date descending
const sorted = [...items].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

const typeStyles: Record<
    NewsItem['type'],
    { label: string; classes: string; icon: string }
> = {
    press: {
        label: 'Press',
        classes: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
        icon: '📰',
    },
    talk: {
        label: 'Talk',
        classes: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
        icon: '🎙️',
    },
    achievement: {
        label: 'Achievement',
        classes: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
        icon: '🚀',
    },
    video: {
        label: 'Video',
        classes: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
        icon: '▶',
    },
};

const InTheNews = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-16">
            <p className="section-label mb-3">Coverage</p>
            <h1 className="text-3xl font-bold text-slate-100 mb-2">
                In the News
            </h1>
            <p className="text-slate-400 mb-12">
                Press, video appearances, and highlights.
            </p>

            <div className="relative">
                {/* Timeline spine */}
                <div
                    className="absolute left-4 top-2 bottom-2 w-px hidden sm:block"
                    style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
                />

                <div className="flex flex-col gap-6">
                    {sorted.map((item, i) => {
                        const style = typeStyles[item.type];
                        return (
                            <div key={i} className="sm:pl-12 relative">
                                {/* Timeline dot */}
                                <div
                                    className="hidden sm:block absolute w-2.5 h-2.5 rounded-full"
                                    style={{
                                        left: '13px',
                                        top: '1.6rem',
                                        backgroundColor: '#8b5cf6',
                                        boxShadow: '0 0 0 4px #070c18',
                                    }}
                                />

                                <div className="card p-5">
                                    <div className="flex flex-wrap items-center gap-3 mb-2">
                                        <span
                                            className={`text-xs px-2 py-0.5 rounded-full border font-medium ${style.classes}`}
                                        >
                                            {style.label}
                                        </span>
                                        <span className="text-xs text-slate-500">
                                            {new Date(item.date).toLocaleDateString(
                                                'en-US',
                                                {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric',
                                                },
                                            )}
                                        </span>
                                        <span className="text-xs text-slate-600 uppercase tracking-wider font-medium">
                                            {item.source}
                                        </span>
                                    </div>

                                    <p className="text-slate-200 font-medium text-sm leading-snug mb-3">
                                        {item.headline}
                                    </p>

                                    {item.description && (
                                        <p className="text-slate-400 text-sm leading-relaxed mb-3">
                                            {item.description}
                                        </p>
                                    )}

                                    {item.url && (
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs text-violet-400 hover:text-violet-300 transition-colors"
                                        >
                                            {item.type === 'video'
                                                ? 'Watch ↗'
                                                : 'Read ↗'}
                                        </a>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default InTheNews;
