import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import "./ItemCount.css"
import { Link } from "react-router-dom";


const ItemCount = ({ item }) => {
    const [initial, setInitial] = useState(1);
    const [errorStock, setErrorStock] = useState(false);
    const { handleAdd } = useContext(CartContext)




    const handleClick = (value) => {
        if (initial + value > 0 && initial + value <= item.stock) {
            setInitial(initial + value);
            setErrorStock(false);
        } else {
            initial + value >= item.stock && setErrorStock(true);
        }
    };


    
    const [quantityAdded, setQuantityAdded] = useState(0)
    
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
        console.log("se agrego")
    }
    const addProduct = () => {
        handleAdd(item, initial);
        handleOnAdd(initial)
    };




    return (
        <div >
            <div className="container-botones">
                <button
                    onClick={() => handleClick(-1)}>
                    -
                </button>
                <div>{initial}</div>
                <button
                    onClick={() => handleClick(1)}>
                    +
                </button>
                { 
                quantityAdded > 0 ? (
                    <Link to="/carrito" className="btn-terminar">Terminar Compra  </Link>
                ) : (
            <button onClick={addProduct} className="btn-agregar-carrito">
                Add to Cart
            </button>
                
                )
                }
            </div>
        </div>
    );
};

export default ItemCount