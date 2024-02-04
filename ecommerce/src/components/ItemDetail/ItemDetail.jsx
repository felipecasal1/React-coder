import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"

const ItemDetail = ({ name, price, Img, stock, description, category, quantity }) => {
    return (
        <>


            <article className="container-verDetalle" >


                <img className="img-item" src={Img} alt={name} />




                <h2>
                    {name}
                </h2>

                <p>
                    precio: {price}
                </p>
                <p>
                    stock: {stock}
                </p>
                <p>
                    Categoria: {category}
                </p>
                <p>
                    Descripcion: {description}
                </p>

              
          
          <ItemCount initial={0} stock={stock} onAdd={quantity =>{console.log(`se agregaron ${quantity} productos`)}}/>


            </article>


        </>
    )
}

export default ItemDetail