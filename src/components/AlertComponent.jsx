import { useState, useEffect } from "react"

function AlertComponent({type, message, delay}) {

const [showAlert, setShowAlert] = useState(true)

const closeAlert = (ev) => {
    ev.target.parentElement.parentElement.classList.add("fadeAlert")
    setTimeout(()=> {
        setShowAlert(false)

    }, 400)

}

useEffect(()=> {
delay && setTimeout(() => {
    
})
})



return ((showAlert && <div className={`alert alert-${type}`}>
<div className="alert-close">
<span className="mr-1">{message}</span>
<button style={{background: "transparent"}} onClick={closeAlert}>X</button>
</div>
</div>))
}

export default AlertComponent