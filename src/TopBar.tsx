import { useEffect, useState } from "react";

const TopBar = () => {
    const [currText, setCurrText] = useState("");

    useEffect(() => {
        const textToDisplay = "Software Engineer, Data Scientist, Cat Dad";

        const displayText = () => {
            for (let index = 0; index <= textToDisplay.length; index++) {
                const delayStep = 50 / textToDisplay.length;
                const delay = delayStep * index;

                setTimeout(() => {
                    setCurrText(textToDisplay.slice(0, index));
                }, delay * index);
            }
        };

        displayText();
    }, []);

    return (
        <>
            <h1>Charles Beam</h1>
            <h2>{currText}</h2>
            <div className="flex justify-center gap-2 mb-2">
                <h3>
                    <a href="/">About;</a>
                </h3>
                <h3>
                    <a href="/resume">Resume;</a>
                </h3>
                <h3>
                    <a href="/experience">Experience;</a>
                </h3>
                <h3>
                    <a href="/projects">Projects;</a>
                </h3>
            </div>
        </>
    );
};

export default TopBar;
