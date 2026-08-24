import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Homepage from './Homepage';
import TopBar from './TopBar';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import ContactCard from './pages/ContactCard';
import Experiences from './pages/Experiences';
import InTheNews from './pages/InTheNews';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const App = () => {
    const { pathname } = useLocation();
    const isContactCard = pathname === '/qr';

    return (
        <>
            <ScrollToTop />
            {!isContactCard && <TopBar />}
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/experience" element={<Experiences />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/news" element={<InTheNews />} />
                <Route path="/qr" element={<ContactCard />} />
            </Routes>
        </>
    );
};

export default App;
