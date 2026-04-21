interface ProjectProps {
    title: string;
    description: string | string[];
    document?: string;
    video?: string;
    link?: string;
}

const Project = ({ title, description, document, video, link }: ProjectProps) => {
    return (
        <div className="card p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="font-semibold text-slate-100 leading-snug">
                    {title}
                </h3>
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 text-xs text-violet-400 hover:text-violet-300 border border-violet-500/30 px-2.5 py-1 rounded-full transition-colors"
                    >
                        GitHub ↗
                    </a>
                )}
            </div>

            {Array.isArray(description) ? (
                <ul className="space-y-2 mb-4">
                    {description.map((line, i) => (
                        <li
                            key={i}
                            className="text-slate-400 text-sm leading-relaxed"
                        >
                            {line}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {description}
                </p>
            )}

            {(document || video) && (
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    {document && (
                        <div className="rounded-lg overflow-hidden border border-white/8">
                            <embed
                                src={document}
                                className="w-full h-56"
                                type="application/pdf"
                            />
                        </div>
                    )}
                    {video && (
                        <div className="rounded-lg overflow-hidden border border-white/8">
                            <iframe
                                src={video}
                                className="w-full h-56"
                                frameBorder="0"
                                scrolling="no"
                                allowFullScreen
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Project;
