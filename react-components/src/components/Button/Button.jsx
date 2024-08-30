import React from "react"


export default function Button({ children, className, size, variant, ...rest }) {
    let sizeClass = size && `button-${size}`
    let variantClass = variant && `button-${variant}`
    const allClasses = `${sizeClass} ${variantClass} ${className}`

    return (
        <button className={allClasses} {...rest}>
            {children}
        </button>
    )
}