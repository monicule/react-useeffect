import { useState } from "react"

function AlertComponent({type, message}) {

const [showAlert, setShowAlert] = useState(true)

const closeAlert = (ev) => {
    ev.target.parentElement.parentElement.classList.add("fadeAlert")
    setTimeout(()=> {
        setShowAlert(false)

    }, 400)

}

return ((showAlert && <div className={`alert alert-${type}`}>
<div className="alert-close">
<span className="nr-1">{message}</span>
<button style={{background: "transparent"}} onClick={closeAlert}>X</button>
</div>
</div>

}

export default AlertComponent