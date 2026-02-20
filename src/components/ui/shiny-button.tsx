"use client"

import React from "react"
import "./shiny-button.css"

interface ShinyButtonProps extends React.ComponentProps<"button"> {
    children: React.ReactNode
}

export function ShinyButton({ children, className = "", ...props }: ShinyButtonProps) {
    return (
        <button className={`shiny-cta [&_*]:pointer-events-none ${className}`} {...props}>
            <span className="pointer-events-none">{children}</span>
        </button>
    )
}
