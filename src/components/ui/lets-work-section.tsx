"use client"

import type React from "react"
import { useState } from "react"
import { ArrowUpRight, MessageCircle, Building2 } from "lucide-react"

export function LetsWorkTogether() {
    const [isHovered, setIsHovered] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [isButtonHovered, setIsButtonHovered] = useState(false)

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        setIsClicked(true)

        setTimeout(() => {
            setShowSuccess(true)
        }, 500)
    }

    const handleBookCall = () => {
        window.open("https://wa.me/5547999890569?text=Olá! Gostaria de agendar uma visita ao Solene.", "_blank")
    }

    return (
        <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 py-32 bg-black overflow-hidden relative">
            {/* User requested background image with 15% opacity */}
            <div className="absolute inset-0 z-0 select-none">
                <img
                    src="/bg-3-dobra.webp"
                    alt="Background"
                    className="w-full h-full object-cover opacity-[0.02]"
                />
            </div>
            {/* Gradient Overlay for blending with previous section */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)] z-0" />

            <div className="relative flex flex-col items-center gap-12 w-full max-w-5xl z-10">
                <div
                    className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{
                        opacity: showSuccess ? 1 : 0,
                        transform: showSuccess ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
                        pointerEvents: showSuccess ? "auto" : "none",
                    }}
                >
                    {/* Elegant heading */}
                    <div className="flex flex-col items-center gap-2 text-center">
                        <span
                            className="text-xs font-semibold tracking-[0.3em] uppercase text-zinc-400 transition-all duration-500"
                            style={{
                                transform: showSuccess ? "translateY(0)" : "translateY(10px)",
                                opacity: showSuccess ? 1 : 0,
                                transitionDelay: "100ms",
                            }}
                        >
                            Exclusividade
                        </span>
                        <h3
                            className="text-3xl md:text-5xl font-light tracking-tight text-white transition-all duration-500"
                            style={{
                                transform: showSuccess ? "translateY(0)" : "translateY(10px)",
                                opacity: showSuccess ? 1 : 0,
                                transitionDelay: "200ms",
                            }}
                        >
                            Agende sua Visita
                        </h3>
                    </div>

                    {/* Book a call button */}
                    <button
                        onClick={handleBookCall}
                        onMouseEnter={() => setIsButtonHovered(true)}
                        onMouseLeave={() => setIsButtonHovered(false)}
                        className="group relative flex items-center gap-4 transition-all duration-500 cursor-pointer"
                        style={{
                            transform: showSuccess
                                ? isButtonHovered
                                    ? "translateY(0) scale(1.02)"
                                    : "translateY(0) scale(1)"
                                : "translateY(15px) scale(1)",
                            opacity: showSuccess ? 1 : 0,
                            transitionDelay: "150ms",
                        }}
                    >
                        {/* Left line */}
                        <div
                            className="h-px w-8 bg-zinc-800 transition-all duration-500 sm:w-16"
                            style={{
                                transform: isButtonHovered ? "scaleX(0)" : "scaleX(1)",
                                opacity: isButtonHovered ? 0 : 0.5,
                            }}
                        />

                        {/* Button content */}
                        <div
                            className="relative flex items-center gap-3 overflow-hidden rounded-full border border-zinc-800 px-8 py-4 transition-all duration-500 bg-black"
                            style={{
                                borderColor: isButtonHovered ? "#25D366" : "#27272A",
                                backgroundColor: isButtonHovered ? "#25D366" : "black",
                                boxShadow: isButtonHovered ? "0 10px 30px rgba(37,211,102,0.2)" : "0 4px 6px -1px rgba(0, 0, 0, 0.5)",
                            }}
                        >
                            <MessageCircle
                                className="size-5 transition-all duration-500"
                                strokeWidth={1.5}
                                style={{
                                    color: isButtonHovered ? "white" : "white",
                                }}
                            />
                            <span
                                className="text-base font-medium tracking-wide transition-all duration-500"
                                style={{
                                    color: isButtonHovered ? "white" : "white",
                                }}
                            >
                                Falar com Especialista
                            </span>
                            <ArrowUpRight
                                className="size-5 transition-all duration-500"
                                strokeWidth={1.5}
                                style={{
                                    color: isButtonHovered ? "white" : "white",
                                    transform: isButtonHovered ? "translate(3px, -3px) scale(1.1)" : "translate(0, 0) scale(1)",
                                }}
                            />
                        </div>

                        {/* Right line */}
                        <div
                            className="h-px w-8 bg-zinc-800 transition-all duration-500 sm:w-16"
                            style={{
                                transform: isButtonHovered ? "scaleX(0)" : "scaleX(1)",
                                opacity: isButtonHovered ? 0 : 0.5,
                            }}
                        />
                    </button>

                    {/* Subtle subtext */}
                    <span
                        className="text-xs tracking-widest uppercase text-zinc-500 transition-all duration-500"
                        style={{
                            transform: showSuccess ? "translateY(0)" : "translateY(10px)",
                            opacity: showSuccess ? 1 : 0,
                            transitionDelay: "450ms",
                        }}
                    >
                        Você será redirecionado ao WhatsApp
                    </span>
                </div>

                <div
                    className="flex items-center gap-3 transition-all duration-500"
                    style={{
                        opacity: isClicked ? 0 : 1,
                        transform: isClicked ? "translateY(-20px)" : "translateY(0)",
                        pointerEvents: isClicked ? "none" : "auto",
                    }}
                >
                    <span className="relative flex size-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />
                        <span className="relative inline-flex size-2 rounded-full bg-[#25D366]" />
                    </span>
                    <span className="text-sm font-medium tracking-widest uppercase text-zinc-400">
                        Unidades de pré lançamento
                    </span>
                </div>

                <div
                    className="group relative cursor-pointer w-full text-center"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={(e) => handleClick(e as unknown as React.MouseEvent<HTMLAnchorElement>)}
                    style={{
                        pointerEvents: isClicked ? "none" : "auto",
                    }}
                >
                    <div className="flex flex-col items-center gap-6">
                        <h2
                            className="relative text-center text-4xl font-light tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                            style={{
                                opacity: isClicked ? 0 : 1,
                                transform: isClicked ? "translateY(-40px) scale(0.95)" : "translateY(0) scale(1)",
                            }}
                        >
                            <span className="block overflow-hidden">
                                <span
                                    className="block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] text-white"
                                    style={{
                                        transform: isHovered && !isClicked ? "translateY(-8%)" : "translateY(0)",
                                    }}
                                >
                                    Viva o
                                </span>
                            </span>
                            <span className="block overflow-hidden">
                                <span
                                    className="block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75"
                                    style={{
                                        transform: isHovered && !isClicked ? "translateY(-8%)" : "translateY(0)",
                                    }}
                                >
                                    <span className="text-zinc-500 italic font-serif">Extraordinário</span>
                                </span>
                            </span>
                        </h2>

                        <div className="relative mt-8 flex size-20 items-center justify-center sm:size-24">
                            <div
                                className="pointer-events-none absolute inset-0 rounded-full border border-zinc-700 transition-all ease-out"
                                style={{
                                    borderColor: isClicked ? "black" : isHovered ? "white" : "#3F3F46",
                                    backgroundColor: isClicked ? "transparent" : isHovered ? "white" : "transparent",
                                    transform: isClicked ? "scale(3)" : isHovered ? "scale(1.1)" : "scale(1)",
                                    opacity: isClicked ? 0 : 1,
                                    transitionDuration: isClicked ? "700ms" : "500ms",
                                }}
                            />
                            <svg
                                className="size-8 transition-all ease-[cubic-bezier(0.16,1,0.3,1)] sm:size-10 fill-current"
                                viewBox="0 0 24 24"
                                style={{
                                    transform: isClicked
                                        ? "translate(100px, -100px) scale(0.5)"
                                        : isHovered
                                            ? "scale(1.1)"
                                            : "scale(1)",
                                    opacity: isClicked ? 0 : 1,
                                    color: isHovered && !isClicked ? "black" : "white",
                                    transitionDuration: isClicked ? "600ms" : "500ms",
                                }}
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </div>
                    </div>

                    <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block">
                        <div
                            className="h-px w-24 bg-zinc-800 transition-all duration-500"
                            style={{
                                transform: isClicked ? "scaleX(0) translateX(-20px)" : isHovered ? "scaleX(1.5)" : "scaleX(1)",
                                opacity: isClicked ? 0 : isHovered ? 1 : 0.5,
                            }}
                        />
                    </div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
                        <div
                            className="h-px w-24 bg-zinc-800 transition-all duration-500"
                            style={{
                                transform: isClicked ? "scaleX(0) translateX(20px)" : isHovered ? "scaleX(1.5)" : "scaleX(1)",
                                opacity: isClicked ? 0 : isHovered ? 1 : 0.5,
                            }}
                        />
                    </div>
                </div>

                <div
                    className="mt-12 flex flex-col items-center gap-4 text-center transition-all duration-500 delay-100"
                    style={{
                        opacity: isClicked ? 0 : 1,
                        transform: isClicked ? "translateY(20px)" : "translateY(0)",
                        pointerEvents: isClicked ? "none" : "auto",
                    }}
                >
                    <p className="max-w-md text-base leading-relaxed text-zinc-400">
                        Descubra o privilégio de morar em um empreendimento único na Barra Sul.
                        <br />
                        Agende uma conversa e conheça todos os detalhes.
                    </p>
                    <span className="text-xs tracking-widest uppercase text-zinc-600 mt-4">não fique de fora</span>
                </div>
            </div>
        </section>
    )
}
