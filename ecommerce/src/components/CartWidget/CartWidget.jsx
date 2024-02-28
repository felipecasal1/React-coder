import { useContext } from "react"
import "./CartWidget.css"
import { CartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {

    const { cantidadCarrito } = useContext(CartContext)

    return (
        <Link to="/carrito" className="logo-container">
            <i className="fa-solid fa-shop fa-5x "></i>
        </Link>
    )

}

export default CartWidget