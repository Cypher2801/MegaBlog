import React from "react";

export default function Button({
    children,
    className = "",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    ...props

}) {
    return (
        <button
            className={`py-2 px-4 rounded-lg ${bgColor} ${textColor} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}