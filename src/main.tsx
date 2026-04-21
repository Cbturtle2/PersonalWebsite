import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Homepage from './Homepage';
import Resume from './pages/Resume';
import Experiences from './pages/Experiences';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import InTheNews from './pages/InTheNews';
import TopBar from './TopBar';

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Router>
            <TopBar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/experience" element={<Experiences />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/news" element={<InTheNews />} />
            </Routes>
        </Router>
    </React.StrictMode>,
);
