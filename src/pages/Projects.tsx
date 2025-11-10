import Project from "../components/Project";

const Projects = () => {
    return (
        <div>
            <div className="flex flex-col">
                <div className="flex flex-col justify-start sm:text-left text-center gap-5">
                    <h2 className="font-bold">Projects</h2>
                    <h4>
                        For a more detailed description of each project please
                        see attached documents
                    </h4>
                    <div className="flex flex-col gap-6">
                        <Project
                            title="Sepsis Case Analysis Utilizing LLMs"
                            description={[
                                "• Created a system in partnership with Our Lady of the Lake and Cytovale to adjudicate sepsis cases. If deployed, the project could speed up market adoption for these systems by allowing for faster clinical trials.",
                                "• Worked with a team of four people cleaning/segmenting data and fine-tuning OpenAI’s gpt-3.5 on hundreds of sepsis cases to improve adjudication accuracy. Overall, we got an adjudication accuracy of 82% with 0 false negatives.",
                                "• Presented to 80+ people at LSU’s AI Symposium.",
                            ]}
                        />
                        <Project
                            title="Automated School System for Declaring a Students Location"
                            description="Created a system that allows students to declare their location by scanning
                            a RFID tag"
                            document="https://pub-4a5c351e48c34a18817678ead6714bda.r2.dev/CharlesBeamDistinction.pdf"
                            video="https://www.youtube.com/embed/eyEyOH-wYPo?si=idnhTbmwhouFUZ7V"
                        />
                        <Project
                            title="Programming Manager for LAACES Northwestern State University Team 2020-21"
                            description="Programmed board utilizing C++ and conducted rigorous tests to ensure
                            the program did not fail during flight"
                            document="https://pub-4a5c351e48c34a18817678ead6714bda.r2.dev/NSUDemonSats-Manager.pdf"
                        />
                        <Project
                            title="Programming Assistant for LAACES Northwestern State University Team 2019-20"
                            description="Assisted in the development of a payload utilizing C++. Payload was launched
                            to altitude of over 100,000ft"
                            document="https://pub-4a5c351e48c34a18817678ead6714bda.r2.dev/NSUDemonSats-Assistant.pdf"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
