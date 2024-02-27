import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"



const Carrito = () => {
    const [carrito , clearCart] = useContext(CartContext)

    if (carrito === 0) {
        return (
            <div>
                <h1>No hay items en el carrito </h1>
                <Link to="/">Productos</Link>
            </div>
        )
    }
    
    return (
        <div>
            <button onClick={() => clearCart()}> Limpiar Carrito</button>
        </div>
    )

}

export default Carrito