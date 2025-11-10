import Experience from "../components/Experience";

const Experiences = () => {
    return (
        <div>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col justify-start sm:text-left text-center gap-5">
                    <h2 className="font-bold">Experience</h2>
                    <div className="flex flex-col gap-6">
                        <Experience
                            image="https://pub-4a5c351e48c34a18817678ead6714bda.r2.dev/AcornBidsLogo.png"
                            title="AcornBids"
                            jobTitle="Founder/CEO"
                            dates="Aug 2025 - Present"
                            description={[
                                "• Founded AcornBids, a B2B platform designed to disrupt the government procurement market by providing faster, AI-powered discovery of federal contracts to compete directly with industry incumbents like Deltek GovWin IQ.",
                                "• Architected and single-handedly developed the platform's end-to-end technical infrastructure, including a nightly data pipeline (SAM.gov API), a React/Tailwind frontend, and a scalable backend with asynchronous queues to power its core AI (RAG) and natural language filtering features.",
                            ]}
                        />
                        <Experience
                            image="https://pub-4a5c351e48c34a18817678ead6714bda.r2.dev/FMOLHSLogo.png"
                            title="Franciscan Missionaries of Our Lady Health System"
                            jobTitle="Information Systems Internship"
                            dates="Jan 2025 - June 2025"
                            description={[
                                "• In charge of $25,000 project to build a policy/procedure management solution. Guided an LSU student team through unique problems they will face and offered guidance as they learned how FMOLHS handled policies/procedures for audits and employee reference.",
                            ]}
                        />
                        <Experience
                            image="https://pub-4a5c351e48c34a18817678ead6714bda.r2.dev/SigmaLogo.png"
                            title="Sigma Engineers and Constructors"
                            jobTitle="Data Scientist/Software Engineer Internship"
                            dates="Sept 2024 - June 2025"
                            description={[
                                "• Created a conversion program to translate Plant 3D piping files into Aspen HYSYS process flow simulation files, significantly speeding up the creation of new ISO diagrams in Aspen HYSYS.",
                                "• Found valuable insights into how users were interacting with internal programs by creating a boutique logging system to log user engagement. Compiled data to help steer product development.",
                            ]}
                        />
                        <Experience
                            image="https://pub-4a5c351e48c34a18817678ead6714bda.r2.dev/BasfLogo.jpg"
                            title="BASF"
                            jobTitle="Data Scientist/Software Engineer Internship"
                            dates="May 2024 - Aug 2024"
                            description={[
                                "• Layed the groundwork for a future LLM project that will organize a file archive containing millions of miscellaneous files allowing for fast file lookup based on LLM-generated tags.",
                                "• Sped up primary application 12x through standardization which included caching, Kubernetes deployment, dynamically partitioning binary files, and lazy loading parts of the application. Documented process so other applications can be standardized.",
                            ]}
                        />
                        <Experience
                            image="https://pub-4a5c351e48c34a18817678ead6714bda.r2.dev/BryxLogo.jpeg"
                            title="Bryx"
                            jobTitle="Software Engineer (Part Time → Internship → Full Time)"
                            dates="Feb 2022 - July 2023"
                            description={[
                                "• Designed, developed, and maintained a top-tier Records Management System with stringent time-to-market demands and a fluid project scope.",
                                "• Initiated the creation of a lightweight, customizable, and accessible user interface library that will be implemented in the entire company's products.",
                            ]}
                        />
                        <Experience
                            image="https://pub-4a5c351e48c34a18817678ead6714bda.r2.dev/CSH Logo.svg"
                            title="Computer Science House"
                            jobTitle="Executive Board Member (Socials Director)"
                            dates="Aug 2021 - May 2022"
                            description="On Executive Board managing organization with 100+ members. Responsible for hosting weekly meetings and planning social events."
                        />
                        <Experience
                            image="https://pub-4a5c351e48c34a18817678ead6714bda.r2.dev/RIT Logo.jpeg"
                            title="Rochester Institute of Technology"
                            jobTitle="Ambassador"
                            dates="Sept 2021 - May 2022"
                            description="Worked events with 100s of prospective students and their families. Communicated with Computer Science Department heads on general student opinions/concerns"
                        />
                        <Experience
                            image="https://pub-4a5c351e48c34a18817678ead6714bda.r2.dev/NSU Logo.png"
                            title="Louisiana Aerospace Catalyst Experiences for Students"
                            jobTitle="Programming Manager"
                            dates="Dec 2019 - May 2021"
                            description={[
                                "• Programming manager on a team that launched a payload to explore saturated vapor pressure as a function of altitude by measuring atmospheric temperature, pressure, relative humidity, and altitude.",
                                "• Programmed board utilizing C++ and conducted rigorous tests to ensure the program did not fail during flight.",
                                "• Worked with team members to ensure the program interfaced correctly with other parts of the project.",
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experiences;
