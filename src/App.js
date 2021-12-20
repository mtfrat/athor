import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Index from './components/Index/Index';
import { Carrito } from './components/Carrito/Carrito';
import { ItemDetailContainer } from './components/ItemListContainer/ItemDetailContainer';
import CartContextProvider from './context/CartContext';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' component={Index} />
            <Route exact path='/vehiculos/:categoria' component={ItemListContainer} />
            <Route exact path='/detalle/:detalleID' component={ItemDetailContainer} />
            <Route exact path='/carrito' component={Carrito} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
