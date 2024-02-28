import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    return (

        <>
        <Link to="/">
        
                <h1>Apple</h1>
        </Link>
            <div className="container-nav">
                <ul className="opciones-nav">
                    <NavLink to="/" className="btn-nav">Home</NavLink>
                    <NavLink to={"/category/celulares"} className="btn-nav">Celulares</NavLink>
                    <NavLink to={"/category/relojes"} className="btn-nav">Relojes</NavLink>
                    <NavLink to={"/category/auriculares"} className="btn-nav">Auriculares</NavLink>
                </ul>
            </div>
            <CartWidget/>
            
    
        </>
    )
}

export default NavBar;