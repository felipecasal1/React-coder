import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"




const ItemDetail = ({ itemFiltered }) => {





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