/**
 * CursorField — full-page floating word particles with cursor repulsion.
 *
 * pretext lays out the word list as text at a fixed column width,
 * giving us the exact line-break positions. We then compute each word's
 * x offset within its line via canvas measureText and scatter those
 * layout coordinates across the viewport as home positions for the particles.
 * When the cursor gets close, words are pushed away; spring physics pulls
 * them back home.
 */
import { useEffect, useRef } from 'react';
import { prepareWithSegments, layoutWithLines } from '@chenglou/pretext';

// Words drawn from Charles's bio — what the page is really about
const WORD_LIST = [
    'AcornBids',
    'LSU',
    'AI',
    'federal contracts',
    'government',
    'procurement',
    'software engineer',
    'data scientist',
    'researcher',
    'sepsis',
    'LLMs',
    'Python',
    'React',
    'TypeScript',
    'founder',
    'CEO',
    'BASF',
    'Bryx',
    'Sigma',
    'RAG',
    'machine learning',
    'cat dad',
    'Class of 2025',
    'Baton Rouge',
    'healthcare',
    'C++',
    'open source',
    'startups',
];

const FONT_SIZE = 12;
const FONT = `400 ${FONT_SIZE}px Inter`;
const REPEL_RADIUS = 160;
const REPEL_STRENGTH = 5500;
const SPRING = 0.055;
const DAMPING = 0.87;
// Slow ambient drift so particles feel alive when cursor is far away
const DRIFT_SPEED = 0.00015;

interface Particle {
    word: string;
    homeX: number;
    homeY: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    baseAlpha: number;
    driftPhase: number; // unique phase for ambient drift
}

export default function CursorField() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let raf: number;
        let mouseX = -9999;
        let mouseY = -9999;
        let particles: Particle[] = [];

        // ── Build home positions using pretext ──────────────────────────
        // pretext lays out the word list as prose at LAYOUT_W column width,
        // giving us line data. We then compute each word's exact x offset
        // within its line via canvas measureText.
        const buildParticles = () => {
            const vw = window.innerWidth;
            const vh = window.innerHeight;
            const LAYOUT_W = 320; // virtual column width for pretext
            const LINE_H = FONT_SIZE * 1.8;

            ctx.font = FONT;
            const spaceW = ctx.measureText(' ').width;

            let rawLines: string[] = [];
            try {
                const joinedText = WORD_LIST.join('  ');
                const prepared = prepareWithSegments(joinedText, FONT);
                const result = layoutWithLines(prepared, LAYOUT_W, LINE_H);
                rawLines = result.lines.map((l) => l.text.trim());
            } catch {
                // Fallback: one word per line
                rawLines = WORD_LIST;
            }

            // Extract word+position pairs from pretext lines
            const wordPositions: { word: string; col: number; row: number }[] =
                [];
            rawLines.forEach((lineText, row) => {
                const words = lineText.split(/\s{2,}|\s/).filter(Boolean);
                let colX = 0;
                words.forEach((word) => {
                    wordPositions.push({ word, col: colX, row });
                    colX += ctx.measureText(word).width + spaceW * 2;
                });
            });

            // Scale pretext layout coords to spread across the viewport
            const maxCol = Math.max(...wordPositions.map((p) => p.col)) || 1;
            const maxRow = wordPositions.length > 0 ? rawLines.length : 1;

            const marginX = vw * 0.08;
            const marginY = vh * 0.1;
            const usableW = vw - marginX * 2;
            const usableH = vh - marginY * 2;

            particles = wordPositions.map(({ word, col, row }, i) => {
                const homeX = marginX + (col / maxCol) * usableW;
                const homeY =
                    marginY + (row / Math.max(maxRow - 1, 1)) * usableH;
                return {
                    word,
                    homeX,
                    homeY,
                    x: homeX,
                    y: homeY,
                    vx: 0,
                    vy: 0,
                    baseAlpha: 0.1 + Math.random() * 0.08,
                    driftPhase: (i / wordPositions.length) * Math.PI * 2,
                };
            });
        };

        // ── Canvas resize ───────────────────────────────────────────────
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            buildParticles();
        };

        // ── Animation loop ──────────────────────────────────────────────
        const draw = (ts: number) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.font = FONT;

            particles.forEach((p) => {
                // Ambient drift — tiny sine wobble so particles feel alive
                const driftX =
                    Math.sin(ts * DRIFT_SPEED + p.driftPhase) * 6;
                const driftY =
                    Math.cos(ts * DRIFT_SPEED * 0.7 + p.driftPhase) * 4;
                const targetX = p.homeX + driftX;
                const targetY = p.homeY + driftY;

                // Cursor repulsion
                const dx = p.x - mouseX;
                const dy = p.y - mouseY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < REPEL_RADIUS && dist > 0) {
                    const force = REPEL_STRENGTH / (dist * dist);
                    p.vx += (dx / dist) * force;
                    p.vy += (dy / dist) * force;
                }

                // Spring toward drifting home
                p.vx += (targetX - p.x) * SPRING;
                p.vy += (targetY - p.y) * SPRING;

                // Damping
                p.vx *= DAMPING;
                p.vy *= DAMPING;

                p.x += p.vx;
                p.y += p.vy;

                // Alpha: brighter when cursor is nearby
                const proximity = Math.max(
                    0,
                    1 - dist / (REPEL_RADIUS * 2.5),
                );
                const alpha = p.baseAlpha + proximity * 0.25;

                // Color: mix violet → cyan based on horizontal position
                const t = p.x / canvas.width;
                const r = Math.round(167 + (34 - 167) * t);
                const g = Math.round(139 + (211 - 139) * t);
                const b = Math.round(250 + (238 - 250) * t);

                ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
                ctx.fillText(p.word, p.x, p.y);
            });

            raf = requestAnimationFrame(draw);
        };

        // ── Mouse tracking ──────────────────────────────────────────────
        const onMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };
        const onLeave = () => {
            mouseX = -9999;
            mouseY = -9999;
        };

        // ── Bootstrap ───────────────────────────────────────────────────
        document.fonts.ready.then(() => {
            resize();
            raf = requestAnimationFrame(draw);
        });

        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseleave', onLeave);
        window.addEventListener('resize', resize);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseleave', onLeave);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none select-none"
            style={{ zIndex: 2 }}
            aria-hidden="true"
        />
    );
}
