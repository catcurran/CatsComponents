import React from "react"

const Badge= ({children, color, shape}) => {
    
    let styles = `badge ${color} ${shape}`
    
    return (
        <div className={styles}>
        {children}
        </div>
    )
    
}

export default Badge