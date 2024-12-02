import "./CartWidget.css"
import { Link } from "react-router-dom"

const CartWidget = () => {



    return (
        <Link to="/carrito" className="logo-container">
            <i className="fa-solid fa-shop fa-2x "></i>
        </Link>
    )

}

export default CartWidget