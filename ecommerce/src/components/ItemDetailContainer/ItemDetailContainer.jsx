import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail"
import { Loading } from "../Loading/Loading";
import { getProductsById }  from "../../asyncMock"

export const ItemDetailContainer = () => {
	const [itemFiltered, setItemFiltered] = useState({});

	const [loading, setLoading] = useState(true);

	const { itemId } = useParams();

	useEffect(() => {
		setLoading(true);

		getProductsById(itemId)
			.then((response) => setItemFiltered(response))
			.finally(
				setTimeout(() => {
					setLoading(false);
				}, 2000)
			);
	}, [itemId]);



	return loading ? <Loading /> : <ItemDetail itemFiltered={itemFiltered} />;
};


export default ItemDetailContainer