import { useParams } from "react-router-dom";
import productsArr from './ProductsArr';// assuming that productsArr is defined in a separate data file
import CartContext from "../Store/CartContext";
import { useContext } from "react";
import { Button } from "react-bootstrap";
const ProductDetails = () => {

  const ctx=useContext(CartContext)

  const { id } = useParams();
  const productId = parseInt(id);
  const product = productsArr.find((p) => p.id === productId);
 

 
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.imageUrl} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <Button onClick={() => ctx.addItem({...product, quantity: 1})} size="md" style={{display:"flex ",margin:"0 3px 0 9px"}} >Add-To-Cart</Button>
      <p style={{margin: 0}}>
  {" "}
  <span style={{fontSize: "38px", color: "gold"}}>
    4 <span style={{fontSize: "38px"}}>*</span>
  </span>{" "}
  <span style={{fontSize: "38px", color: "#555"}}>
    15,779 ratings and 1,720 reviews
  </span>
</p>

    </div>
  );
};

export default ProductDetails;
