import { useContext, useState } from "react"
import { CartContext } from "../../context/cartContext"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../service/firebase/firebaseConfig"
import "./CheckoutForm.css"
import { Link } from "react-router-dom"

const CheckoutForm = ({ }) => {


    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const { carrito } = useContext(CartContext)

    const [idDelProducto, setIdDelProducto] = useState("")


    const order = {
        orderData: {
            name,
            phone,
            email,
            carrito,

        }
    }



    const handleConfirm = (e) => {
        e.preventDefault()
        const orderCollection = collection(db, "orders")

        addDoc(orderCollection, order)
            .then(({ id }) => {
                setIdDelProducto(id)
            })
    }



        const [showText, setShowText] = useState(false);

        const handleButtonClick = () => {
            setShowText(true);
        };
    return (
        <div>
            <form onSubmit={handleConfirm} className="container-form">


                <label className="container-label">
                    Nombre
                    <input
                        type="text"
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                    />
                </label>



                <label className="container-label">
                    Telefono
                    <input
                        type="text"
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)}
                    />
                </label>
                <label className="container-label">
                    Email
                    <input

                        type="email"
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                    />
                </label>
                <div>
                    <button type="submit" className="btn-orden" onClick={handleButtonClick}> Crear Orden </button>
                    {showText && <div>
                        <p>Tu Orden ah sido Creada!! </p>
                        <p>ID de la orden : {idDelProducto}</p>
                        </div>
                    }
                </div>
            </form>
        </div>
    )

}

export default CheckoutForm