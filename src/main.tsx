import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import ReactDOM from "react-dom";
import Resume from "./pages/Resume.tsx";
import Homepage from "./Homepage.tsx";
import Projects from "./pages/Projects.tsx";
import Experiences from "./pages/Experiences.tsx";
import TopBar from "./TopBar.tsx";

ReactDOM.render(
    <React.StrictMode>
        <TopBar />
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/experience" element={<Experiences />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById("root"),
);
