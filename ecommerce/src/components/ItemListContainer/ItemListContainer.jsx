
import { useEffect, useState } from "react"
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"


import { useParams } from "react-router-dom"
import { collection, getDocs, where , query } from "firebase/firestore"
import { db } from "../../service/firebase/firebaseConfig"


const ItemListContainer = ({  }) => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()




    useEffect(() => {
        const collectionRef = categoryId

            ? query(collection(db, "items"), where("category", "==", categoryId))
            : collection(db, "items")

        getDocs(collectionRef)
            .then(response => {
                const itemsAdapted = response.docs.map(doc => {
            
                    const data = doc.data()
                    return {...data, id: doc.id }
                    
                })
                itemsAdapted.reverse()
                
                setProducts(itemsAdapted)
            })
            .catch(error =>{
                console.error(error)
            })


            
        }, [categoryId])

    return (

        <div>
            <ItemList products={products} />
        </div>

    )

}

export default ItemListContainer