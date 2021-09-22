import ItemCount from "./itemCount";
import { useContext, useState } from "react";
import {contexto} from "../contexto/CartContext";

const ItemDetail = ({element}) => {
    
 const [finish, setFinish] = useState(false)
 const {agregarAlCarro} = useContext(contexto)
    
    const onAdd = (contador) => {
      
      const elementoformateado = {...element,contador}

      console.log( elementoformateado);
      
      alert("se agregaron"  + contador  + "productos")
    }
     
    return(
        <div>
          <h1 key={element.id}>{element.categoria} {element.precio}$</h1>
          {finish === true ? (<button > Ir al carrito </button>): <ItemCount props={agregarAlCarro} stock={4} initial={1} onAdd={onAdd} setFinish={setFinish}/>}
        </div>
    
        )

}
export default ItemDetail