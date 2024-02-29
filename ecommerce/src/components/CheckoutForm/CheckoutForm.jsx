import { useState } from "react"



const CheckoutForm = ({onConfirm}) =>{


    const {name,setName} =useState("")
    const {phone,setPhone} =useState("")
    const {email,setEmail} =useState("")

    const handleConfirm = (event) =>{
        event.preventDefault()

        const userData ={
            name,phone,email
        }

        onConfirm(userData)
    }

    const setter = (e) =>{
        setName(e.value)
    }
    return (
        <div>
            <form onSubmit={handleConfirm}>
                <label>
                    nombre
                    <input 
                    type="text"
                    value={name}
                    onSubmit={(target) => setName(target.value)}
                    />
                    <button></button>
                </label> 
                <label>
                    Telefono
                    <input 
                    type="text"
                    value={phone}
                    onChange={({target}) => setPhone(target.value)}
                    />
                </label>
                <label>
                    Email
                    <input 
                    type="email"
                    value={email}
                    onChange={({target}) => setEmail(target.value)}
                    />
                </label>
                <div>
                    <button type="submit" > crear Orden</button>
                </div>
            </form>
        </div>
    )

}

export default CheckoutForm