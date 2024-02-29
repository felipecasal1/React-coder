import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail"
import { Loading } from "../Loading/Loading";

import { getDoc, doc } from "firebase/firestore"
import { db } from "../../service/firebase/firebaseConfig"

export const ItemDetailContainer = () => {

	const [itemFiltered, setItemFiltered] = useState({});

	const [loading, setLoading] = useState(true);

	const { itemId } = useParams();

	useEffect(() => {
		setLoading(true);

		const docRef = doc(db, "items", itemId)


		getDoc(docRef)
			.then(response => {
				const data = response.data()
				const itemAdapted = { id: response.id, ...data }

				setItemFiltered(itemAdapted)
			})
			.catch(error => {
				console.error(error)
			})
			.finally(() => {
				setLoading(false)
			})
	}, [itemId]);




	return loading ? <Loading /> : <ItemDetail itemFiltered={itemFiltered} />;
};


export default ItemDetailContainer