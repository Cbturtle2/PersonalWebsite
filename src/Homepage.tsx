import "./App.css";
import Experiences from "./pages/Experiences";
import Projects from "./pages/Projects";
import Social from "./components/Social";
import CharlesHeadshot from "./assets/CharlesHeadshot.jpg";

const Homepage = () => {
    return (
        <div>
            <div className="flex flex-col gap-8">
                <div className="flex items-center justify-between flex-col sm:flex-row gap-5">
                    <div className="flex flex-col justify-start sm:text-left text-center gap-2">
                        <h2 className="font-bold">About</h2>
                        <p>Charles Here!</p>
                        <p>
                            I am a Computer Science graduate from Louisiana State
                            University (Class of 2025).
                        </p>
                        <p>
                            I am the Founder and CEO of AcornBids, a B2B platform
                            disrupting the government procurement market by providing
                            faster, AI-powered discovery of federal contracts.
                        </p>
                        <p>
                            Previously, I worked on AI research projects including
                            sepsis case adjudication with Our Lady of the Lake Hospital
                            and Cytovale, and conducted research in the Intersectional
                            AI and Security Lab at LSU.
                        </p>
                    </div>
                    <img
                        src={CharlesHeadshot}
                        className="w-64 h-64 rounded-2xl object-cover object-top p-0 min-w-[16rem] scale-x-[-1]"
                    />
                </div>
                <div className="flex flex-col justify-start sm:text-left text-center gap-2">
                    <h2 className="font-bold">Where to Find Me</h2>
                    <Social
                        type="github"
                        text="@Cbturtle2"
                        link="https://github.com/Cbturtle2"
                    />
                    <Social
                        type="linkedin"
                        text="@charles-beam-183913220"
                        link="https://www.linkedin.com/in/charles-beam-183913220/"
                    />
                    <Social
                        type="email"
                        text="charleslbeam@gmail.com"
                        link="mailto: charleslbeam@gmail.com"
                    />
                </div>
                <Experiences />
                <Projects />
            </div>
        </div>
    );
};

export default Homepage;
