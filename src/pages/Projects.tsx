import Project from '../components/Project';

const Projects = () => {
    return (
        <div className="max-w-5xl mx-auto px-6 py-16">
            <p className="section-label mb-3">Portfolio</p>
            <h1 className="text-3xl font-bold text-slate-100 mb-2">Projects</h1>
            <p className="text-slate-400 mb-12">
                A selection of research and engineering projects.
            </p>

            <div className="flex flex-col gap-6">
                <Project
                    title="Sepsis Case Analysis Utilizing LLMs"
                    description={[
                        '• Created a system in partnership with Our Lady of the Lake and Cytovale to adjudicate sepsis cases. If deployed, the project could speed up market adoption for these systems by allowing for faster clinical trials.',
                        '• Worked with a team of four people cleaning/segmenting data and fine-tuning OpenAI\'s GPT-3.5 on hundreds of sepsis cases to improve adjudication accuracy. Overall, we got an adjudication accuracy of 82% with 0 false negatives.',
                        '• Presented to 80+ people at LSU\'s AI Symposium.',
                    ]}
                />
                <Project
                    title="Automated School System for Declaring a Student's Location"
                    description="Created a system that allows students to declare their location by scanning an RFID tag. Designed and built the full hardware and software stack for the system."
                    document="https://pub-4a5c351e48c34a18817678ead6714bda.r2.dev/CharlesBeamDistinction.pdf"
                    video="https://www.youtube.com/embed/eyEyOH-wYPo?si=idnhTbmwhouFUZ7V"
                />
                <Project
                    title="Programming Manager — LAACES NSU Team 2020–21"
                    description="Programmed board utilizing C++ and conducted rigorous tests to ensure the program did not fail during flight. Led programming efforts for a high-altitude scientific payload."
                    document="https://pub-4a5c351e48c34a18817678ead6714bda.r2.dev/NSUDemonSats-Manager.pdf"
                />
                <Project
                    title="Programming Assistant — LAACES NSU Team 2019–20"
                    description="Assisted in the development of a payload utilizing C++. Payload was launched to an altitude of over 100,000 ft."
                    document="https://pub-4a5c351e48c34a18817678ead6714bda.r2.dev/NSUDemonSats-Assistant.pdf"
                />
            </div>
        </div>
    );
};

export default Projects;
