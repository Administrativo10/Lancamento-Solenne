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
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]" />

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
                            <ArrowUpRight
                                className="size-8 transition-all ease-[cubic-bezier(0.16,1,0.3,1)] sm:size-10"
                                style={{
                                    transform: isClicked
                                        ? "translate(100px, -100px) scale(0.5)"
                                        : isHovered
                                            ? "translate(2px, -2px)"
                                            : "translate(0, 0)",
                                    opacity: isClicked ? 0 : 1,
                                    color: isHovered && !isClicked ? "black" : "white",
                                    transitionDuration: isClicked ? "600ms" : "500ms",
                                }}
                            />
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
