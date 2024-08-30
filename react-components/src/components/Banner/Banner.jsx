import React from "react"
import error from "../../assets/error.svg"
import info from "../../assets/info.svg"
import success from "../../assets/success.svg"
import warning from "../../assets/warning.svg"
import { FiAlertTriangle } from "react-icons/fi"
import { RiErrorWarningFill } from "react-icons/ri"
import { RiInformationFill } from "react-icons/ri"
import { RiAlertFill } from "react-icons/ri"
import { RiCheckboxCircleFill } from "react-icons/ri"
import { PiInfoFill } from "react-icons/pi";


const Banner = ({variant, title, children}) => {
    
    let styles = `banner ${variant}`
    
    let icon
    if (variant === "success") icon = <RiCheckboxCircleFill size={24}/>
    if (variant === "warning") icon = <RiAlertFill size={24}/>
    if (variant === "error") icon = <RiErrorWarningFill size={24}/>
    if (variant === "info") icon = <PiInfoFill size={24}/>
    
    
    return (
        <div className={styles}>
        
            <div className="banner-header">
               {icon}
                {title}
            </div>
         {children}
        </div>
    )
    
}

export default Banner