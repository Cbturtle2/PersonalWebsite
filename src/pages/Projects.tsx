import Project from "../components/Project";

const Projects = () => {
    return (
        <div>
            <div className="flex flex-col">
                <div className="flex flex-col justify-start sm:text-left text-center gap-5">
                    <h2 className="font-bold">Projects</h2>
                    <h4>For a more detailed description of each project please see attached documents</h4>
                    <div className="flex flex-col gap-6">
                        <Project
                            title="Automated School System for Declaring a Students Location"
                            description="Created a system that allows students to declare their location by scanning
                            a RFID tag"
                            document="https://pub-4a5c351e48c34a18817678ead6714bda.r2.dev/CharlesBeamDistinction.pdf"
                            video="https://livestream.com/accounts/7024122/events/9625899/videos/220232790/player?width=960&amp;height=540&amp;enableInfo=true&amp;defaultDrawer=feed&amp;autoPlay=false&amp;mute=false"
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
                        <Project
                            title="Personal Website"
                            description="Developed this website to demonstrate some of the skills learned while working for Bryx (Typescript/React)"
                            link="https://github.com/Cbturtle2/PersonalWebsite"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
