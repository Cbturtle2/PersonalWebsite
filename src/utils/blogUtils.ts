export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    tags: string[];
    content: string;
}

function parseFrontmatter(raw: string): {
    meta: Record<string, string>;
    content: string;
} {
    const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
    if (!match) return { meta: {}, content: raw };

    const meta: Record<string, string> = {};
    for (const line of match[1].split('\n')) {
        const idx = line.indexOf(':');
        if (idx > -1) {
            const key = line.slice(0, idx).trim();
            const value = line
                .slice(idx + 1)
                .trim()
                .replace(/^["']|["']$/g, '');
            if (key) meta[key] = value;
        }
    }

    return { meta, content: match[2].trim() };
}

export function loadBlogPosts(): BlogPost[] {
    const modules = import.meta.glob('/blogs/*.md', {
        query: '?raw',
        import: 'default',
        eager: true,
    }) as Record<string, string>;

    return Object.entries(modules)
        .map(([path, raw]) => {
            const slug = path.replace('/blogs/', '').replace('.md', '');
            const { meta, content } = parseFrontmatter(raw);
            const plainContent = content
                .replace(/#{1,6}\s[^\n]*/g, '')
                .replace(/\*\*/g, '')
                .trim();
            const excerpt =
                meta.excerpt ??
                plainContent.slice(0, 160) +
                    (plainContent.length > 160 ? '\u2026' : '');

            return {
                slug,
                title: meta.title ?? slug.replace(/-/g, ' '),
                date: meta.date ?? '',
                excerpt,
                tags: meta.tags
                    ? meta.tags.split(',').map((t) => t.trim())
                    : [],
                content,
            };
        })
        .sort((a, b) => {
            if (!a.date) return 1;
            if (!b.date) return -1;
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
}

export function findBlogPost(slug: string): BlogPost | undefined {
    return loadBlogPosts().find((p) => p.slug === slug);
}
