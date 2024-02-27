import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {products} from "../Data/items"
import ItemDetail from "../ItemDetail/ItemDetail"
import { Loading } from "../Loading/Loading";
import { getProducts }  from "../../asyncMock"

export const ItemDetailContainer = () => {
	const [itemFiltered, setItemFiltered] = useState(null);

	const [loading, setLoading] = useState(true);

	const { idItem } = useParams();

	useEffect(() => {
		setLoading(true);

		getProducts(idItem)
			.then((response) => setItemFiltered(response))
			.finally(
				setTimeout(() => {
					setLoading(false);
				}, 2000)
			);
	}, [idItem]);



	return loading ? <Loading /> : <ItemDetail itemFiltered={itemFiltered} name={"hola"} />;
};


export default ItemDetailContainer