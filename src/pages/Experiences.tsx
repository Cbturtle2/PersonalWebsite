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
                            dates="Sept 2022 - June 2023"
                            description="Brought a Records Management System from conception to beta testing. Apart of team that built internal UI library from scratch."
                        />
                        <Experience
                            image="https://pub-4a5c351e48c34a18817678ead6714bda.r2.dev/BryxLogo.jpeg"
                            title="Bryx"
                            jobTitle="Summer Intern Web Developer"
                            dates="May 2022 - Aug 2022"
                            description="Planned Records Management System and built internal systems to support it. Apart of hiring effort to grow and onboard team."
                        />
                        <Experience
                            image="https://pub-4a5c351e48c34a18817678ead6714bda.r2.dev/BryxLogo.jpeg"
                            title="Bryx"
                            jobTitle="Part Time Data Scientist"
                            dates="Feb 2022 - May 2022"
                            description="Identified trends from past support ticket/phone records and collaborated with support team to improve processes. Developed system to generate PDFs for company badges."
                        />
                        <Experience
                            image="https://pub-4a5c351e48c34a18817678ead6714bda.r2.dev/CSH Logo.svg"
                            title="Computer Science House"
                            jobTitle="Executive Board Member"
                            dates="Sept 2021 - May 2022"
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
                            jobTitle="Programming Manager and Embedded Software Developer"
                            dates="Aug 2020 - May 2021"
                            description="In charge of coordinating programming of payload to be launched into upper atmosphere (100,000+ ft). Developed software to control payload and collect data from sensors. Coordinated with team members to ensure all aspects of project were completed on time and tested appropriately."
                        />
                        <Experience
                            image="https://pub-4a5c351e48c34a18817678ead6714bda.r2.dev/NSU Logo.png"
                            title="Louisiana Aerospace Catalyst Experiences for Students"
                            jobTitle="Embedded Software Developer"
                            dates="Dec 2019 - May 2020"
                            description="Worked with team members to develop software for custom board to control payload and collect data"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experiences;
