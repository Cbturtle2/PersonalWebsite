interface ExperienceProps {
    image: string;
    title: string;
    jobTitle: string;
    dates: string;
    description?: string | string[];
}

const Experience = ({
    image,
    title,
    jobTitle,
    dates,
    description,
}: ExperienceProps) => {
    return (
        <div className="card p-6">
            <div className="flex gap-4">
                <img
                    src={image}
                    alt={title}
                    className="w-12 h-12 rounded-lg object-contain bg-white/5 p-1 flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1 mb-3">
                        <div>
                            <h3 className="font-semibold text-slate-100">
                                {title}
                            </h3>
                            <p className="text-sm text-violet-400 mt-0.5">
                                {jobTitle}
                            </p>
                        </div>
                        <span className="text-xs text-slate-500 whitespace-nowrap mt-1">
                            {dates}
                        </span>
                    </div>
                    {Array.isArray(description) ? (
                        <ul className="space-y-2">
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
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Experience;
