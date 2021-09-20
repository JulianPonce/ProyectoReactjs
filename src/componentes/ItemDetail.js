import ItemCount from "./itemCount";
import { useContext, useState } from "react";
import {Contexto} from "../contexto/CartContext";


const ItemDetail = ({producto}) => {
    
    const [finish, setFinish] = useState(false)
    const {agregarAlCarro} = useContext(Contexto)
    


    const onAdd = (contador) => {
      
      const elementoformateado = {...producto,contador}

      console.log( elementoformateado);
      
      alert("se agregaron"  + contador  + "productos")
       
        
    }

 
   
   
    return(
        
       
        <div>
        
        <h1 key={producto.id}>{producto.categoria} {producto.precio}$</h1>
        {finish === true ? (<button > Ir al carrito </button>): <ItemCount props={agregarAlCarro} stock={4} initial={1} onAdd={onAdd} setFinish={setFinish}/>}
       
        </div>
    
        )

}
export default ItemDetail