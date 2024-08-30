import React from "react"
import file from "../assets/file-text.svg"
import { FiFileText } from "react-icons/fi";


const Card = ({children, color, icon, title}) => {
    
    let styles = `card ${color}`
    
    return (
        <div className={styles}>
            <div className="card-header">
            <div className="card-icon">{icon} </div>
                <h5 className="card-title">{title}</h5>
            </div>
            <p className="card-text">
            {children}
            </p>
        </div>
    )
    
}

export default Card