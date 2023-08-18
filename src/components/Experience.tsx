import { Link } from "react-router-dom";

interface ExperienceProps extends React.HTMLAttributes<HTMLButtonElement> {
    image: string;
    title: string;
    jobTitle: string;
    dates: string;
    description: string;
}

const Experience = ({ image, title, jobTitle, dates, description, ...props }: ExperienceProps) => {
    return (
        <Link to={`experience/${title.toLowerCase().replace(/\s/g, "-")}`}>
            <button className="flex gap-3 ml-3 w-full" {...props}>
                <img src={image} className="rounded-lg w-16 h-16" />
                <div className="flex flex-col items-start w-full">
                    <div className="flex justify-between w-full">
                        <h3 className="font-bold">{title}</h3>
                        <h2 className="font-bold">|</h2>
                        <h4 className="font-bold">{jobTitle}</h4>
                        <h2 className="font-bold">|</h2>
                        <h4 className="font-bold">{dates}</h4>
                    </div>
                    <p className="sm:text-left text-center w-full">{description}</p>
                </div>
            </button>
        </Link>
    );
};

export default Experience;
