import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({itemFiltered }) => {
	return (
		<section>
			<h3 >{itemFiltered.name}</h3>
		
			<div >
				Price $ {itemFiltered.price}
			</div>

			<div >Stock {itemFiltered.stock}</div>
			<div>
				{}
			</div>
			<ItemCount item={itemFiltered} />
		</section>
	);
};

export default ItemDetail