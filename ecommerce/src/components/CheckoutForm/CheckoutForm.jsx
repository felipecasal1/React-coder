import { useContext, useState } from "react"
import { CartContext } from "../../context/cartContext"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../service/firebase/firebaseConfig"


const CheckoutForm = ({}) => {


    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const {carrito, totalPrice} = useContext(CartContext)


    const order = {
            orderData   : {
                name,
                phone,
                email,
                carrito,
                totalPrice,

        }
    }




    const handleConfirm = (e) => {
        e.preventDefault()
        const orderCollection = collection(db, "orders")

        addDoc(orderCollection, order)
            .then(({ id }) => console.log(id, "dar el ID"))

        console.log(order)

    }
    return (
        <div>
            <form onSubmit={handleConfirm}>


                <label>
                    nombre
                    <input
                        type="text"
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                    />
                </label>



                <label>
                    Telefono
                    <input
                        type="text"
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)}
                    />
                </label>
                <label>
                    Email
                    <input
                        type="email"
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                    />
                </label>
                <div>
                    <button type="submit" > Crear Orden </button>
                </div>
            </form>
        </div>
    )

}

export default CheckoutForm