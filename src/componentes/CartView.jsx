import { useContext } from "react";
import { contexto } from "../contexto/CartContext";





const CartView = ()=>{
    
    const {precioTotal, carrito,eliminarProducto} = useContext(contexto)
    
     console.log(precioTotal())
  

    return (
       <>
               <h1>carrito</h1>
               {precioTotal()}
               {carrito.map((element) => {
                     return (
                        <>
                        <h4>{element.categoria}</h4>
                        <button onClick={() => eliminarProducto(element.id)}>Borrar item</button>
                        </>
                    )
                })}
      
        </>
    )

}

export default CartView