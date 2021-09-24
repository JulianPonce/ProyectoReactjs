import { useContext } from "react";
import { contexto } from "../contexto/CartContext";

const CartView = () => {
  const { precioTotal, carrito, eliminarProducto,clear } = useContext(contexto);

  return (
    <>
     <div className = "carrito">
        <h1>carrito</h1>
        {precioTotal()}
        {carrito.map((element) => {
          return (
            <>
            <h2>{element.categoria}</h2>
            <button onClick={() => eliminarProducto(element.id)}>Borrar item</button>
            
           </>
           )
        
      })}
      <button onClick={() => clear()}>vaciar Carrito</button>
    </div>
    </>
  );
};

export default CartView;