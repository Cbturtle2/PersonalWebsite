import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { findBlogPost } from '../utils/blogUtils';

const BlogPost = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = slug ? findBlogPost(slug) : undefined;

    if (!post) {
        return (
            <div className="max-w-3xl mx-auto px-6 py-24 text-center">
                <p className="text-slate-400 text-lg mb-6">Post not found.</p>
                <Link
                    to="/blog"
                    className="text-violet-400 hover:text-violet-300 transition-colors"
                >
                    ← Back to blog
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto px-6 py-16">
            <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-200 text-sm mb-10 transition-colors"
            >
                ← Back to blog
            </Link>

            <article>
                <header className="mb-10">
                    {post.date && (
                        <p className="text-xs text-slate-500 mb-3">
                            {new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </p>
                    )}
                    <h1 className="text-3xl font-bold text-white mb-5 leading-snug">
                        {post.title}
                    </h1>
                    {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <span key={tag} className="tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </header>

                <div className="prose-content">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            h1: ({ children }) => (
                                <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                                    {children}
                                </h2>
                            ),
                            h2: ({ children }) => (
                                <h3 className="text-xl font-semibold text-white mt-8 mb-3">
                                    {children}
                                </h3>
                            ),
                            h3: ({ children }) => (
                                <h4 className="text-lg font-medium text-slate-200 mt-6 mb-2">
                                    {children}
                                </h4>
                            ),
                            p: ({ children }) => (
                                <p className="text-slate-300 leading-relaxed mb-5">
                                    {children}
                                </p>
                            ),
                            ul: ({ children }) => (
                                <ul className="mb-5 space-y-2 pl-4">
                                    {children}
                                </ul>
                            ),
                            ol: ({ children }) => (
                                <ol className="mb-5 space-y-2 pl-4 list-decimal">
                                    {children}
                                </ol>
                            ),
                            li: ({ children }) => (
                                <li className="text-slate-300 text-sm leading-relaxed list-disc">
                                    {children}
                                </li>
                            ),
                            strong: ({ children }) => (
                                <strong className="text-white font-semibold">
                                    {children}
                                </strong>
                            ),
                            em: ({ children }) => (
                                <em className="text-slate-200 italic">
                                    {children}
                                </em>
                            ),
                            code: ({ children }) => (
                                <code className="bg-[#0d1628] text-cyan-400 px-1.5 py-0.5 rounded text-sm font-mono">
                                    {children}
                                </code>
                            ),
                            pre: ({ children }) => (
                                <pre className="bg-[#0d1628] p-4 rounded-lg overflow-x-auto mb-5 text-sm border border-white/8">
                                    {children}
                                </pre>
                            ),
                            blockquote: ({ children }) => (
                                <blockquote className="border-l-2 border-violet-500 pl-4 text-slate-400 italic my-5">
                                    {children}
                                </blockquote>
                            ),
                            a: ({ href, children }) => (
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors"
                                >
                                    {children}
                                </a>
                            ),
                            hr: () => <hr className="border-white/8 my-8" />,
                        }}
                    >
                        {post.content}
                    </ReactMarkdown>
                </div>
            </article>
        </div>
    );
};

export default BlogPost;
