import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import {Container, Navbar} from 'react-bootstrap';

import Products from './Sharp/Products';
import CartBtn from './Cart/CartBtn';
import Cart from './Cart/Cart';
import { useState } from 'react';
import CartProvider from './Store/CartProvider';
import Home from './Home';
import About from './About';

function App() {
  const [state, setState] = useState(false);
  return (
    <Router>
      <CartProvider>
        <Navbar bg="success" expand="lg">
          <Container>
            <Navbar.Brand href="#"> E-Commerce</Navbar.Brand>
            <NavLink to="/" exact activeClassName="active">Home</NavLink>
            <NavLink to="/about" activeClassName="active">About</NavLink>
            <NavLink to="/products" activeClassName="active">Products</NavLink>
            <CartBtn onClick={() => setState(true)} />
          </Container>
        </Navbar>

        {state &&  <Cart onClose={() => setState(false)} />}

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/products" component={Products} />
        </Switch>
      </CartProvider>
    </Router>
  );
}

export default App;