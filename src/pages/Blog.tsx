const Blog = () => {
    return (
        <div className="max-w-5xl mx-auto px-6 py-16">
            <p className="section-label mb-3">Writing</p>
            <h1 className="text-3xl font-bold text-slate-100 mb-2">Blog</h1>
            <p className="text-slate-400 mb-12">
                Thoughts on software, AI, and building things.
            </p>

            <div className="card p-12 text-center flex flex-col items-center gap-5">
                {/* Animated pulse dot */}
                <div className="relative">
                    <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: '#a78bfa' }}
                    />
                    <div
                        className="absolute inset-0 rounded-full animate-ping"
                        style={{
                            backgroundColor: 'rgba(167,139,250,0.4)',
                            animationDuration: '1.5s',
                        }}
                    />
                </div>

                <div>
                    <p className="text-slate-100 font-semibold text-lg mb-2">
                        Coming Soon
                    </p>
                    <p className="text-slate-500 text-sm max-w-sm">
                        I'm working on posts about building AcornBids, AI
                        research, and what I've learned shipping software.
                        Check back soon.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
