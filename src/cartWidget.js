
import { Link } from "react-router-dom"
import { useContext } from "react";
import { contexto } from "./contexto/CartContext";


const CartWidget = () => {
    
    const {cantidadTotal} = useContext(contexto)
    return (
     <>
     <Link to ="/carrito">
      {cantidadTotal()}
      <button class="fas fa-cart-arrow-down"></button>
      </Link>
      
     </>
      );
}
 
export default CartWidget;