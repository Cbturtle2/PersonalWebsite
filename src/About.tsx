import "./App.css";
import TopBar from "./TopBar";

const About = () => {
    return (
        <div>
            <TopBar />
            <div className="flex items-center justify-between flex-col sm:flex-row gap-3">
                <div className="flex flex-col justify-start sm:text-left text-center gap-1">
                    <h2>About</h2>
                    <p>Hi I'm Charles! 👋🏻</p>
                    <p>I am a Data Scientist, Web Developer, and third year computer science student at Louisiana State University</p>
                </div>
                <img
                    src="https://pub-4a5c351e48c34a18817678ead6714bda.r2.dev/ProfilePhoto.jpeg"
                    className="w-64 h-64 rounded-2xl object-cover object-top"
                />
            </div>
        </div>
    );
};

export default About;
