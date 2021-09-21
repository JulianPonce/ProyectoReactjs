import CartView from "./componentes/CartView";
import { Link } from "react-router-dom"

const CartWidget = () => {
    return (
     <>
      <Link to = {CartView}> 
      <button class="fas fa-cart-arrow-down "></button>
      </Link>
      
     </>
      );
}
 
export default CartWidget;