import './App.css';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import DarkBackround from './components/DarkBackround/DarkBackround';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

      <Routes>
       <Route path="/" element={<ItemListContainer greeting={"Bienvenido"} />} />
       <Route path='/category/:categoryId' element={<ItemListContainer />}/>
       <Route path='/item/:itemId' element={ <ItemDetailContainer />}/>
       <Route path='*' element={ <h1 className='error-route'> Error</h1>}/>

      </Routes>


      </BrowserRouter>
    </>
  );
}

export default App;
