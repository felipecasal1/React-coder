import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"


const Carrito = () => {
    const { carrito, isInCart, removeItem, clearCart, totalPrice, totalQuantity } = useContext(CartContext)

    if (totalQuantity(carrito) === 0) {
        return (
            <div>
                <h1>No hay productos en tu carrito</h1>
                <Link to="/">Productos</Link>
            </div>
        )
    }







    const printCart = (carrito) => {
        return (
            <ul>
                {carrito.map((item) => (
                    <li key={item.id}>
                        {item.name} - Precio: ${item.price} - Cantidad: {item.cantidad}
                        <button onClick={() => removeItem(item.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        );
    };


    const precioFinal = totalPrice(carrito)
    return (
        <div>

            {printCart(carrito)}

            <h3>Total: {precioFinal}</h3>

            <button onClick={() => clearCart()}>Limpiar Carrito</button>
        </div>

    )



}

export default Carrito