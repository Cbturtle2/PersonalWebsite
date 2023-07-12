import TopBar from "./TopBar";

const Resume = () => {
    return (
        <div className="relative w-full h-full justify-center items-center">
            <TopBar />
            <iframe
                src="https://pub-4a5c351e48c34a18817678ead6714bda.r2.dev/CharlesBeamResume.pdf#view=fit"
                className="w-full h-[90%]"
                title="Resume"
            />
        </div>
    );
};

export default Resume;
