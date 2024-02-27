import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({itemFiltered, name }) => {
	return (
		<section>
			<h3 >{name}</h3>
		
			<div >
				Price $ {}
			</div>

			<div >Stock {}</div>
			<div>
				{}
			</div>
			<ItemCount item={itemFiltered} />
		</section>
	);
};

export default ItemDetail