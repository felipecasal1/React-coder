import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [carrito, setCarrito] = useState([]);


	const handleAdd = (item, quantity) => {
		if (isInCart(item.id)) {
			console.log("ya esta en el carrito")
		} else {
			
			setCarrito([...carrito, { ...item, cantidad: quantity }]);
		}
	
	};

	const isInCart = (itemId) =>{
		return carrito.some(prod => prod.id === itemId)
	}

	const cantidadCarrito = () => {

		return carrito.length;
	};



	useEffect(() => {
		console.log(carrito);
	}, [carrito]);

	return (
		<CartContext.Provider
			value={{
				carrito,
				setCarrito,
				handleAdd,
				cantidadCarrito,
			}}>
			{children}
		</CartContext.Provider>
	);
};