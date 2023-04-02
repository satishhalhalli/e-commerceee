import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import {Container, Navbar} from 'react-bootstrap';

import Products from './Sharp/Products';
import CartBtn from './Cart/CartBtn';
import Cart from './Cart/Cart';
import { useState } from 'react';
import CartProvider from './Store/CartProvider';
import Home from './Home';
import About from './About';
import Contact from './Contact';
function App() {
  const [state, setState] = useState(false);
  return (
    <Router>
      <CartProvider>
        <Navbar bg="success" expand="lg">
          <Container>
            <Navbar.Brand href="#"> E-Commerce</Navbar.Brand>
            <NavLink to="/" exact activeClassName="active" style={{color : 'black'}}>Home</NavLink>
            <NavLink to="/about" activeClassName="active" style={{color : 'black'}}>About</NavLink>
            <NavLink to="/products" activeClassName="active" style={{color : 'black'}}>Products</NavLink>
            <NavLink to="/contact"  activeClassName="active" style={{color : 'black'}}>Contact Us</NavLink>
            <CartBtn onClick={() => setState(true)} />
          </Container>
        </Navbar>

        {state &&  <Cart onClose={() => setState(false)} />}

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/products" component={Products} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </CartProvider>
    </Router>
  );
}

export default App;