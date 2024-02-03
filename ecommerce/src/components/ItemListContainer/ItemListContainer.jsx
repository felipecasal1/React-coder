
import { useEffect, useState } from "react"
import { getProductsByCategory, getProducts } from "../../asyncMock"
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"


import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) =>{
    const [products, setProduct] = useState([])
    
    const { categoryId }  = useParams()

   useEffect(()=>{
    const asyncFunc = categoryId ? getProductsByCategory : getProducts

    asyncFunc(categoryId)
    .then(response =>{
        setProduct(response)
    })
    .catch(error =>{
        console.error(error)
    }, [categoryId])
   })

   
    return(
      
       <div>
        <h1>{greeting}</h1>
        <ItemList products={products}/>
       </div>
       
    )

}

export default ItemListContainer