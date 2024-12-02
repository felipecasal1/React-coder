import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar"
const NavBar = () => {
    return (

        <>
    
            <div className="container-nav">
                <ul className="opciones-nav">
                    <NavLink to="/" className="btn-nav">Home</NavLink>
                    <NavLink to={"/products"}  className="btn-nav">Productos</NavLink>
                    <NavLink to={"/category/celulares"} className="btn-nav">Celulares</NavLink>
                    <NavLink to={"/category/relojes"} className="btn-nav">Relojes</NavLink>
                    <NavLink to={"/category/auriculares"} className="btn-nav">Auriculares</NavLink>
                    <CartWidget/>
                    <SearchBar/>
                </ul>
            </div>
            
    
        </>
    )
}

export default NavBar;