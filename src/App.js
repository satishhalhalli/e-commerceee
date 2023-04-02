import { Container, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import Products from './Sharp/Products';
import CartBtn from './Cart/CartBtn';
import Cart from './Cart/Cart';
import { useState } from 'react';
import CartProvider from './Store/CartProvider';
import About from './About/About';
// import Home from './Home';

function App() {
  const [state, setState] = useState(false);

  return (
    <>
      <CartProvider>
      <Router>
        <Navbar bg="success" expand="lg">
          <Container>
            <Navbar.Brand href="#">E-Commerce</Navbar.Brand>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <CartBtn onClick={() => setState(true)} />
          </Container>
        </Navbar>

        {state && <Cart onClose={() => setState(false)} />}

        
          <Switch>
            <Route exact path="/" component={Products} />
            <Route path="/about" component={About} />
            {/* <Route path="/home" component={Home} /> */}
          </Switch>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
