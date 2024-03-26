import "./App.css";
import Experiences from "./pages/Experiences";
// import Projects from "./pages/Projects";
import Social from "./components/Social";

const Homepage = () => {
    return (
        <div>
            <div className="flex flex-col gap-8">
                <div className="flex items-center justify-between flex-col sm:flex-row gap-5">
                    <div className="flex flex-col justify-start sm:text-left text-center gap-2">
                        <h2 className="font-bold">About</h2>
                        <p>Charles Here! 👋🏻</p>
                        <p>I am a Software Engineer, Researcher, and Computer Science Junior at Louisiana State University</p>
                        <p>
                            Currently working on a project in collaboration with Our Lady of the Lake helping Doctors better understand and
                            diagnose conditions like sepsis.
                        </p>
                        <p>
                            Researcher in the Intersectional AI and Security Lab where I am conducting research utilizing large language
                            models and neural networks under Dr. James Ghawaly.
                        </p>
                        <p>
                            From February 2022 to June 2023 I worked at Bryx bringing a Records Management System from conception to
                            production as well as being head of multiple internal projects
                        </p>
                    </div>
                    <img
                        src="https://pub-4a5c351e48c34a18817678ead6714bda.r2.dev/ProfilePhoto.jpeg"
                        className="w-64 h-64 rounded-2xl object-cover object-top p-0 min-w-[16rem]"
                    />
                </div>
                <div className="flex flex-col justify-start sm:text-left text-center gap-2">
                    <h2 className="font-bold">Where to Find Me</h2>
                    <Social type="github" text="@Cbturtle2" link="https://github.com/Cbturtle2" />
                    <Social type="linkedin" text="@charles-beam-183913220" link="https://www.linkedin.com/in/charles-beam-183913220/" />
                    <Social type="email" text="charleslbeam@gmail.com" link="mailto: charleslbeam@gmail.com" />
                </div>
                <Experiences />
                {/* <Projects /> */}
            </div>
        </div>
    );
};

export default Homepage;
