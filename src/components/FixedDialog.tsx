"use client";

import { ReactNode } from "react";

export default function FixedDialog({ children, isOpen, outsideOnClick }: { children?: ReactNode, isOpen: boolean, outsideOnClick?: () => void }) {
    return (
        <div className={`fixed z-50 top-0 left-0 w-full h-full ${isOpen ? "flex justify-center items-center" : "hidden"}`}>
            <div className="w-full h-full bg-black bg-opacity-50 absolute z-10" onClick={outsideOnClick}></div>
            <div className="z-20">{children}</div>
        </div>
    )
}
