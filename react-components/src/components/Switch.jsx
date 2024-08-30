import React from "react"
import useToggle from ".././hooks/useToggle.js"

export default function Switch({ onChange = false }) {
    const [on, toggle] = useToggle()
    return (
        <>
            {
                on ?
                    <div onClick={toggle} className="switch">
                        <div className="switch-btn">
                        </div>
                    </div>
                    :
                    <div onClick={toggle} className="switch switchOff">
                        <div className="switch-btn">
                        </div>
                    </div>
            }
        </>
    )
}