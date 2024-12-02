import "./Item.css"
import { Link } from "react-router-dom"


const Item = ({ id, name, Img, price, stock }) => {
    return (
        <>
            <article className="container-article">
                <h2>
                    {name}
                </h2>
                <img className="img-item" src={Img} alt={name} />
                <p>
                    precio: {price}$
                </p>
                <p>
                    stock: {stock}
                </p>
                <Link to={`/item/${id}`} className="ver-detalle">Ver Detalle</Link>   
            
            </article>
        </>
    )
}

export default Item