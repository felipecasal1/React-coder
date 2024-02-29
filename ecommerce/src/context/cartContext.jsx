import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [carrito, setCarrito] = useState([]);


	const handleAdd = (item, quantity) => {
		if (isInCart(item.id)) {
			alert("ya esta en el carrito")
		} else {

			setCarrito([...carrito, { ...item, cantidad: quantity }]);
		}

	};

	const isInCart = (itemId) => {
		return carrito.some(prod => prod.id === itemId)
	}

	const clearCart = () => {
		setCarrito([])
	};

	const totalPrice = (cartItems) => {
	
		const getItemPrice = (item) => item.price * item.cantidad;

		const total = cartItems.reduce((accumulator, item) => accumulator + getItemPrice(item), 0);

		console.log(cartItems)
		return total;
	};

	

	const removeItem = (productId) => {

		const ProductoEliminado = carrito.filter((item) => item.id !== productId);

		setCarrito(ProductoEliminado)
	};



	const totalQuantity = (cartItems) => {
		const getItemQuantity = (item) => item.quantity;

		const totalQuantity = cartItems.reduce((accumulator, item) => accumulator + getItemQuantity(item), 0);

		return totalQuantity;
	};



	useEffect(() => {
	
	}, [carrito]);

	return (
		<CartContext.Provider
			value={{
				carrito,
				setCarrito,
				handleAdd,
				isInCart,
				clearCart,
				totalPrice,
				removeItem,
				totalQuantity,
			}}>
			{children}
		</CartContext.Provider>
	);
};