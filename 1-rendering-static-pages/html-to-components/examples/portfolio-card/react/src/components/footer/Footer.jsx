import "./style.css"
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 
export const Footer= ()=>{
    return(
        <div>
             <hr/>
      <div className="footer-section">
        <span className="whatsapp"><FontAwesomeIcon icon="fab fa-whatsapp" /></span>
        <span className="github"><FontAwesomeIcon icon="fa-brands fa-github" /></span>
        <span className="snapchat"><FontAwesomeIcon icon="fab fa-reddit"/></span>
        <span className="instagram"><FontAwesomeIcon icon="fab fa-instagram"/></span>
      </div>
      </div>
)}