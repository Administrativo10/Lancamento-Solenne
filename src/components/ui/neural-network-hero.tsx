'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText, useGSAP);

// ===================== CSS GRADIENT BACKGROUND =====================
function GradientBackground() {
    const canvasRef = useRef<HTMLDivElement | null>(null);

    useGSAP(
        () => {
            if (!canvasRef.current) return;

            gsap.set(canvasRef.current, {
                filter: 'blur(20px)',
                scale: 1.1,
                autoAlpha: 0.7
            });

            gsap.to(canvasRef.current, {
                filter: 'blur(0px)',
                scale: 1,
                autoAlpha: 1,
                duration: 1.5,
                ease: 'power3.out',
                delay: 0.3
            });
        },
        { scope: canvasRef }
    );

    return (
        <div ref={canvasRef} className="bg-black absolute inset-0 -z-10 w-full h-full overflow-hidden" aria-hidden>
            {/* Animated gradient mesh */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20 animate-pulse" style={{ animationDuration: '8s' }} />
            <div className="absolute inset-0 bg-gradient-to-tl from-pink-900/10 via-purple-900/10 to-blue-900/10 animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />

            {/* Radial glow effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '1s' }} />
            <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '3s' }} />

            {/* Noise texture overlay */}
            <div className="absolute inset-0 opacity-[0.015]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat',
                backgroundSize: '200px 200px'
            }} />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />
        </div>
    );
}

// ===================== HERO =====================
interface HeroProps {
    title: string;
    description: string;
    badgeText?: string;
    badgeLabel?: string;
    ctaButton?: { text: string; onClick: () => void };
}

export default function Hero({
    title,
    description,
    badgeText = "Lançamento Exclusivo",
    badgeLabel = "Novo",
    ctaButton
}: HeroProps) {
    const sectionRef = useRef<HTMLElement | null>(null);
    const headerRef = useRef<HTMLHeadingElement | null>(null);
    const paraRef = useRef<HTMLParagraphElement | null>(null);
    const ctaRef = useRef<HTMLDivElement | null>(null);
    const badgeRef = useRef<HTMLDivElement | null>(null);

    useGSAP(
        () => {
            if (!headerRef.current) return;

            document.fonts.ready.then(() => {
                const split = new SplitText(headerRef.current!, {
                    type: 'lines',
                    linesClass: 'overflow-hidden'
                });

                gsap.set(split.lines, {
                    filter: 'blur(16px)',
                    yPercent: 30,
                    autoAlpha: 0,
                    scale: 1.06,
                    transformOrigin: '50% 100%',
                });

                if (badgeRef.current) {
                    gsap.set(badgeRef.current, { autoAlpha: 0, y: -8 });
                }
                if (paraRef.current) {
                    gsap.set(paraRef.current, { autoAlpha: 0, y: 8 });
                }
                if (ctaRef.current) {
                    gsap.set(ctaRef.current, { autoAlpha: 0, y: 8 });
                }

                const tl = gsap.timeline({
                    defaults: { ease: 'power3.out' },
                });

                if (badgeRef.current) {
                    tl.to(badgeRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, 0.0);
                }

                tl.to(
                    split.lines,
                    {
                        filter: 'blur(0px)',
                        yPercent: 0,
                        autoAlpha: 1,
                        scale: 1,
                        duration: 0.9,
                        stagger: 0.15,
                    },
                    0.1,
                );

                if (paraRef.current) {
                    tl.to(paraRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, '-=0.55');
                }
                if (ctaRef.current) {
                    tl.to(ctaRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, '-=0.35');
                }
            });
        },
        { scope: sectionRef },
    );

    return (
        <section ref={sectionRef} className="relative h-screen w-screen overflow-hidden">
            <GradientBackground />

            <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pb-24 pt-36 sm:gap-8 sm:pt-44 md:px-10 lg:px-16">
                <div ref={badgeRef} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm">
                    <span className="text-[10px] font-light uppercase tracking-[0.08em] text-white/70">{badgeLabel}</span>
                    <span className="h-1 w-1 rounded-full bg-white/40" />
                    <span className="text-xs font-light tracking-tight text-white/80">{badgeText}</span>
                </div>

                <h1 ref={headerRef} className="max-w-3xl text-left text-5xl font-extralight leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                    {title}
                </h1>

                <p ref={paraRef} className="max-w-xl text-left text-base font-light leading-relaxed tracking-tight text-white/75 sm:text-lg">
                    {description}
                </p>

                {ctaButton && (
                    <div ref={ctaRef} className="pt-2">
                        <button
                            onClick={ctaButton.onClick}
                            className="rounded-full bg-[#25D366] hover:bg-[#22c55e] border border-[#25D366]/20 px-8 py-4 text-sm font-light tracking-tight text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 hover:shadow-lg hover:shadow-[#25D366]/20 inline-flex items-center gap-3"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            <span>{ctaButton.text}</span>
                        </button>
                    </div>
                )}
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
        </section>
    );
}
