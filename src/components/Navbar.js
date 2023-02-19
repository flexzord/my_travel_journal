import logo from "../images/logo.png"
import "./Navbar.css"

export default function Navbar(){
    return(
        <div className="nav">
            <img src={logo}></img>
            <h3>my travel journal</h3>
        </div>
    )
}