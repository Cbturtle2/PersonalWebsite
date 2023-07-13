import "./App.css";
import TopBar from "./TopBar";
import Social from "./components/Social";

const Homepage = () => {
    return (
        <div>
            <TopBar />
            <div className="flex flex-col gap-8">
                <div className="flex items-center justify-between flex-col sm:flex-row gap-5">
                    <div className="flex flex-col justify-start sm:text-left text-center gap-2">
                        <h2>About</h2>
                        <p>Hi I'm Charles! 👋🏻</p>
                        <p>I am a Data Scientist, Web Developer, and third year Computer Science student at Louisiana State University</p>
                        <p>
                            My first year of college was spent at Rochester Institute of Technology where I was on the executive board of
                            Computer Science house and a maintainer of our internet connected vending machines project
                        </p>
                        <p>
                            From February 2022 to June 2023 I worked at Bryx bringing a Records Management System from conception to
                            production as well as being head of different projects
                        </p>
                    </div>
                    <img
                        src="https://pub-4a5c351e48c34a18817678ead6714bda.r2.dev/ProfilePhoto.jpeg"
                        className="w-64 h-64 rounded-2xl object-cover object-top"
                    />
                </div>
                <div className="flex flex-col justify-start sm:text-left text-center gap-2">
                    <h2>Where to Find Me</h2>
                    <Social type="github" text="@Cbturtle2" link="https://github.com/Cbturtle2" />
                    <Social type="linkedin" text="@charles-beam-183913220" link="https://www.linkedin.com/in/charles-beam-183913220/" />
                    <Social type="email" text="charleslbeam@gmail.com" link="mailto: charleslbeam@gmail.com" />
                </div>
            </div>
        </div>
    );
};

export default Homepage;
