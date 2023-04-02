// import {Container,Row,Card,Col, Button} from "react-bootstrap"
// import CartContext from "../Store/CartContext";
// import { useContext } from "react";
// const Products=()=>{
//   const ctx=useContext(CartContext)
    
// const productsArr = [

// {

// title: 'Colors',

// price: 100,

// imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

// },

// {

// title: 'Black and white Colors',

// price: 50,

// imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

// },

// {

// title: 'Yellow and Black Colors',

// price: 70,

// imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

// },

// {

// title: 'Blue Color',

// price: 100,

// imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

// }

// ]

   
  


// return (<>

     
//      <Row  xs={2} md={2}  className="mt-2" >
//       {productsArr.map((item) => ( 
//         <Col xs={4}  >
         
            
//             <Card.Body className="p-5">
//             <Card.Title className="mb-2">{item.title}</Card.Title>
             
//                <img   style={{width:"30%", height:"30%"}}  src={item.imageUrl} />
//               <Card.Text style={{display:"flex ",margin:"15px 0px 0 0"}} >
//               <h4> price- {item.price} </h4>
//               <Button onClick={()=>{ctx.addItem({...item,quantity:1})}} size="md" style={{display:"flex ",margin:"0 3px 0 9px"}} >Add-To-Cart</Button>
//               </Card.Text>
//             </Card.Body>

//         </Col>
//       ))}
//     </Row>



// </>)




// }
// export default Products
import {Container,Row,Card,Col, Button} from "react-bootstrap"
import { Link } from 'react-router-dom';
import CartContext from "../Store/CartContext";
import { useContext } from "react";
function Products() {
  const ctx=useContext(CartContext)
  const productsArr = [
    {
      id: 1,
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
      id: 2,
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
      id: 3,
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
      id: 4,
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
  ];

  return (
    <Row xs={2} md={2} className="mt-2">
      {productsArr.map((item) => (
        <Col xs={4} key={item.id}>
          <Link to={`/product/${item.id}`} style={{ textDecoration: 'none', color: 'black' }}
           onClick={(e) => {
            if (e.target.tagName === "BUTTON") {
              e.preventDefault();
              // handleAddToCart(item);
            }
          }}>
            <Card.Body className="p-5">
              <Card.Title className="mb-2">{item.title}</Card.Title>
              <img style={{ width: "30%", height: "30%" }} src={item.imageUrl} alt={item.title} />
              <Card.Text style={{ display: "flex ", margin: "15px 0px 0 0" }}>
               
                <h4> price- {item.price} </h4>
                <Button onClick={()=>{ctx.addItem({...item,quantity:1})}} size="md" style={{display:"flex ",margin:"0 3px 0 9px"}} >Add-To-Cart</Button>
              </Card.Text>
            </Card.Body>
          </Link>
        </Col>
      ))}
    </Row>
  );
}

export default Products;
