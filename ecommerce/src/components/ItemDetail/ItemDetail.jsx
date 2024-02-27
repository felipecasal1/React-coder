import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({ itemFiltered }) => {
	return (
		<section>
			<h3 >{itemFiltered.name}</h3>
		
			<div >
				Price $ {itemFiltered}
			</div>

			<div >Stock {itemFiltered}</div>
			<div>
				{}
			</div>
			<ItemCount itemFiltered={itemFiltered} />
		</section>
	);
};

export default ItemDetail