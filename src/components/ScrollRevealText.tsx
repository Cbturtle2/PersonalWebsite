/**
 * ScrollRevealText — powered by @chenglou/pretext.
 *
 * pretext calculates the exact line breaks for the given text at the
 * container width (no DOM reflow, no guessing). Each line is then rendered
 * as an individual element. As the user scrolls, the line closest to the
 * viewport reading-point lights up — past lines dim, future lines wait.
 */
import { useEffect, useRef, useState } from 'react';
import { prepareWithSegments, layoutWithLines } from '@chenglou/pretext';

interface Props {
    text: string;
    className?: string;
    /** 0–1 fraction of viewport height used as the "reading point". Default 0.55 */
    readingPoint?: number;
}

export default function ScrollRevealText({
    text,
    className = '',
    readingPoint = 0.55,
}: Props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [lines, setLines] = useState<string[]>([]);
    const [activeLine, setActiveLine] = useState(-2);
    const lineHeightRef = useRef(24);

    // ── Use pretext to split text into exact lines at the container width ──
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        let cancelled = false;

        const calculate = async () => {
            const width = el.offsetWidth;
            if (width === 0) return;

            try {
                const style = window.getComputedStyle(el);
                const fontSize = style.fontSize || '14px';
                const fontWeight = style.fontWeight || '400';
                const rawFamily = style.fontFamily || 'Inter';
                const fontFamily =
                    rawFamily.split(',')[0].trim().replace(/['"]/g, '') ||
                    'Inter';
                const rawLineHeight = style.lineHeight;
                const lineHeight =
                    rawLineHeight === 'normal'
                        ? parseFloat(fontSize) * 1.6
                        : parseFloat(rawLineHeight);

                lineHeightRef.current = lineHeight;

                await document.fonts.ready;
                if (cancelled) return;

                const prepared = prepareWithSegments(
                    text,
                    `${fontWeight} ${fontSize} ${fontFamily}`,
                );
                const result = layoutWithLines(prepared, width, lineHeight);
                if (!cancelled) setLines(result.lines.map((l) => l.text));
            } catch {
                if (!cancelled) setLines([text]);
            }
        };

        calculate();
        const obs = new ResizeObserver(calculate);
        obs.observe(el);
        return () => {
            cancelled = true;
            obs.disconnect();
        };
    }, [text]);

    // ── Track scroll: which line is at the reading point ──────────────────
    useEffect(() => {
        const update = () => {
            const el = containerRef.current;
            if (!el || lines.length === 0) return;

            const rect = el.getBoundingClientRect();
            const readY = window.innerHeight * readingPoint;
            // Distance from the reading point to the top of the container
            const relY = readY - rect.top;
            const lh = lineHeightRef.current;
            const idx = Math.round(relY / lh - 0.5);
            setActiveLine(Math.max(-1, Math.min(idx, lines.length - 1)));
        };

        window.addEventListener('scroll', update, { passive: true });
        update();
        return () => window.removeEventListener('scroll', update);
    }, [lines, readingPoint]);

    return (
        <div ref={containerRef} className={className}>
            {lines.length === 0 ? (
                <span className="opacity-0 select-none">{text}</span>
            ) : (
                lines.map((line, i) => {
                    const isActive = i === activeLine;
                    const isPast = i < activeLine;

                    return (
                        <div
                            key={i}
                            style={{
                                transition:
                                    'color 0.35s ease, text-shadow 0.35s ease, opacity 0.35s ease',
                                color: isActive
                                    ? '#f1f5f9'
                                    : isPast
                                      ? '#64748b'
                                      : '#94a3b8',
                                opacity: isActive ? 1 : isPast ? 0.7 : 0.5,
                                textShadow: isActive
                                    ? '0 0 24px rgba(167,139,250,0.55), 0 0 48px rgba(34,211,238,0.25)'
                                    : 'none',
                            }}
                        >
                            {line}
                        </div>
                    );
                })
            )}
        </div>
    );
}
