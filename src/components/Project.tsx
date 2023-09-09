interface ProjectProps extends React.HTMLAttributes<HTMLButtonElement> {
    title: string;
    description: string;
    document?: string;
    video?: string;
    link?: string;
}

const Project = ({ title, description, document, video, link }: ProjectProps) => {
    return (
        <div className="flex flex-col items-start w-full mb-5 ml-3">
            <div>
                <div className="flex gap-16 w-full">
                    <h3 className="font-bold text-center text-teal-400">{title}</h3>
                    {link && (
                        <a href={link} target="_blank" className="text-blue-200">
                            GitHub Repo
                        </a>
                    )}
                </div>
                <p className="sm:text-left text-center w-full">{description}</p>
            </div>
            <div className="w-full flex sm:flex-row flex-col gap-8">
                {document && <iframe src={document} className="w-full h-64" title="Resume" />}
                {video && <iframe id="ls_embed_1629576303" src={video} className="w-full h-64" frameBorder="0" scrolling="no" />}
            </div>
        </div>
    );
};

export default Project;
