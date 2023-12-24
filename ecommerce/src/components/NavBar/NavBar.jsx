import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (

        <>
                <h1>DirtBnb</h1>
            <div className="container-nav">
                <ul className="opciones-nav">
                    <li className="btn-nav"> <a href="" className="btn-nav">Home</a></li>
                    <li className="btn-nav"><a href="" className="btn-nav">Alojamiento</a></li>
                    <li className="btn-nav"><a href="" className="btn-nav">Contacto</a></li>

                </ul>
            </div>
            <CartWidget/>
        </>
    )
}

export default NavBar;