import Experience from "../components/Experience";

const Experiences = () => {
    return (
        <div>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col justify-start sm:text-left text-center gap-5">
                    <h2 className="font-bold">Experience</h2>
                    <h4>
                        For a more detailed description of each position please see{" "}
                        <a href="/resume" className="text-blue-200">
                            Resume
                        </a>
                    </h4>
                    <div className="flex flex-col gap-6">
                        <Experience
                            image="https://pub-4a5c351e48c34a18817678ead6714bda.r2.dev/BryxLogo.jpeg"
                            title="Bryx"
                            jobTitle="Full Time Web Developer"
                            dates="Sept 2022 - July 2023"
                            description={[
                                "• Designed, developed, and maintained a top-tier Records Management System with stringent time-to-market demands and a fluid project scope.",
                                "• Initiated the creation of a lightweight, customizable, and accessible user interface library that will be implemented in the entire company’s products.",
                                "• Created and maintained company phone routing system utilizing 3CX through multiple iterations and rewrites to conform with growing company support expectations.",
                            ]}
                        />
                        <Experience
                            image="https://pub-4a5c351e48c34a18817678ead6714bda.r2.dev/BryxLogo.jpeg"
                            title="Bryx"
                            jobTitle="Summer Intern Web Developer"
                            dates="May 2022 - Aug 2022"
                            description={[
                                "• Created a company ID card system utilizing LaTeX for PDF creation.",
                                "• Met with potential customers to understand market and client demands.",
                                "• Layed out groundwork for design and project structure of Records Management System.",
                            ]}
                        />
                        <Experience
                            image="https://pub-4a5c351e48c34a18817678ead6714bda.r2.dev/BryxLogo.jpeg"
                            title="Bryx"
                            jobTitle="Part Time Data Scientist"
                            dates="Feb 2022 - May 2022"
                            description={[
                                "• Created scripts to get support tickets and call data from Freshdesk and 3CX. Cleaned and formatted data into insightful metrics for support team stakeholders.",
                                "• Worked with support team to cut down on total support time to increase throughput for more tickets/calls.",
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
