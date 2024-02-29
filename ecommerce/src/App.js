import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/cartContext';
import Carrito from "./components/Carrito/Carrito"
import CheckoutForm from './components/CheckoutForm/CheckoutForm';




function App() {


  return (

    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />

          <Routes>
            <Route path="/" element={<ItemListContainer greeting={"Bienvenido"} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/carrito' element={<Carrito/>}/>
            <Route path='/checkout' element={<CheckoutForm/>} />
            <Route path='*' element={<h1 className='error-route'> Error</h1>} />

          </Routes>


        </CartProvider>
      </BrowserRouter>
    </>

  );
}

export default App;
