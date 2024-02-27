import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";


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

    const addProduct = () => {
        handleAdd(item, initial);

    };




    return (
        <div className="container--itemCount">
            <div className="container--itemCount--buttons">
                <button
                    className="itemCount--button"
                    onClick={() => handleClick(-1)}>
                    -
                </button>
                <div className="itemCount--count">{initial}</div>
                <button
                    className="itemCount--button"
                    onClick={() => handleClick(1)}>
                    +
                </button>
            </div>
            <button onClick={addProduct} className="itemCount--buttonCart">
                Add to Cart
            </button>
        </div>
    );
};

export default ItemCount