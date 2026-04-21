import { useEffect, useRef, useState } from 'react';
import {
    prepareWithSegments,
    layoutWithLines,
} from '@chenglou/pretext';

interface Props {
    text: string;
    className?: string;
}

export default function TextReveal({ text, className = '' }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [lines, setLines] = useState<string[]>([]);
    const [revealed, setRevealed] = useState(false);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        let cancelled = false;

        const calculate = async () => {
            if (cancelled) return;
            const width = el.offsetWidth;
            if (width === 0) return;

            let splitLines: string[] = [text];

            try {
                // Read computed styles so pretext uses the same font as the browser
                const style = window.getComputedStyle(el);
                const fontSize = style.fontSize || '20px';
                const fontWeight = style.fontWeight || '400';
                const rawFamily = style.fontFamily || 'Inter';
                const fontFamily =
                    rawFamily.split(',')[0].trim().replace(/['"]/g, '') ||
                    'Inter';
                const rawLineHeight = style.lineHeight;
                const lineHeight =
                    rawLineHeight === 'normal'
                        ? parseFloat(fontSize) * 1.5
                        : parseFloat(rawLineHeight);

                const fontString = `${fontWeight} ${fontSize} ${fontFamily}`;

                // Wait for web fonts to load so metrics are accurate
                await document.fonts.ready;
                if (cancelled) return;

                // pretext measures text without any DOM reflow
                const prepared = prepareWithSegments(text, fontString);
                const result = layoutWithLines(prepared, width, lineHeight);

                // LayoutLine has a .text property directly — no need for materializeLineRange
                splitLines = result.lines.map((line) => line.text);
            } catch {
                // Fallback: split on sentence boundaries
                const parts = text.split('. ');
                splitLines =
                    parts.length > 1
                        ? parts.map((s, i) =>
                              i < parts.length - 1 ? s + '.' : s,
                          )
                        : [text];
            }

            if (cancelled) return;
            setLines(splitLines.filter(Boolean));

            // Double rAF ensures DOM has painted before triggering transition
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    if (!cancelled) setRevealed(true);
                });
            });
        };

        calculate();

        const observer = new ResizeObserver(calculate);
        observer.observe(el);

        return () => {
            cancelled = true;
            observer.disconnect();
        };
    }, [text]);

    return (
        <div ref={containerRef} className={className}>
            {lines.length === 0 ? (
                // Holds layout space while pretext calculates
                <span className="opacity-0 select-none">{text}</span>
            ) : (
                lines.map((line, i) => (
                    <div
                        key={i}
                        style={{
                            opacity: revealed ? 1 : 0,
                            transform: revealed
                                ? 'translateY(0)'
                                : 'translateY(14px)',
                            transition: `opacity 0.55s ease ${i * 0.13}s, transform 0.55s ease ${i * 0.13}s`,
                        }}
                    >
                        {line}
                    </div>
                ))
            )}
        </div>
    );
}
