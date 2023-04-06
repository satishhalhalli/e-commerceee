// import { BrowserRouter as Router, Route, Switch, NavLink , Redirect} from 'react-router-dom';
// import {Container, Navbar} from 'react-bootstrap';

// import Products from './Sharp/Products';
// import CartBtn from './Cart/CartBtn';
// import Cart from './Cart/Cart';
// import { useContext, useState } from 'react';
// import CartProvider from './Store/CartProvider';
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';
// import ProductDetails from './Sharp/ProductDetails';
// import AuthProvider, { LoginContext } from './Login/LoginContext';

// import Login from './Login/Login';
// function App() {
//   const [state, setState] = useState(false);

//   const loginCtx=useContext(LoginContext);

//   // function handleLogin(){
//   //   loginCtx.setIsLoggedIn(true);
//   // }
//   return (
//     <Router>
//       <CartProvider>
//         <AuthProvider>
//         <Navbar bg="success" expand="lg">
//           <Container>
//             <Navbar.Brand href="#"> E-Commerce</Navbar.Brand>
//             <NavLink to="/" exact activeClassName="active" style={{color : 'black'}}>Home</NavLink>
//             <NavLink to="/about" activeClassName="active" style={{color : 'black'}}>About</NavLink>
//            {!loginCtx.isLoggedIn && <NavLink to="/products" activeClassName="active" style={{color : 'black'}}>Products</NavLink>}
//             <NavLink to="/contact"  activeClassName="active" style={{color : 'black'}}>Contact Us</NavLink>
//            {loginCtx.isLoggedIn ? null :  <NavLink to='/login' activeClassName='active'  style={{color : 'black'}}>login</NavLink>}
//             <CartBtn onClick={() => setState(true)} />
//           </Container>
//         </Navbar>

//         {state &&  <Cart onClose={() => setState(false)} />}

//         <Switch>
//            <Route path="/" exact component={Home} /> 
//           <Route path="/about" component={About} />
//            <Route path="/products" component={Login} />
         
//           <Route path="/product/:id" component={ProductDetails} />

//       {/* <Route exact path="/" component={Products} /> */}
//           <Route path="/contact" component={Contact} />
//           {!loginCtx.isLoggedIn && <Route path='/login' component={Login} />}
//           <Route path="/Sharp/products" exact >  <Products /></Route> 
//         </Switch>
//         </AuthProvider>
//       </CartProvider>
      
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Route, Switch, NavLink , Redirect} from 'react-router-dom';
import {Container, Navbar} from 'react-bootstrap';

import Products from './Sharp/Products';
import CartBtn from './Cart/CartBtn';
import Cart from './Cart/Cart';
import { useContext, useState } from 'react';
import CartProvider from './Store/CartProvider';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import ProductDetails from './Sharp/ProductDetails';
import AuthProvider, { LoginContext } from './Login/LoginContext';

import Login from './Login/Login';
function App() {
  const [state, setState] = useState(false);

  const loginCtx=useContext(LoginContext);

  return (
    <Router>
      <CartProvider>
        
        <Navbar bg="success" expand="lg">
          <Container>
            <Navbar.Brand href="#"> E-Commerce</Navbar.Brand>
            <NavLink to="/" exact activeClassName="active" style={{color : 'black'}}>Home</NavLink>
            <NavLink to="/about" activeClassName="active" style={{color : 'black'}}>About</NavLink>
            {!loginCtx.isLoggedIn && <NavLink to="/products" activeClassName="active" style={{color : 'black'}}>Products</NavLink>}
            <NavLink to="/contact"  activeClassName="active" style={{color : 'black'}}>Contact Us</NavLink>
            {!loginCtx.isLoggedIn && <NavLink to='/login' activeClassName='active'  style={{color : 'black'}}>login</NavLink>}
            <CartBtn onClick={() => setState(true)} />
          </Container>
        </Navbar>

        {state &&  <Cart onClose={() => setState(false)} />}

        <Switch>
           <Route path="/" exact component={Home} /> 
          <Route path="/about" component={About} />
           <Route path="/products" component={Login} />
         
          <Route path="/product/:id" component={ProductDetails} /> 

      <Route exact path="/" component={Products} />
           <Route path="/contact" component={Contact} />
          {!loginCtx.isLoggedIn && <Route path='/login' component={Login} />}
          <Route path="/Sharp/products" exact >  <Products /></Route> 
        </Switch>
        {/* <Switch>
  <Route path="/" exact component={Home} /> 
  <Route path="/about" component={About} />
  <Route path="/product/:id" component={ProductDetails} />
  <Route path="/contact" component={Contact} />

  {!loginCtx.isLoggedIn && <Route path="/login" component={Login} />}
  {loginCtx.isLoggedIn ? (
    <Route path="/products" component={Products} />
  ) : (
    <Redirect to="/login" />
  )}

  <Route path="/Sharp/products" exact>  
    <Products />
  </Route> 
</Switch> */}

      </CartProvider>
      
    </Router>
  );
}

export default App;
