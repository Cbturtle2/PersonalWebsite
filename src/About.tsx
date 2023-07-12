import "./App.css";
import TopBar from "./TopBar";

const About = () => {
    return (
        <div>
            <TopBar />
            <div className="flex items-center justify-between">
                <div className="">
                    <h2>About</h2>
                    <p>Hi I'm Charles! 👋🏻</p>
                </div>
                <img src="https://pub-4a5c351e48c34a18817678ead6714bda.r2.dev/ProfilePhoto.jpeg" className="w-64 h-64 rounded-2xl" />
            </div>
        </div>
    );
};

export default About;
