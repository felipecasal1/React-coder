import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"
import "./Carrito.css"

const Carrito = ( ) => {
    const { carrito, removeItem, clearCart, totalPrice, totalQuantity } = useContext(CartContext)

    if (totalQuantity(carrito) === 0) {
        return (
            <div className="container-carrrito-vacio">
                <h1>No hay productos en tu carrito, a continuacion añade productos</h1>
                <Link to="/" className="link-product">Productos</Link>
            </div>
        )
    }







    const printCart = (carrito) => {
        return (
            <ul className="container-productos">
                {carrito.map((item) => (
                    <li key={item.id} className="each-product">
                        {item.name}  Precio: ${item.price} Cantidad: {item.cantidad} 
                        <button className="btn-x" onClick={() => removeItem(item.id)}>X</button>
                    
                    </li>
                ))}
            </ul>
        );
    };


    const precioFinal = totalPrice(carrito)
    return (
        <div className="container-precio">

            {printCart(carrito)}

            <h3 className="sub-total">Total: ${precioFinal}</h3>

            <button onClick={() => clearCart()}>Limpiar Carrito</button>

            <Link to="/checkout" >Check Out </Link>
        </div>

    )



}

export default Carrito