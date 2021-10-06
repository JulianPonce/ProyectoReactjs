import { useContext } from "react";
import { contexto } from "../contexto/CartContext";

const CartView = () => {
  const { precioTotal, carrito, eliminarProducto,clear } = useContext(contexto);

  return (
    <>
     <div className = "carrito">
        <h1>carrito</h1>
        
        {carrito.map((element) => {
          return (
            <>
            <div className = "itemcarro" >
            <img src={element.imagenUrl} alt="" width="200px" height="250px" />
            <h3>{element.titulo}</h3>
            <button onClick={() => eliminarProducto(element.id)}>Borrar item</button>
            </div>
           </>
           )
        
      })}
   
    </div>
     <div className="vaciar">
    <button onClick={() => clear()}>vaciar Carrito</button> <h3>Total:{precioTotal()}</h3>   
    </div>
    </>
  );
};

export default CartView;