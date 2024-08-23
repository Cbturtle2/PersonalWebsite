interface ExperienceProps extends React.HTMLAttributes<HTMLButtonElement> {
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
        <div className="flex gap-3 ml-3 w-full mb-8">
            <img src={image} className="rounded-lg w-24 h-24" />
            <div className="flex flex-col items-start w-full">
                <div className="flex justify-between w-full gap-3">
                    <h3 className="font-bold w-1/3 text-center">{title}</h3>
                    <h2 className="font-bold">|</h2>
                    <h4 className="font-bold w-1/3 text-center">{jobTitle}</h4>
                    <h2 className="font-bold">|</h2>
                    <h4 className="font-bold 1-1/3 text-center">{dates}</h4>
                </div>
                {Array.isArray(description) ? (
                    description.map((line) => (
                        <p className="mt-4 sm:text-left text-center w-full">
                            {line}
                        </p>
                    ))
                ) : (
                    <p className="mt-4 sm:text-left text-center w-full">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Experience;
