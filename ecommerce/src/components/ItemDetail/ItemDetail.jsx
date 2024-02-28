import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../../context/cartContext";




const ItemDetail = ({ itemFiltered }) => {

	// const [quantityAdded, setQuantityAdded] = useState(0)

	const {carrito} = useState(CartContext)


	// const handleOnAdd = (quantity) => {
	// 	setQuantityAdded(quantity)
	// 	console.log("se agrego")
	// }

	return (
		<section className="container-componente">
			<img src={itemFiltered.Img} alt="" />

			<div>
				<h3 >{itemFiltered.name}</h3>
				
				<p>Precio : $ {itemFiltered.price} </p>
				
				<span>Stock : {itemFiltered.stock}</span>
				
				<p> {itemFiltered.description}</p>

			</div>
        
		
			<footer>
							<ItemCount item={itemFiltered} />

			</footer>
		</section>

	);
};

export default ItemDetail