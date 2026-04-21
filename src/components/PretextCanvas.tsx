/**
 * PretextCanvas — decorative animated hero background.
 *
 * Uses @chenglou/pretext to calculate the text tile height so the
 * scroll animation loops seamlessly — no DOM, no reflow.
 */
import { useEffect, useRef } from 'react';
import { prepare, layout } from '@chenglou/pretext';

const TICKER =
    'SOFTWARE ENGINEER  ✦  DATA SCIENTIST  ✦  FOUNDER  ✦  CAT DAD  ✦  ';
const FONT = '500 12px Inter';
const LINE_H = 26;
const SCROLL_SPEED = 18;

export default function PretextCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let raf: number;
        let startTime = 0;
        let loopH = LINE_H;

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();

        const recompute = () => {
            const prepared = prepare(TICKER, FONT);
            const result = layout(prepared, canvas.width, LINE_H);
            loopH = Math.max(LINE_H, result.lineCount * LINE_H);
        };
        recompute();

        const draw = (ts: number) => {
            if (startTime === 0) startTime = ts;
            const elapsed = (ts - startTime) / 1000;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.font = FONT;

            const rowW = ctx.measureText(TICKER).width;
            const scrollY = (elapsed * SCROLL_SPEED) % loopH;
            const rows = Math.ceil(canvas.height / LINE_H) + 2;
            const cy = canvas.height / 2;

            for (let row = -1; row <= rows; row++) {
                const y = row * LINE_H - scrollY;

                const distFrac = Math.abs(y + LINE_H * 0.5 - cy) / cy;
                const alpha = Math.max(0, 0.055 * (1 - distFrac * 1.2));
                if (alpha <= 0) continue;

                const grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
                grad.addColorStop(0, `rgba(167,139,250,${alpha})`);
                grad.addColorStop(0.5, `rgba(34,211,238,${alpha * 1.4})`);
                grad.addColorStop(1, `rgba(167,139,250,${alpha})`);
                ctx.fillStyle = grad;

                const xOff = row % 2 === 0 ? 0 : -(rowW / 2);
                for (let x = xOff; x < canvas.width + rowW; x += rowW) {
                    ctx.fillText(TICKER, x, y + LINE_H);
                }
            }

            raf = requestAnimationFrame(draw);
        };

        document.fonts.ready.then(() => {
            raf = requestAnimationFrame(draw);
        });

        const obs = new ResizeObserver(() => {
            resize();
            recompute();
        });
        obs.observe(canvas);

        return () => {
            cancelAnimationFrame(raf);
            obs.disconnect();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none select-none"
            aria-hidden="true"
        />
    );
}
