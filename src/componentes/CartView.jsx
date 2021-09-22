import { useContext } from "react";
import { contexto } from "../contexto/CartContext";





const CartView = ()=>{
    
    const {precioTotal, carrito} = useContext(contexto)
    
     console.log(precioTotal())
  

    return (
       <>
       <h1>carrito</h1>
               {carrito.map((element) => {
        return (
            <h3>Procutos</h3>
            )
            })}
      
        </>
    )

}

export default CartView