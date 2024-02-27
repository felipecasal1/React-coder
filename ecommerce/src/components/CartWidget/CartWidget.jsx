import { useContext } from "react"
import "./CartWidget.css"
import { CartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {

const {carrito} = useContext(CartContext)

    return(
        <Link to="/carrito" className="logo-container">
        <a href=""><span>{carrito}</span><i className="fa-solid fa-shop fa-5x "></i></a>
        
    </Link>
    )

}

export default CartWidget