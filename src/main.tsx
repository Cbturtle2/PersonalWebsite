import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import ReactDOM from "react-dom";
import Resume from "./Resume.tsx";
import About from "./About.tsx";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById("root"),
);
